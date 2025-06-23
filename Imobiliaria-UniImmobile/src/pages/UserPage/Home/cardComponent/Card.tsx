import { useNavigate } from "react-router-dom";
import type { ImmobileEntity } from "../../../../models/immobile";
import "../../Home/homeStyle.css";

interface CardProps {
  immobile: ImmobileEntity;
}

export function Card({ immobile }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/immobile/${immobile.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img 
        src={immobile.localLink} 
        alt={`Imóvel ${immobile.immobileDescription}`}
        className="card-image" 
      />
      <div className="cardInfo">
        <h3>{immobile.immobileDescription}</h3>
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