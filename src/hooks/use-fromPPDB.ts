"use client";
import { axiosClient } from "@/lib/axiosCLient";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const usePPDB = () => {
  const getStudents = async () => {
    return await axiosClient.get("/student").then((r) => r.data);
  };
  // const getParents = async () => {
  //   return await axiosClient.get("/parents").then((r) => r.data);
  // };

  const getDetailStudent = async (id: string) => {
    return await axiosClient.get(`/student/${id}`).then((r) => r.data);
  };
  const deleteStundent = async (id: string) => {
    return await axiosClient
      .delete(`/student/delete/${id}`)
      .then((r) => r.data);
  };
  const getParents = async () => {
    return await axiosClient.get("/student/parents").then((r) => r.data);
  };
  const getDetailParent = async (id: string) => {
    return await axiosClient.get(`/student/parents/${id}`).then((r) => r.data);
  };

  const useGetStudents = () => {
    const { data, isLoading } = useQuery({
      queryFn: getStudents,
      queryKey: ["/students"],
      select: (d) => d.data,
    });
    return { data, isLoading };
  };
  const useParents = () => {
    const { data, isLoading } = useQuery({
      queryFn: getParents,
      queryKey: ["/parents"],
      select: (d) => d.data,
    });
    return { data, isLoading };
  };
  const useGetDetailParent = (id:string) => {
    const { data, isLoading } = useQuery({
      queryFn: ()=> getDetailParent(id),
      queryKey: ["/parents/detail"],
      select: (d) => d.data,
    });
    return { data, isLoading };
  }

  const useGetDetailStudent = (id: string) => {
    const { data, isLoading } = useQuery({
      queryFn: () => getDetailStudent(id),
      queryKey: [`/student/${id}`],
      select: (d) => d.data,
    });
    return { data, isLoading };
  };
  const useDeleteStudent = () => {
    const { mutate: deleteStudent } = useMutation({
      mutationFn: (id: string) => deleteStundent(id),
      onSuccess: () => {
        Swal.fire({
          title: "success remove student",
          icon: "success",
          draggable: false,
        });
      },
    });
    return { deleteStudent };
  };
  return { useGetStudents, useParents, useGetDetailStudent, useDeleteStudent, useGetDetailParent };
};

export default usePPDB;
