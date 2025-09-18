import type { AxiosResponse } from "axios";
import type { AuthenticationDto } from "../models/DTOs/authenticationDto";
import type { UserCreationDto } from "../models/DTOs/userCreationDto";
import type { PaginatedUserResponse } from "../models/responseInterfaces/PaginatedUserResponse";
import { server } from "./Axios";
import type { UserUpdateDto } from "../models/DTOs/userUpdateDto";
import type { UserEntity } from "../models/user";

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
        server.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
        localStorage.setItem("userId", response.data.user.id)
        return response;
    }

    async listUsers(perPage: number, page: number): Promise<PaginatedUserResponse> {
        const response = await server.get("/Users", {
            params: {
                perPage,
                page
            }
        });

        return response.data;
    }

    async findUser(userId: string): Promise<UserEntity> {
        const response = await server.get(`/Users/${userId}`);
        return response.data;
    }
}