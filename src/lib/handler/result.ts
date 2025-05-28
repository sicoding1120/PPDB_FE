import useTest from "@/hooks/use-test"
import Swal from "sweetalert2"

const HandlerResult = () => {

    const { useResultApi } = useTest()
    const { usePublish } = useResultApi()
    const { publish } = usePublish()
    const handlePublish =async (id:string) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, publish it!'
        })
        
        if (result.isConfirmed == true && id) {
            publish(id)
        }
    }

    return {handlePublish}
}


export default HandlerResult