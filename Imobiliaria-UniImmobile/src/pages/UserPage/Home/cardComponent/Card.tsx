import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ImageEntity } from "../../../../models/image";
import type { ImmobilesShortData } from "../../../../models/responseInterfaces/ImmobilesShortData";
import { ImageServices } from "../../../../services/images-services";
import "../../Home/homeStyle.css";

interface CardProps {
  immobile: ImmobilesShortData;
}

export function ImmobileCard({ immobile }: CardProps) {
  const navigate = useNavigate();
  const services = new ImageServices();
  const [immobileFirstImage, setImmobileFirstImage] = useState<ImageEntity | null>(null);

  useEffect(() => {
    if (immobile.id) {
      fetchImages();
    }
  }, [immobile.id]);


  const fetchImages = async () => {
    setImmobileFirstImage((await services.ListImages(immobile.id))[0])
    console.log(immobileFirstImage)
  }

  const handleClick = () => {
    navigate(`/immobile/${immobile.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>

      <img
        className="card-image"
        src={immobileFirstImage?.imageUrl}
        alt={`Imóvel ${immobileFirstImage?.imageUrl}`}
      />
      <div className="cardInfo">
        <h3>{immobile.localityInfo}</h3>
        <p className="location">{immobile.city} - {immobile.state}</p>
        <p>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(immobile.value)}
        </p>
      </div>
    </div>
  );
}