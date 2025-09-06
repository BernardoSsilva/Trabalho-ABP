import foto from "../../../assets/ImageImmobileDetails.png";
import type { ImmobileEntity } from "../../../models/immobile";
import { NavBar } from "../../../components/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImmobilesServices } from "../../../services/immobiles-services";
import { ImageSlider } from "./components/ImageSlider";
import type { ImageEntity } from "../../../models/image";
import { ImageServices } from "../../../services/images-services";
import { UserServices } from "../../../services/user-services";
import { ArrowLeft, MessageCircle } from "lucide-react";

export function ImmobileDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // 👈 Hook para navegação
  const [immobile, setImmobile] = useState<ImmobileEntity | null>(null);
  const [immobileImages, setImmobileImages] = useState<ImageEntity[]>([]);
  const [responsibleUserPhone, setResponsibleUserPhone] = useState<string>();

  const service = new ImmobilesServices();
  const imagesService = new ImageServices();
  const userServices = new UserServices();

  useEffect(() => {
    fetchImmobile();
  }, [id]);

  const fetchImmobile = async () => {
    const immobile = await service.SelectImmobile(id ?? "");
    const images = await imagesService.ListImages(id ?? "");
    try {
      setImmobile(immobile);
      setImmobileImages(images);
    } finally {
      const responsibleUser = await userServices.findUser(immobile.userCreationId);
      setResponsibleUserPhone(responsibleUser.phone);
      console.log(responsibleUserPhone);
    }
  };

  if (!immobile) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar nameTitle="Detalhes do Imóvel" />
      <div className="flex items-center p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={24} />
          <span className="ml-2">Voltar</span>
        </button>
      </div>
      <div className="mx-auto max-w-6xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        <ImageSlider images={immobileImages} />

        <div className="text-gray-800 space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            {immobile.localityInfo}
          </h2>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500">Localização</h3>
            <p>{immobile.immobileDescription}</p>
            <br />
            <p>{immobile.city}, {immobile.street}</p>
            <p>CEP: {immobile.postalCode}</p>
            <p>Bairro: {immobile.neighborhood}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500">Informações</h3>
            <p>Tipo: {immobile.immobileType}</p>
            <p>Escriturado: {immobile.hasScripture ? "Sim" : "Não"}</p>
            <a href={immobile.localLink} target="_blank">Localização do imóvel</a>
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
            <a
              className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition-colors flex items-center gap-2"
              href={`https://wa.me/${responsibleUserPhone}`}
              target="_blank"
            >
              <MessageCircle color="white" size={24} />
              <span className="text-white">Enviar Mensagem</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImmobileDetail;
