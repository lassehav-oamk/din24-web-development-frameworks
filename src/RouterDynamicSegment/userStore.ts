// This is simple user store system, just exporting a hardcoded list of users
import type { UserType } from "./UserType"
export const userData : UserType[] = [
        { id: 1, name: 'John Doe', email: 'john@doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'jane@smith', phone: '987-654-3210' },
        { id: 3, name: 'Alice Johnson', email: 'alice@johnson', phone: '555-555-5555' }
    ];