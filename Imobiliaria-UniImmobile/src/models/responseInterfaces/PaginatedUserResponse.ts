import type { UserEntity } from "../user"

export interface PaginatedUserResponse {

    users: UserEntity[],
    PaginationParams: {
        Page: number
        PerPage: number
    },
    TotalAmount: number,
    pageNumber: number
}