import type { User } from './dataTypes';
import Ex64User from './Ex64User'
import { getAllUsers } from './dataSource';

export default function Ex64UserList() {

    const userData : User[] = getAllUsers();
    
    return (
        <div>
            <h1>User List - Master view</h1>
                <p>This view shows a list of users for the user to select for more
                    detailed view. 
                    Click on a user to see details in the detail view.
                </p>
                <div>
                    {
                        userData.map(user => 
                            <Ex64User 
                                key={user.id} 
                                userId={user.id} 
                                userName={user.name}
                            />
                        )
                    }           
                </div>
        </div>
    )
}
