import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Pen, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import type { UserEntity } from "../../../../../models/user";
import { UserServices } from "../../../../../services/user-services";
import { UserCreationModal } from "./components/UserCreationModal";


dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

export function UsersList() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
    const [pagesNumber, setPagesNumber] = useState<number>(0);
    const [usersData, setUsersData] = useState<UserEntity[]>([]);
    const [atualPage, setAtualPage] = useState<number>(1);

    const fetchUsers = async () => {
        const service = new UserServices();

        const responseData = (await service.listUsers(10, atualPage))
        console.log(responseData)
        setUsersData(responseData.users);
        setPagesNumber(responseData.pageNumber);
        console.log(pagesNumber)
    }

    useEffect(() => {
        fetchUsers();
    }, [atualPage]);

    return (
        <div className="mt-3 w-[98%] h-[20%]">
            <UserCreationModal isModalOpen={isModalOpen} setIsModalOpen={(value) => setIsModalOpen(value)} userId={selectedUserId} />

            <section className="flex justify-end w-full border-b-2 border-b-[var(--primary-color)] p-2">
                <button onClick={() => setIsModalOpen(true)} className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-500">
                    <Plus size={20} color="white" />
                </button>
            </section>
            <div className="w-full max-h-[60vh] overflow-auto overflow-x-hidden">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome do usuário</TableCell>
                                <TableCell>Data de nascimento</TableCell>
                                <TableCell>Data de criação</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Tipo de usuário</TableCell>
                                <TableCell>Comandos</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersData.length > 0 && usersData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.userName}</TableCell>
                                    <TableCell>
                                        {dayjs(row.bornDate).tz("America/Sao_Paulo").format("D [de] MMMM [de] YYYY")}
                                    </TableCell>
                                    <TableCell>
                                        {dayjs(row.CreatedAt).tz("America/Sao_Paulo").format("D [de] MMMM [de] YYYY")}
                                    </TableCell>
                                    <TableCell>{row.userEmail}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-row gap-1.5">
                                            <button className="bg-amber-500 p-2 rounded-md hover:bg-amber-600 transition-colors duration-200 cursor-pointer" onClick={() => {
                                                setSelectedUserId(row.id)
                                                setIsModalOpen(true)
                                            }}>
                                                <Pen size={24} color="white" />
                                            </button>

                                            <button className="bg-red-500 p-2 rounded-md hover:bg-red-600 transition-colors duration-200 cursor-pointer" onClick={() => {
                                                setSelectedUserId(row.id)
                                                console.log("delete user" + row.id)
                                            }}>
                                                <Trash size={24} color="white" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

            <Pagination
                page={atualPage}
                count={pagesNumber}
                onChange={(event: React.ChangeEvent<unknown>, value: number) => {
                    setAtualPage(value);
                }}
            />
        </div>
    );
}
