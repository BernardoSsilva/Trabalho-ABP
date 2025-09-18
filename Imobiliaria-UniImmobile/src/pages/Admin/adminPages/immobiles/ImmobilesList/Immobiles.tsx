import { Backdrop, CircularProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Images, Pen, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import type { ImmobilesShortData } from "../../../../../models/responseInterfaces/ImmobilesShortData";
import { BrazilianState } from "../../../../../models/types/brazilianStatesEnum";
import { ImmobilesServices } from "../../../../../services/immobiles-services";
import { ImmobilesCreationModal } from "./components/ImmobileCreationModal";
import { ImmobileDeleteDialog } from "./components/ImmobileDeleteDialog";
import { GalleryModal } from "./components/GalleryModal";
import { ImmobileTypesEnum } from "../../../../../models/types/immobileTypesEnum";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

const formatCurrency = (value: number) => {
    if (!value) return "";
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
};

export function ImmobileList() {
    const [pagesNumber, setPagesNumber] = useState<number>(0);
    const [atualPage, setAtualPage] = useState<number>(1);
    const [immobilesData, setImmobilesData] = useState<ImmobilesShortData[]>([])
    const [selectedImmobileId, setSelectedImmobileId] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState<boolean>(false);


    const fetchImmobilesList = async () => {
        setIsLoading(true)
        try {
            const service = new ImmobilesServices();

            const response = await service.ListImmobiles(10, atualPage);
            setImmobilesData(response.immobiles)
            setPagesNumber(response.pageNumber)
        } catch (error) {
            alert("Erro de servidor")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchImmobilesList()

    }, [atualPage, isModalOpen])
    return (
        <div className="mt-3 w-full h-full">

            <Backdrop
                open={isLoading}
            >
                <div className="bg-white flex border-(--primary-color) border-2 rounded-xl p-4 items-center justify-center gap-1">

                    <CircularProgress color="inherit" size={24} />
                    Carregando Dados
                </div>
            </Backdrop>

            <ImmobilesCreationModal isModalOpen={isModalOpen} selectedImmobileId={selectedImmobileId} setIsModalOpen={setIsModalOpen} setSelectedImmobileId={setSelectedImmobileId} />
            <ImmobileDeleteDialog isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} immobileId={selectedImmobileId} setSelectedImmobileId={setSelectedImmobileId} />
            <GalleryModal immobileId={selectedImmobileId} setIsOpen={setIsGalleryModalOpen} isOpen={isGalleryModalOpen} />
            <section className="flex justify-end w-full border-b-2 border-b-[var(--primary-color)] p-2">
                <button onClick={() => setIsModalOpen(true)} className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-500">
                    <Plus size={20} color="white" />
                </button>
            </section>

            <div className="w-full max-h-[60vh] overflow-y-scroll">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tipo</TableCell>
                                <TableCell>Código Postal</TableCell>
                                <TableCell>Cidade</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Link</TableCell>
                                <TableCell>Comandos</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {immobilesData.length > 0 && immobilesData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        {Object.values(ImmobileTypesEnum)[parseInt(row.immobileType)]}
                                    </TableCell>
                                    <TableCell>{row.postalCode}</TableCell>
                                    <TableCell>{row.city}</TableCell>
                                    <TableCell>{Object.values(BrazilianState)[parseInt(row.state)]}</TableCell>
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
                                        <div className="flex flex-row gap-1.5">
                                            <button className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer" onClick={() => {
                                                setSelectedImmobileId(row.id)
                                                setIsGalleryModalOpen(true)
                                            }}>
                                                <Images size={24} color="white" />
                                            </button>

                                            <button className="bg-amber-500 p-2 rounded-md hover:bg-amber-600 transition-colors duration-200 cursor-pointer" onClick={() => {
                                                setSelectedImmobileId(row.id)
                                                setIsModalOpen(true)
                                            }}>
                                                <Pen size={24} color="white" />
                                            </button>

                                            <button className="bg-red-500 p-2 rounded-md hover:bg-red-600 transition-colors duration-200 cursor-pointer" onClick={() => {
                                                setSelectedImmobileId(row.id)
                                                setIsDeleteModalOpen(true)
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
                onChange={(e: React.ChangeEvent<unknown>, value: number) => {
                    console.log(e)
                    setAtualPage(value);
                }}
            />
        </div >

    );
}
