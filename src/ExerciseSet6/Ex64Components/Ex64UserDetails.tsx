import { useParams } from "react-router"
import { getUserById } from "./dataSource";
import type { User } from './dataTypes';

export default function Ex64UserDetails() {
    const params = useParams();
    console.log(params);

    console.log('User ID is: ' + params.id);

    // find user from our data source based on the id
    const user : User | undefined = getUserById(Number(params.id));
    if(user === undefined) {
        return <div>No user found with id {params.id}</div>
    }

    return (
        <div>
            <h2>{ user.name }</h2>
            <p>Year of birth: { user.yearOfBirth }</p>
            <p>Address: { user.address } </p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
