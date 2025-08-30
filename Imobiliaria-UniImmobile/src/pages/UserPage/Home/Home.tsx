import { NavBar } from "../../../components/NavBar";
import { exampleImmobile } from "../../../utilities/exampleData";
import "../Home/homeStyle.css";
import { ImmobileCard } from "./cardComponent/Card"
export function Home() {
    return (
        <>
            <NavBar nameTitle="Seja bem-vindo usuario!" />
            <section className="banner" >
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

            </section>

            <section className="cards">
                {exampleImmobile.map(e => {
                    return <ImmobileCard immobile={e} />
                })}
            </section>
        </>
    );
}
