import { Backdrop, CircularProgress, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { NavBar } from "../../../components/NavBar";
import type { ImmobilesShortData } from "../../../models/responseInterfaces/ImmobilesShortData";
import { ImmobilesServices } from "../../../services/immobiles-services";
import "../Home/homeStyle.css";
import { ImmobileCard } from "./cardComponent/Card";
export function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [immobilesList, setImmobilesList] = useState<ImmobilesShortData[]>([])
    const [pagesNumber, setPagesNumber] = useState<number>(0);
    const [atualPage, setAtualPage] = useState<number>(1);

    const services = new ImmobilesServices()
    const fetchImmobiles = async () => {
        setIsLoading(true)
        try {

            const result = await services.ListImmobiles(10, atualPage)

            setPagesNumber(result.pageNumber)
            setImmobilesList(result.immobiles)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchImmobiles();
    }, [atualPage])


    return (
        <>

            <Backdrop
                open={isLoading}
            >
                <div className="bg-white flex border-(--primary-color) border-2 rounded-xl p-4 items-center justify-center gap-1">

                    <CircularProgress color="inherit" size={24} />
                    Carregando Dados
                </div>
            </Backdrop>


            <NavBar nameTitle="Seja bem-vindo usuario!" />
            {/* <section className="banner" >
                <div className="arrows">
                    <button className="arrow left">&#10094;</button>
                    <div className="searchBox">
                        <select name="tipo" id="tipo">
                            <option value="tipo">Tipo</option>
                            <option value="casa">Casa</option>
                            <option value="ap">Apartamento</option>
                        </select>
                        <select name="modelo" id="modelo">
                            <option value="moodelo">Modelo</option>
                            <option value="venda">Venda</option>
                            <option value="aluguel">Aluguel</option>
                        </select>
                        <input type="text" placeholder="Cidade/Bairro" />
                    </div>
                    <button className="arrow right">&#10095;</button>

                </div>

            </section> */}

            <section className="cards">
                {immobilesList.length > 0 ? immobilesList.map(e => {
                    return <ImmobileCard immobile={e} />
                }) :
                    <h2 className="text-red-500 font-bold text-2xl w-screen text-center">
                        Nenhum imóvel encontrado
                    </h2>}


            </section>
            <div className="flex justify-center w-screen">
                <Pagination
                    page={atualPage}
                    count={pagesNumber}
                    onChange={(e: React.ChangeEvent<unknown>, value: number) => {
                        console.log(e)
                        setAtualPage(value);
                    }}
                />
            </div>

        </>
    );
}
