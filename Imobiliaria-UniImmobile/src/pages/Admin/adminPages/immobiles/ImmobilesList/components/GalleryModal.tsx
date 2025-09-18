import { Modal, IconButton, Button, CircularProgress, Backdrop } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import type { ImageEntity } from "../../../../../../models/image"
import { ImageServices } from "../../../../../../services/images-services"
import { X, Trash2, Upload } from "lucide-react"

type Props = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    immobileId: string | null
}

export function GalleryModal(
    {
        immobileId,
        isOpen,
        setIsOpen
    }: Props
) {

    const [imagesData, setImagesData] = useState<ImageEntity[]>([])
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const service = new ImageServices()

    const fetchImagesData = async () => {
        setIsLoading(true)

        if (!immobileId) return
        const response = await service.ListImages(immobileId)
        setImagesData(response)

        setIsLoading(false)

    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        if (!immobileId || !event.target.files || event.target.files.length === 0) return

        const file = event.target.files[0]
        try {

            const formData = new FormData()
            formData.append("File", file)

            await service.UploadImage(formData, immobileId)
            await fetchImagesData()
        } catch (error) {
            console.error("Erro ao fazer upload:", error)
        } finally {
            event.target.value = ""
            setIsLoading(false)

        }
    }

    const handleDelete = async (id: string) => {
        try {
            await service.DeleteImage(id)
            await fetchImagesData()
        } catch (error) {
            console.error("Erro ao excluir imagem:", error)
        }
    }

    useEffect(() => {
        if (isOpen) {
            fetchImagesData()
        }
    }, [isOpen])

    return (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>

            <div className="fixed inset-0 flex items-center justify-center">
                <div
                    className="relative bg-white w-[75vw] h-[60vh] p-4 rounded-2xl shadow-lg overflow-scroll flex flex-col
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-transparent
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                >
                    <Backdrop
                        open={isLoading}
                    >
                        <div className="bg-white flex border-(--primary-color) border-2 rounded-xl p-4 items-center justify-center gap-1">

                            <CircularProgress color="inherit" size={24} />
                            Carregando Dados
                        </div>
                    </Backdrop>


                    {/* Cabeçalho com botões */}
                    <div className="flex justify-between items-center mb-4">
                        <Button
                            variant="contained"
                            startIcon={<Upload size={18} />}
                            onClick={handleUploadClick}
                        >
                            Enviar Imagem
                        </Button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            hidden
                        />

                        <IconButton onClick={() => setIsOpen(false)}>
                            <X size={22} />
                        </IconButton>
                    </div>

                    {/* Galeria */}
                    <div className="grid grid-cols-3 gap-3">
                        {imagesData.length > 0 ? imagesData.map((item, index) => (
                            <div
                                key={index}
                                className="relative group rounded-lg overflow-hidden"
                            >
                                <img
                                    className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-50"
                                    src={item.imageUrl}
                                    alt={`Imagem ${index}`}
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                >
                                    <button
                                        className="bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition cursor-pointer"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <Trash2 size={22} color="white" />
                                    </button>
                                </div>
                            </div>
                        )) : <h2 className="font-extrabold text-red-500">
                            Nenhuma Imagem Registrada
                        </h2>}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
