import foto from "../../../assets/ImageImmobileDetail.png"
import logo from"../../../assets/ApplicationLogo.png"

export function Details(){
    return(
      <div>
       <header className="w-full bg-[#C9A86A] text-white flex items-center justify-between px-6 py-2 shadow-md fixed top-0 left-0 z-50">
        <img className="h-15" src={logo} alt="logo"/>
        <h2 className="text-x font-semibold">Exibir de Imóveis</h2>
        <button className="text-2xl font-bold">☰</button>
       </header>
        <div className="ml-26 grid max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={foto} />
        <div className="text-gray-800 space-y-4">
          <h2 className="text-2xl font-semibold text-center">Casa, em Criciúma</h2>
          <div>
          <h3 className="text-sm text-gray-500">localizada em...</h3>
          <p>R. Getulio Candido Albino, 1033 - Criciúma - SC - 8g8807275</p>
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