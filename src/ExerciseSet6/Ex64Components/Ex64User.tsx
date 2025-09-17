import { NavLink } from "react-router";
import styles from './Ex64User.module.css'

export default function Ex64User({ userName, userId } : { userName: string, userId: number }) {
  return (
    <NavLink to={"/user/" + userId}>
        <div className={ styles.user }>
            { userName ? userName : "No user name given" }
        </div>
    </NavLink>
  )
}
