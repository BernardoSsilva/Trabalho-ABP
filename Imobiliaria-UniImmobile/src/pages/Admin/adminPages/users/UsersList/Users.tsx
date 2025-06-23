import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Plus } from "lucide-react";
import { usersList } from "../../../../../utilities/exampleData";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useState } from "react";
import type { UserRolesEnum } from "../../../../../models/types/userRolesEnum";
import type { UserEntity } from "../../../../../models/user";
import { v4 as uuidv4 } from 'uuid';


dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

export function UsersList() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [userEmail, setUserEmail] = useState("");
    const [userRole, setUserRole] = useState<UserRolesEnum>("ADMIN");
    const [userPhone, setUserPhone] = useState("");
    const [userBornDate, setUserBornDate] = useState<Date>(new Date());
    const [userCivilState, setUserCivilState] = useState("");
    const [userName, setUserName] = useState("");

    const saveUser = () => {
        const newUser: UserEntity = {
            userEmail,
            userRole,
            phone: userPhone,
            bornDate: userBornDate,
            civilState: userCivilState,
            userName,
            id: uuidv4(),
            CreatedAt: new Date()
        }
        console.log(newUser)

        usersList.push(newUser)

        console.log("pushou")

        setIsModalOpen(false)
        setUserEmail("")
        setUserRole("ADMIN")
        setUserPhone("")
        setUserBornDate(new Date())
        setUserCivilState("")
        setUserName("")
    }
    return (
        <div className="mt-3 w-full h-full">

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-center">Cadastrar Usuário</h2>

                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nome</label>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Digite o nome"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">E-mail</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    placeholder="exemplo@email.com"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Papel do Usuário</label>
                                <select
                                    name="userRole"
                                    value={userRole}
                                    onChange={(e) => setUserRole(e.target.value as UserRolesEnum)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="ADMIN">Admin</option>
                                    <option value="USER">Usuário</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="(99) 99999-9999"
                                    value={userPhone}
                                    onChange={(e) => setUserPhone(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
                                <input
                                    type="date"
                                    name="bornDate"
                                    value={dayjs(userBornDate).format("YYYY-MM-DD")}
                                    onChange={(e) => setUserBornDate(new Date(e.target.value))}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Estado Civil</label>
                                <input
                                    type="text"
                                    name="civilState"
                                    placeholder="Ex: Solteiro, Casado..."
                                    value={userCivilState}
                                    onChange={(e) => setUserCivilState(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

<div className="flex justify-between">

                            <button
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    saveUser();
                                }}
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-[40%]"
                                >
                                Salvar
                            </button>
                             <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsModalOpen(false);
                                }}
                                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 w-[40%]"
                                >
                                Cancelar
                            </button>
                                </div>
                        </form>
                    </div>
                </div>
            </Modal>


            <section className="flex justify-end w-full border-b-2 border-b-[var(--primary-color)] p-2">
                <button onClick={() => setIsModalOpen(true)} className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-500">
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
