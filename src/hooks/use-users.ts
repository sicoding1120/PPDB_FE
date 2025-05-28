import { axiosClient } from "@/lib/axiosCLient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const useUsers = () => {
  const getUsers = async () => {
    return await axiosClient.get("/auth/users").then((r) => r.data);
  };

    const updateStatusBanned = async (id:string) => {
        return await axiosClient.patch(`/auth/users/status/${id}`,).then((r) => r.data);
    }

    const updateStatusActive = async (id:string) => {
        return await axiosClient.patch(`/auth/users/status/active/${id}`).then((r) => r.data);
    }

    const deleteUserFn = async (id: string) => {
        return await axiosClient.delete(`/auth/users/delete/${id}`).then((r) => r.data);
    }

    const useDeleteUser = () => {
        const {mutate:deleteUser } = useMutation({
            mutationFn: (id: string) => deleteUserFn(id),
            onSuccess: () => {
                Swal.fire({
                    title: "Success",
                    text: "User has been deleted successfully",
                    icon: "success",
                    timer: 1000,
                })
            },
            onError: () => {
                Swal.fire({
                    title: "Error",
                    text: "Failed to delete user",
                    icon: "error",
                })
            }
        })

        return {deleteUser}
    }

    const useActiveUser = () => {
        const queryClient = useQueryClient();
        const { mutate: active } = useMutation({
            mutationFn: (id: string) => updateStatusActive(id),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["/users"]})
                Swal.fire({
                    title: "Success",
                    text: "User has been activated successfully",
                    icon: "success",
                    timer: 1000,
                })
            },
            onError: () => {
                Swal.fire({
                    title: "Error",
                    text: "Failed to activate user",
                    icon: "error",
                })
            }
        })

        return {active}
    }

    const useBannedUser = () => {
        const queryClient = useQueryClient();
        const { mutate: banned } = useMutation({
            mutationFn: (id: string) => updateStatusBanned(id),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["/users"]})
                Swal.fire({
                    title: "Success",
                    text: "User has been banned successfully",
                    icon: "success",
                    timer: 1000,
                })
            },
            onError: () => {
                Swal.fire({
                    title: "Error",
                    text: "Failed to ban user",
                    icon: "error",
                })
            }
        })

        return {banned}
    }
  const useGetAllUsers = () => {
    const { data, isLoading } = useQuery({
      queryFn: getUsers,
      queryKey: ["/users"],
      select: (d) => d.data,
    });

    return { data, isLoading };
    };
    
    

  return { useGetAllUsers, useBannedUser, useActiveUser, useDeleteUser };
};

export default useUsers;
