import foto from "../../../assets/ImageImmobileDetails.png";
import type { ImmobileEntity } from "../../../models/immobile";
import { NavBar } from "../../../components/NavBar"; 
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ImmobileDetail() {
  const { id } = useParams();
  const [immobile, setImmobile] = useState<ImmobileEntity | null>(null);

  useEffect(() => {
    const mockImmobile: ImmobileEntity = {
      id: id || "",
      localityInfo: "Bairro Jardim das Flores",
      immobileType: "LAND",
      status: "ACTIVE",
      userCreationId: "user-mock-id",
      creationDate: new Date(),
      postalCode: "01234-567",
      state: "SP",
      city: "São Paulo",
      street: "Rua das Acácias, 123",
      neighborhood: "Jardim das Flores",
      hasScripture: true,
      immobileDescription: "Casa moderna com 3 quartos",
      value: 390000,
      Images: []
    };
    
    setImmobile(mockImmobile);
  }, [id]);

  if (!immobile) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar nameTitle="Detalhes do Imóvel" />
      
      <div className="mt-[110px] mx-auto max-w-6xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img 
          src={foto} 
          alt={`Imóvel ${immobile.immobileDescription}`}
          className="w-full h-auto rounded-lg shadow-md"
        />
        
        <div className="text-gray-800 space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            {immobile.immobileDescription}
          </h2>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500">Localização</h3>
            <p>{immobile.localityInfo}</p>
            <p>{immobile.city}, {immobile.street}</p>
            <p>CEP: {immobile.postalCode}</p>
            <p>Bairro: {immobile.neighborhood}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500">Informações</h3>
            <p>Tipo: {immobile.immobileType}</p>
            <p>Status: {immobile.status}</p>
            <p>Escriturado: {immobile.hasScripture ? "Sim" : "Não"}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500">Valor</h3>
            <p className="text-lg font-semibold">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(immobile.value)}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              onClick={() => console.log('Editar imóvel', id)}
            >
              Editar
            </button>
            <button 
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
              onClick={() => console.log('Excluir imóvel', id)}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImmobileDetail;