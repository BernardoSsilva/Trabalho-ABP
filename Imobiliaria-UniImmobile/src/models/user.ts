import type { UserRolesEnum } from "./types/userRolesEnum"

export interface UserEntity {
    id: string
    userName: string
    userEmail: string
    role: UserRolesEnum
    phone: string
    bornDate: Date
    CreatedAt: Date
    password: string
}