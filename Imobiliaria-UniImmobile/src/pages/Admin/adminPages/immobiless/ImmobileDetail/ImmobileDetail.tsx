import foto from "../../../assets/ImageImmobileDetails.png"
import type { ImmobileEntity } from "../../../../../models/immobile";
import { NavBar } from "../../../../../components/NavBar";

export function Details(immobile?: ImmobileEntity) {
  return (
    <div>
      <NavBar nameTitle="Edição de Imóveis" />
      <div className="mt-[110px] ml-26 grid max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={foto} />
        <div className="text-gray-800 space-y-4">
          <h2 className="text-2xl font-semibold text-center">{immobile?.immobileDescription}</h2>
          <div>
            <h3 className="text-sm text-gray-500">localizada em {immobile?.localityInfo}</h3>
            <p>{immobile?.city}, {immobile?.street} - {immobile?.postalCode}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">A casa possui...</h3>

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