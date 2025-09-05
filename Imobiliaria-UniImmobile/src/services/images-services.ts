import type { ImageEntity } from "../models/image";
import { server } from "./Axios";

export class ImageServices {
    async ListImages(immobileId: string): Promise<ImageEntity[]> {
        const data = (await server.get(`/Immobiles/${immobileId}/Images`)).data
        console.log(data)
        return data
    }

    async UploadImage(data: any, immobileId: string) {
        await server.post(
            `/Images/${immobileId}/create`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
    }

    async DeleteImage(imageId: string) {
        await server.delete(`/Images/${imageId}/delete`)
    }
}