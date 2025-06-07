import usePPDB from "@/hooks/use-fromPPDB";
import Swal from "sweetalert2";

const StudentHandler = () => {

    const { useDeleteStudent, useChangeStatusStudent } = usePPDB();
    const mutate = useDeleteStudent();
    const { changeStatus } = useChangeStatusStudent();
    
    const HandlerUpdateStatusStudent = async (id:string, status:string) => {
           const result  = await  Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, update it!'
            })
        
            if (result.isConfirmed == true) {
             await changeStatus({
                id: id,
                data: {
                  status: status
                }
              })
            }
          }

    return {HandlerUpdateStatusStudent,handleDeleteStudent:mutate }
}

export default StudentHandler