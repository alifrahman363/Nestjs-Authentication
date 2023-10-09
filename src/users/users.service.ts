import { Injectable } from '@nestjs/common';
export type User = {
    id: number ,
    name: string, 
    username: string, 
    password: string
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id:1 , 
            name: "Mario",
            username: "mario@gmail.com",
            password: '123'
        },
        {
            id:3 , 
            name: "Cart",
            username: "cart@gmail.com",
            password: '123'
        }
    ]

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);   
    }

}
