import type { ImmobileCreationDto } from "../models/DTOs/ImmobileCreationDTO";
import type { ImmobileUpdateDto } from "../models/DTOs/ImmobileUpdateDto";
import type { ImmobileEntity } from "../models/immobile";
import type { PaginatedImmobilesResponse } from "../models/responseInterfaces/PaginatedImmobilesResponse";
import { server } from "./Axios";

export class ImmobilesServices {
    async ListImmobiles(perPage: number, page: number): Promise<PaginatedImmobilesResponse> {
        const response = await server.get("/Immobiles", {
            params: {
                perPage,
                page
            }
        });

        return response.data;
    }

    async SelectImmobile(immobileId: string): Promise<ImmobileEntity> {
        const response = await server.get(`/Immobiles/${immobileId}`)

        console.log(response.data)
        return response.data
    }

    async PostNewImmobile(data: ImmobileCreationDto) {
        await server.post("/Immobiles", data)
    }

    async UpdateImmobile(data: ImmobileUpdateDto, immobileId: string) {
        await server.put(`/Immobiles/${immobileId}`, data)
    }

    async DeleteImmobile(immobileId: string) {
        await server.delete(`/Immobiles/${immobileId}`)
    }
}