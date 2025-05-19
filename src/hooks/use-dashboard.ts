"use client"
import { axiosClient } from "@/lib/axiosCLient"
import { useQuery } from "@tanstack/react-query"

const useDashboard = () => {

    const getOverview = async () => {
        return await axiosClient.get("/student/overview").then((r) => r.data)
    }

    const useOverview = () => {
        const { data, isLoading } = useQuery({
            queryFn: getOverview,
            queryKey: ["/student/overview"],
            select: (d) => d.data,
        })
        return {data, isLoading}
    }
    return {useOverview}
}

export default useDashboard