import type { ImmobilesShortData } from "./ImmobilesShortData"

export interface PaginatedImmobilesResponse {

    immobiles: ImmobilesShortData[],
    PaginationParams: {
        Page: number
        PerPage: number
    },
    TotalAmount: number,
    pageNumber: number
}