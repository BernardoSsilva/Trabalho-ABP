import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Plus } from "lucide-react";
import { exampleImmobile } from "../../../../../utilities/exampleData";

dayjs.locale("pt-br");
dayjs.extend(utc);
dayjs.extend(timezone);

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ImmobileList() {
    return (
        <div className="mt-3 w-full h-full">
            <section className="flex justify-end w-full border-b-2 border-b-[var(--primary-color)] p-2">
                <button className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-all duration-500">
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
