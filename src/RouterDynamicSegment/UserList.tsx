import type { UserType } from "./UserType"
import { useNavigate } from "react-router"
import User from "./User"

export default function UserList(
    { users }: { users: UserType[] }
) {
  return (
    <div>
        <h2>User List</h2>
        { users.map( user => <User key={user.id} userData={user} /> ) }
    </div>
  )
}
