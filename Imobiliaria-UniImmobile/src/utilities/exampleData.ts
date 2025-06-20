import type { UserEntity } from "../models/user";

export const usersList: UserEntity[] = Array.from({ length: 25 }, (_, i) => {
    const id = (i + 1).toString();
    const isEven = i % 2 === 0;
    return {
        id,
        userName: `testUser${id}`,
        userEmail: `test@user${id}.com`,
        phone: '48999999999',
        civilState: 'CASADO',
        bornDate: new Date(2005, 7, 8), // 8 de agosto (mês 7 = agosto)
        CreatedAt: new Date(),
        userRole: isEven ? 'ADMIN' : 'OPERATOR',
    };
});
