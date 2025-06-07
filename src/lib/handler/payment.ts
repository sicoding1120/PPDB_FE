import usePaymentAPI from "@/hooks/use-payment";

const HandlerPayment = () => {
    const { useUpdateTransaction } = usePaymentAPI();
    const mutate = useUpdateTransaction();
    return {mutate}
}

export default HandlerPayment