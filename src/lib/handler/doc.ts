import usePPDB from "@/hooks/use-fromPPDB";

const HandlerDocument = () => {
    const { useChangeStatusDoc } = usePPDB();
    const mutate = useChangeStatusDoc();

    return { mutate }
}


export default HandlerDocument