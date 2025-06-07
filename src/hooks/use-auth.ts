import { axiosClient } from "@/lib/axiosCLient";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import Cookie from "js-cookie";



export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    status: string;
    message: string;
}

const useAuthModule = () => {
  const router = useRouter();

  const loginAdmin = async (payload: LoginPayload) => {
    return await axiosClient.post("/auth/admin/login", payload).then((res) => res.data);
  };
const logout = async () => {
  return await axiosClient.post("/auth/admin/logout").then((res) => res.data);
  }
  const profile = async (id:string) => {
    return await axiosClient.get(`/auth/profile/admin/${id}`).then(res=>res.data)
  }
    
    const useLogout = () => {
      const { mutate:Logout, isPending } = useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            Swal.fire({
            title: "success logout",
            icon: "success",
            draggable: false,
            })
            
            router.push("/auth/login")
          },
          onError: () => {
            Swal.fire({
              title: "failed logout",
              icon: "error",
              draggable: false,
            });
        }
      });
      return { Logout, isPending };
    }
  const useLoginAdmin = () => {
    const { mutate, isPending } = useMutation({
      mutationFn: (payload: LoginPayload) => loginAdmin(payload),
      onSuccess: () => {
        
        // Cookie.set('AdminToken', response?.data?.access_token)


        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });

        router.push("/dashboard/admin");

      },
      onError: () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        // } else { }
      },
    })
    return { mutate, isPending };
  };

  const useProfileAdmin = (id:string) => {
    const { data,isLoading} = useQuery({
      queryFn: () => profile(id),
      queryKey: ["/profile/admin"],
      select: data => data.data,
      enabled: !!id
    })

    return {data,isLoading}
  }

  return { useLoginAdmin, useLogout, useProfileAdmin }

};

export default useAuthModule;