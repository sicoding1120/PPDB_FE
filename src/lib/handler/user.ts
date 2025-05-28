import useUsers from "@/hooks/use-users";
import Swal from "sweetalert2";

const HandlerUser = () => {
  const { useBannedUser, useActiveUser, useDeleteUser } = useUsers();
  const { banned } = useBannedUser();
  const { active } = useActiveUser();
  const { deleteUser } = useDeleteUser();
  const handleBanned = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to banned this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, ban it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed == true) {
      banned(id);
    }
  };

  const handleActive = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to activate this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, activate it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed == true) {
      active(id);
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed == true) {
      deleteUser(id);
    }
  };

  return { handleBanned, handleActive, handleDelete };
};

export default HandlerUser;
