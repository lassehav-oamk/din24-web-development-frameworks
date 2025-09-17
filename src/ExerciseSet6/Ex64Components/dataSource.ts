 import type { User } from './dataTypes';
 
 const userData : User[] = [
        {id: 1, name: "John Doe", yearOfBirth: 1990, address: "Example street 1, 00100 Helsinki", phone: "040 123 4567", email: "john@doe" },
        {id: 4576, name: "Jane Smith", yearOfBirth: 1985, address: "Sample road 2, 00200 Espoo", phone: "050 987 6543", email: "jane@smith" },
        {id: 443, name: "Alice Johnson", yearOfBirth: 1995, address: "Test avenue 3, 00300 Vantaa", phone: "060 555 1234", email: "alice@johnson" }
    ];  

export function getUserById(id: number): User | undefined {
    return userData.find(user => user.id === id);
}

export function getAllUsers(): User[] {
    return userData;
}


