/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { axiosClient } from "@/lib/axiosCLient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const useTest = () => {
  const useCategoryTest = () => {
    const getAllCategoryTest = async () => {
      return await axiosClient.get("/category-test").then((r) => r.data);
    };
    const getQuestionByCategory = async (testID: string) => {
      return await axiosClient
        .get(`/questions/by-category?testID=${testID}`)
        .then((r) => r.data);
    };
    const deleteCategoryTest = async (id: string) => {
      return await axiosClient
        .delete(`/category-test/delete/${id}`)
        .then((r) => r.data);
    };
    const createCategoryTest = async (payload: any) => {
      return await axiosClient
        .post("category-test/save", payload)
        .then((r) => r.data);
    };
    const updateCategoryTest = async (payload: any) => {
      return await axiosClient
        .put(`/category-test/update/${payload.id}`, payload.data)
        .then((r) => r.data);
    };
    const getDetailCategoryTest = async (id: string) => {
      return await axiosClient.get(`/category-test/${id}`).then((r) => r.data);
    };

    const useGetQuestionByCategory = (testID: string) => {
      const { data, isLoading, refetch } = useQuery({
        queryFn: () => getQuestionByCategory(testID),
        queryKey: ["/questionByCategory", testID],
        select: (d) => d.data,
        enabled: !!testID,
      });

      return {data,isLoading, refetch}
    };

    const useGetAllCategoryTest = () => {
      const { data, isLoading } = useQuery({
        queryKey: ["/category-test"],
        queryFn: getAllCategoryTest,
        select: (d) => d.data,
      });

      return { data, isLoading };
    };
    const useGetDetailCategoryTest = (id: string) => {
      const { data, isLoading } = useQuery({
        queryFn: () => getDetailCategoryTest(id),
        queryKey: ["/category-test/detail"],
        select: (d) => d.data,
      });

      return { data, isLoading };
    };
    const useUpdateCategoryTest = () => {
      const router = useRouter();
      const { mutate: updateCategory } = useMutation({
        mutationFn: (payload: any) => updateCategoryTest(payload),
        onSuccess: () => {
          Swal.fire({
            title: "success update category test",
            icon: "success",
            draggable: false,
          });
          router.back();
        },
        onError: () => {
          Swal.fire({
            title: "failed update category test",
            icon: "error",
            draggable: false,
          });
        },
      });
      return { updateCategory };
    };
    const useDeleteCategoryTest = () => {
      const { mutate: Delete } = useMutation({
        mutationFn: (id: string) => deleteCategoryTest(id),
        onSuccess: () => {
          Swal.fire({
            title: "success remove category test",
            icon: "success",
            draggable: false,
          });
        },
        onError: () => {
          Swal.fire({
            title: "failed remove category test",
            icon: "error",
            draggable: false,
          });
        },
      });

      return { Delete };
    };

    const useCreateCategoryTest = () => {
      const router = useRouter();
      const { mutate: create } = useMutation({
        mutationFn: (payload: any) => createCategoryTest(payload),
        onSuccess: () => {
          Swal.fire({
            title: "success create category test",
            icon: "success",
            draggable: false,
          });
          router.back();
        },
        onError: () => {
          Swal.fire({
            title: "failed create category test",
            icon: "error",
            draggable: false,
          });
        },
      });
      return { create };
    };
    return {
      useGetAllCategoryTest,
      useCreateCategoryTest,
      useDeleteCategoryTest,
      useUpdateCategoryTest,
      useGetDetailCategoryTest,
      useGetQuestionByCategory
    };
  };

  const useQuestionsTest = () => {
    const getQuestions = async () => {
      return await axiosClient.get("/questions").then((r) => r.data);
    };
    const useGetAllQuestionsTest = () => {
      const { data, isLoading } = useQuery({
        queryFn: getQuestions,
        queryKey: ["/questions"],
        select: (d) => d.data,
      });

      return { data, isLoading };
    };
    return { useGetAllQuestionsTest };
  };

  const useTestApi = () => {

    const getAllTest = async () => {
      return await axiosClient.get("/tests").then(r=>r.data)
    }
    const useGetAllTest = () => {
      const { data, isLoading } = useQuery({
        queryFn: getAllTest,
        queryKey: ["/test"],
        select: (d) => d.data,
      });
  
      return { data, isLoading };
    }
    return {useGetAllTest}
  }
  return { useCategoryTest, useQuestionsTest , useTestApi};
};

export default useTest;
