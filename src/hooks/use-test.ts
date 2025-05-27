/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { axiosClient } from "@/lib/axiosCLient";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

      return { data, isLoading, refetch };
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
      useGetQuestionByCategory,
    };
  };

  const useQuestionsTest = () => {
    const updateQuestion = async (payload:any) => {
      return await axiosClient.patch(`/questions/update/${payload.id}`, payload.dto).then(r=>r.data);
    };
    const deleteQuestion = async (id: string) => {
      return await axiosClient
        .delete(`/questions/delete/${id}`)
        .then((r) => r.data);
    };
    const createBulkQuestion = async (payload: any) => {
      return await axiosClient
        .post("/questions/save/bulk", payload)
        .then((r) => r.data);
    };
    const getQuestions = async () => {
      return await axiosClient.get("/questions").then((r) => r.data);
    };
    const useUpdateQuestion = () => {
      const { mutate: updateQuestionFn } = useMutation({
        mutationFn: (payload:any) => updateQuestion(payload),
        onSuccess: () => {
          Swal.fire({
            title: "success update question",
            icon: "success",
            draggable: false,
          });
        },
        onError: () => {
          Swal.fire({
            title: "failed update question",
            icon: "error",
            draggable: false,
          });
        },
      });

      return { updateQuestionFn };
    };
    const useDeleteQuestion = (id: string) => {
      const { mutate: deleteQuestionMutate } = useMutation({
        mutationFn: () => deleteQuestion(id),
        onSuccess: () => {
          Swal.fire({
            title: "success remove question",
            icon: "success",
            draggable: false,
          });
        },
        onError: () => {
          Swal.fire({
            title: "failed remove question",
            icon: "error",
            draggable: false,
          });
        },
      });
      return { deleteQuestionMutate };
    };
    const useGetAllQuestionsTest = () => {
      const { data, isLoading } = useQuery({
        queryFn: getQuestions,
        queryKey: ["/questions"],
        select: (d) => d.data,
      });

      return { data, isLoading };
    };

    const useCreateBulkQuestion = () => {
      const { mutate: createBulkQuestions } = useMutation({
        mutationFn: (payload: any) => createBulkQuestion(payload),
        onSuccess: () => {
          Swal.fire({
            title: "success create bulk question",
            icon: "success",
            draggable: false,
          });
        },
        onError: () => {
          Swal.fire({
            title: "failed create bulk question",
            icon: "error",
            draggable: false,
          });
        },
      });

      return { createBulkQuestions };
    };
    return {
      useGetAllQuestionsTest,
      useCreateBulkQuestion,
      useDeleteQuestion,
      useUpdateQuestion,
    };
  };

  const useTestApi = () => {
    const getAllTest = async () => {
      return await axiosClient.get("/tests").then((r) => r.data);
    };
    const createTest = async (payload: any) => {
      return await axiosClient.post("/tests/save", payload).then((r) => r.data);
    };
    const deleteTest = async (id: string) => {
      return await axiosClient.delete(`/tests/delete/${id}`).then((r) => r.data);
    };

    const updateTest = async (payload: any) => {
      return await axiosClient.patch(`/tests/update/${payload.id}`, payload.data).then((r) => r.data);
    };

    const getDetailTest = async (id: string) => {
      return await axiosClient.get(`/tests/detail/${id}`).then((r) => r.data);
    };

    const useCreateTest = () => {
      const QueryClient = useQueryClient()
      const { mutate: createTestFn } = useMutation({
        mutationFn: (payload: any) => createTest(payload),

        onSuccess: () => {
          QueryClient.invalidateQueries({queryKey: ["/test"]})
          Swal.fire({
            title: "success create test",
            icon: "success",
            draggable: false,
            timer: 1000,
            showConfirmButton: false,
          });
        },
        onError: () => {
          Swal.fire({
            title: "failed create test",
            icon: "error",
            timer: 1000,
            showConfirmButton: false,
          });
        },
      })
      return { createTestFn };
    }
    const useGetAllTest = () => {
      const { data, isLoading } = useQuery({
        queryFn: getAllTest,
        queryKey: ["/test"],
        select: (d) => d.data,
      });

      return { data, isLoading };
    };

    const useUpdateTest = () => {
      const queryClient = useQueryClient();
      const { mutate: update } = useMutation({
        mutationFn: (payload: any) => updateTest(payload),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/test"] });
          Swal.fire({
            title: "success update test",
            icon: "success",
            draggable: false,
          });
        },
        onError: (e) => {
          Swal.fire({
            title: "failed update test",
            icon: "error",
            draggable: false,
          });

          console.log(e);
        }
      })
      return { update };
    }

    const useDeleteTest = () => {
      const queryClient = useQueryClient();
      const { mutate: deleteTestFn } = useMutation({
        mutationFn: (id: string) => deleteTest(id),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["/test"] });
          Swal.fire({
            title: "success delete test",
            icon: "success",
            draggable: false,
          });
        },
        onError: (e) => {
          Swal.fire({
            title: "failed delete test",
            icon: "error",
            draggable: false,
          });

          console.log(e);
        }
      })
      return { deleteTestFn };
    }

    const useGetDetailTest = (id: string) => {
      const { data, isLoading, refetch } = useQuery({
        queryFn: () => getDetailTest(id),
        queryKey: ["/test"],
        select: (d) => d.data,
      });

      return { data, isLoading, refetch };
    };
    return {useCreateTest, useDeleteTest,useGetAllTest, useGetDetailTest, useUpdateTest };
  };
  return { useCategoryTest, useQuestionsTest, useTestApi };
};

export default useTest;
