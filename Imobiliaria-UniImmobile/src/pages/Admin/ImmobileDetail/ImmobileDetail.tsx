import foto from "../../../assets/ImageImmobileDetails.png"
import { NavBar } from "../../../utilities/NavBar";

export function Details(){
    return(
      <div>
       <NavBar nameTitle="Edição de Imoveis"/>
        <div className="mt-[150px] ml-26 grid max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={foto} />
        <div className="text-gray-800 space-y-4">
          <h2 className="text-2xl font-semibold text-center">Casa, em Criciúma</h2>
          <div>
          <h3 className="text-sm text-gray-500">localizada em...</h3>
          <p>R. Getulio Candido Albino, 1033 - Criciúma - SC - 88807275</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">A casa possui...</h3>
            <ul className="list-disc list-inside">
              <li>4 quartos</li>
              <li>1 suíte</li>
              <li>1 sala</li>
              <li>2 cozinhas</li>
              <li>2 banheiros</li>
              <li>3 vagas</li>
            </ul>
           </div>
        <div>
          <h3 className="text-sm text-gray-500">A casa tem cerca de...</h3>
          <p>300 m²</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Por apenas...</h3>
          <p className="text-lg font-semibold">R$ 390.000,00</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">observações...</h3>
          <p>A casa está localizada em um bairro tranquilo e próximo de escolas,farmácias e hospital 24hrs.</p>
        </div>
        <div className="flex gap-4 pt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Editar</button>
          <button className="bg -red-600 text-white px-6 py-2 rounded hover:bg-red-700">Excluir</button>
          </div>
          </div>
          </div>
          </div>
        
    );
}