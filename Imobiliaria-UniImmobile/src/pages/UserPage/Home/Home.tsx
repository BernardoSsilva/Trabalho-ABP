import { NavBar } from "../../../components/NavBar";
import { exampleImmobile } from "../../../utilities/exampleData";
import "../Home/homeStyle.css";
import { ImmobileCard } from "./cardComponent/Card";

export function Home() {
    return (
        <>
            <NavBar nameTitle="Seja bem-vindo usuario!" />
            <section className="banner">
                <div className="arrows">
                    <button className="arrow left">&#10094;</button>
                    <button className="arrow right">&#10095;</button>
                </div>
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

            </section>

            <section className="cards">
                {exampleImmobile.map(e => {
                    return <ImmobileCard immobileId={e.id} immobileName={e.localityInfo} immobileValue={e.value} immobileCity={e.city} images={e.Images} />
                })}
            </section>
        </>
    );
}
