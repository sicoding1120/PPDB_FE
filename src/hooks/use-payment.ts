/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { axiosClient } from "@/lib/axiosCLient";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const usePaymentAPI = () => {
  const getTransactions = async () => {
    return await axiosClient.get("/payment").then((r) => r.data);
  };
  const updateTransaction = async (payload: any) => {
    return await axiosClient
      .put(`/payment/update/${payload.id}`, payload.data)
      .then((r) => r.data);
  };

  const getDetailTransaction = async (id: string) => {
    return await axiosClient.get(`/payment/${id}`).then((r) => r.data);
  };

  const useGetTransactions = () => {
    const { data, isLoading } = useQuery({
      queryFn: getTransactions,
      queryKey: ["transactions"],
      select: (d) => d.data,
    });

    return { data, isLoading };
  };

  const useGetDetailTransaction = (id: string) => {
    const { data, isLoading } = useQuery({
      queryFn: () => getDetailTransaction(id),
      queryKey: ["/payment/detail"],
      select: (d) => d.data,
    });
    return { data, isLoading };
  };

  const useUpdateTransaction = () => {
    const { mutate: updateTransactionAPI } = useMutation({
      mutationFn: (payload) => updateTransaction(payload),
      onSuccess: () => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: () => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });

    return {
      updateTransactionAPI,
    };
  };
  return {
    useGetTransactions,
    useUpdateTransaction,
    useGetDetailTransaction,
  };
};

export default usePaymentAPI;
