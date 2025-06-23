import { Checkbox, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Plus } from "lucide-react";
import { exampleImmobile } from "../../../../../utilities/exampleData";
import { useState } from "react";
import type { ImmobileTypesEnum } from "../../../../../models/types/immobileTypesEnum";
import type { ImmobileStatusEnum } from "../../../../../models/types/immobileStatusEnum";
import { v4 as uuidv4 } from 'uuid';
import type { ImmobileEntity } from "../../../../../models/immobile";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ImmobileList() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [immobileType, setImmobileType] = useState<ImmobileTypesEnum>("HABITATION");
    const [status, setStatus] = useState<ImmobileStatusEnum>("ACTIVE");
    const [userCreationId, setUserCreationId] = useState("user-id-fake");
    const [localityInfo, setLocalityInfo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [state, setState] = useState("");
    const [street, setStreet] = useState("");
    const [value, setValue] = useState(0);
    const [localLink, setLocalLink] = useState("");
    const [hasScripture, setHasScripture] = useState(false);
    const [immobileDescription, setImmobileDescription] = useState("");

    const saveImmobile = () => {
        const newImmobile: ImmobileEntity = {
            id: uuidv4(),
            localityInfo,
            immobileType,
            localLink,
            status,
            userCreationId,
            creationDate: new Date(),
            postalCode,
            state,
            city,
            street,
            neighborhood,
            hasScripture,
            immobileDescription,
            value,
            Images: [{
                id: "img-1a",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=1",
                size: 150000,
                name: "fachada.jpg",
                immobileId: "c149f257-7e18-4cf2-b6cd-9814aef311b3",
                cloudnaryPublicId: ""
            },]
        };

        exampleImmobile.push(newImmobile);
        setIsModalOpen(false);

        setImmobileType("HABITATION")
        setStatus("ACTIVE")
        setLocalityInfo("")
        setPostalCode("")
        setCity("")
        setNeighborhood("")
        setState("")
        setStreet("")
        setValue(0)
        setLocalLink("")
        setHasScripture(false)
        setImmobileDescription("")
    };
    return (
        <div className="mt-3 w-full h-full">


            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastrar Imóvel</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 h-100 overflow-scroll overflow-x-hidden">

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Tipo de Imóvel</label>
                                <select
                                    value={immobileType}
                                    onChange={(e) => setImmobileType(e.target.value as ImmobileTypesEnum)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="HABITATION">Imóvel</option>
                                    <option value="LAND">Terreno</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Status</label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as ImmobileStatusEnum)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="ACTIVE">Ativo</option>
                                    <option value="INACTIVE">Inativo</option>
                                    <option value="INANALYSIS">Em análise</option>
                                </select>
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="mb-1 font-medium">Informações da Localização</label>
                                <input
                                    type="text"
                                    value={localityInfo}
                                    onChange={(e) => setLocalityInfo(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Código Postal</label>
                                <input
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Estado</label>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Cidade</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Bairro</label>
                                <input
                                    type="text"
                                    value={neighborhood}
                                    onChange={(e) => setNeighborhood(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="mb-1 font-medium">Rua</label>
                                <input
                                    type="text"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Valor</label>
                                <input
                                    type="number"
                                    value={value}
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 font-medium">Link de Localização</label>
                                <input
                                    type="url"
                                    value={localLink}
                                    onChange={(e) => setLocalLink(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="mb-1 font-medium">Descrição do Imóvel</label>
                                <textarea
                                    value={immobileDescription}
                                    onChange={(e) => setImmobileDescription(e.target.value)}
                                    className="rounded-lg border border-gray-300 px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex items-center gap-2 md:col-span-2">
                                <input
                                    type="checkbox"
                                    checked={hasScripture}
                                    onChange={(e) => setHasScripture(e.target.checked)}
                                />
                                <label className="font-medium">Escriturado</label>
                            </div>

                            <div className="flex justify-between gap-4 md:col-span-2 mt-2">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        saveImmobile();
                                    }}
                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition w-[45%]"
                                >
                                    Salvar
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsModalOpen(false);
                                    }}
                                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition w-[45%]"
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

            <div className="w-full max-h-[23rem] overflow-y-scroll">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tipo</TableCell>
                                <TableCell>Código Postal</TableCell>
                                <TableCell>Cidade</TableCell>
                                <TableCell>Bairro</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Rua</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Link</TableCell>
                                <TableCell>Escriturado</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {exampleImmobile.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        {row.immobileType == "HABITATION" ? "Imóvel" : "Terreno"}
                                    </TableCell>
                                    <TableCell>{row.postalCode}</TableCell>
                                    <TableCell>{row.city}</TableCell>
                                    <TableCell>{row.neighborhood}</TableCell>
                                    <TableCell>{row.state}</TableCell>
                                    <TableCell>{row.street}</TableCell>
                                    <TableCell>{formatCurrency(row.value)}</TableCell>
                                    <TableCell>
                                        <a
                                            href={row.localLink}
                                            className="text-blue-600 underline hover:text-blue-800"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Acesse o local
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox checked={row.hasScripture} disabled />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
