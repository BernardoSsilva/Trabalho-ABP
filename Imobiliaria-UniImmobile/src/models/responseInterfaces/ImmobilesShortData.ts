import type { BrazilianState } from "../types/brazilianStatesEnum"
import type { ImmobileTypesEnum } from "../types/immobileTypesEnum"

export interface ImmobilesShortData {
    id: string
    localityInfo: string
    immobileType: ImmobileTypesEnum
    value: number
    postalCode: string
    state: BrazilianState
    city: string
    localLink: string
}