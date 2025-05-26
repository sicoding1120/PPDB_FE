import { axiosClient } from "@/lib/axiosCLient";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
 
const useAxiosAuth = () => {
  const { data: session } = useSession();
 
  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      (config: any) => {
        config.headers[
          "Authorization"
        ] = `Bearer ${session?.user}`;
 
        return config;
      },
      (error: any) => Promise.reject(error)
    );
 
    const responseIntercept = axiosClient.interceptors.response.use(
      async (response: any) => response,
      async (error: any) => {
        signOut();
        window.location.replace("/auth/login");
      }
    );
 
    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [session,]);
 
  return axiosClient;
};
 
export default useAxiosAuth;