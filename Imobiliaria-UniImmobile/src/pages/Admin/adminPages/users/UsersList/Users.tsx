import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Plus } from "lucide-react";
import { usersList } from "../../../../../utilities/exampleData";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

export function UsersList() {
    return (
        <div className="mt-3 w-full h-full">
            <section className="flex justify-end w-full border-b-2 border-b-[var(--primary-color)] p-2">
                <button className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-500">
                    <Plus size={20} color="white" />
                </button>
            </section>
            <div className="w-full max-h-[23rem] overflow-auto overflow-x-hidden">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID do usuário</TableCell>
                                <TableCell>Nome do usuário</TableCell>
                                <TableCell>Data de nascimento</TableCell>
                                <TableCell>Data de criação</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Tipo de usuário</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersList.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.userName}</TableCell>
                                    <TableCell>
                                        {dayjs(row.bornDate).tz("America/Sao_Paulo").format("D [de] MMMM [de] YYYY")}
                                    </TableCell>
                                    <TableCell>
                                        {dayjs(row.CreatedAt).tz("America/Sao_Paulo").format("D [de] MMMM [de] YYYY")}
                                    </TableCell>
                                    <TableCell>{row.userEmail}</TableCell>
                                    <TableCell>{row.userRole}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
