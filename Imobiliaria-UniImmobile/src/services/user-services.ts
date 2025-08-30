import type { Axios, AxiosResponse } from "axios";
import type { AuthenticationDto } from "../models/DTOs/authenticationDto";
import { server } from "./Axios";
import type { PaginatedUserResponse } from "../models/responseInterfaces/PaginatedUserResponse";
import type { UserCreationDto } from "../models/DTOs/userCreationDto";

export class UserServices {

    async createNewUser(userObject: UserCreationDto) {
        console.log(userObject)

        await server.post("/Users", userObject)
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