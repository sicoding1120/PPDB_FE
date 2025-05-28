import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/ui/avatar'

export default function AvatarDropdown () {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='flex items-center bg-black/5 justify-center w-10 h-10 cursor-pointer'>
          <p className='text-sm font-semibold'>US</p>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-48 mt-2'>
        <DropdownMenuItem onClick={() => console.log('Go to profile')}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Logout')}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
