import type { ImageEntity } from "./image";
import type { ImmobileStatusEnum } from "./types/immobileStatusEnum";
import type { ImmobileTypesEnum } from "./types/immobileTypesEnum";

export interface ImmobileEntity {
    id: string;
    localityInfo: string;
    immobileType: ImmobileTypesEnum;
    localLink?: string;
    status: ImmobileStatusEnum;
    userCreationId: string;
    creationDate: Date;
    updateDate?: Date;
    postalCode: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    hasScripture: boolean;
    immobileDescription?: string;
    value: number;
    Images: ImageEntity[];
}

