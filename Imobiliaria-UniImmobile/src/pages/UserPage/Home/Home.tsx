import { NavBar } from "../../../utilities/NavBar";
import "../Home/homeStyle.css";
import Casa1  from "../../../assets/ImageImmobileDetails.png"
import Casa2  from "../../../assets/casa2.png"
import Casa3  from "../../../assets/casa3.png"

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
                <div className="card">
                    <img src={Casa1} alt="Casa 1" />
                    <div className="cardInfo">
                        <p>Casa<br />R$500.000</p>
                        <span className="location">📍 Criciúma</span>
                    </div>
                </div>
                <div className="card">
                        <img src={Casa2} alt="Casa 2" />
                    <div className="cardInfo">
                        <p>Casa<br />R$770.000</p>
                        <span className="location">📍 Içara</span>
                    </div>
                </div>
                <div className="card">
                    <img src={Casa3} alt="Casa 3" />
                    <div className="cardInfo">
                        <p>Apartamento<br />R$300.000</p>
                        <span className="location">📍 Siderópolis</span>
                    </div>
                </div>
            </section>
        </>
    );
}
