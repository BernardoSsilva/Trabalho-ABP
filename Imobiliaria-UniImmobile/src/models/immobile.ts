import type { BrazilianState } from "./types/brazilianStatesEnum";
import type { ImmobileTypesEnum } from "./types/immobileTypesEnum";

export interface ImmobileEntity {
    id: string
    localityInfo: string
    immobileType: ImmobileTypesEnum
    localLink: string
    value: number
    userCreationId: string
    creationDate: Date
    updateDate?: Date
    postalCode: string
    state: BrazilianState
    city: string
    street: string
    neighborhood: string
    hasScripture: boolean
    immobileDescription: string
}

