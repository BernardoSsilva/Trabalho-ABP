import type { ImageEntity } from "../../../../models/image"

type Props = {
    immobileId: string
    immobileName: string
    immobileValue: number
    immobileCity: string
    images: ImageEntity[]
}

export function ImmobileCard({ immobileId, immobileCity, immobileName, immobileValue, images }: Props) {
    return (<div className="card">
        <img src={images[0].imageUrl} alt="Casa 1" />
        <div className="cardInfo">
            <p>{immobileName}<br />R${immobileValue}</p>
            <span className="location">📍 {immobileCity}</span>
        </div>
    </div>)
}