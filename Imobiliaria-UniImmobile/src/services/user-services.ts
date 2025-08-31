import type { AxiosResponse } from "axios";
import type { AuthenticationDto } from "../models/DTOs/authenticationDto";
import type { UserCreationDto } from "../models/DTOs/userCreationDto";
import type { PaginatedUserResponse } from "../models/responseInterfaces/PaginatedUserResponse";
import { server } from "./Axios";
import type { UserUpdateDto } from "../models/DTOs/userUpdateDto";

export class UserServices {

    async createNewUser(userObject: UserCreationDto) {
        await server.post("/Users", userObject)
    }

    async updateUserData(userObject: UserUpdateDto, userId: string) {
        await server.put(`/Users/${userId}`, userObject)
    }

    async deleteUserData(userId: string) {
        await server.delete(`/Users/${userId}`)
    }

    async userLogin(authenticationObject: AuthenticationDto): Promise<AxiosResponse> {
        const response = await server.post("/Users/Login", authenticationObject)
        server.defaults.headers.common['Authorization'] = response.data;

        return response;
    }

    async listUsers(perPage: number, page: number): Promise<PaginatedUserResponse> {
        const response = await server.get("/Users", {
            params: {
                perPage,
                page
            }
        });

        console.log(response)
        return response.data;
    }

    async findUser(userId: string): Promise<AxiosResponse> {
        const response = await server.get(`/Users/${userId}`);
        return response;
    }
}