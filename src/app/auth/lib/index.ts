import useAxiosAuth from "@/hooks/use-axiosAuth";
import { axiosClient } from "@/lib/axiosCLient";
import { useRouter } from "next/navigation";
import { LoginPayload, LoginResponse } from "../interface";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Cookie from "js-cookie";

const useAuthModule = () => {
  const router = useRouter();

  const loginAdmin = async (payload: LoginPayload) => {
    return await axiosClient.post("/auth/admin/login", payload).then((res) => res.data);
  };

  const useLoginAdmin = () => {
    const { mutate, isPending } = useMutation({
      mutationFn: (payload: LoginPayload) => loginAdmin(payload),
      onSuccess: (response) => {
        console.log('response', response);
        
        Cookie.set('AdminToken', response?.data?.access_token)

        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });

        // router.push("/dashboard/admin");

      },
      onError: (err: any) => {
        // if (err.response.status === 422) {
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

  return { useLoginAdmin }

};

export default useAuthModule;