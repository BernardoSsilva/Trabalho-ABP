import type { UserRolesEnum } from "./types/userRolesEnum"

export interface User {
    id: string
    userName: string
    userEmail: string
    userRole: UserRolesEnum
    phone: string
    bornDate: Date
    CreatedAt: Date
    civilState: string
}