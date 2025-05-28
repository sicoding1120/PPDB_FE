import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import useAuthModule from '@/hooks/use-auth'

export default function AvatarDropdown() {
  const router = useRouter()

  const { useLogout } = useAuthModule()
  const {Logout}  = useLogout()

  const handleLogout = async () => {
    const result  = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })

    if (result.isConfirmed === true) {
      Logout()
    }


  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='flex items-center bg-black/5 justify-center w-10 h-10 cursor-pointer'>
          <p className='text-sm font-semibold'>US</p>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-48 mt-2'>
        <DropdownMenuItem onClick={() => router.push("/dashboard/admin/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLogout()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
