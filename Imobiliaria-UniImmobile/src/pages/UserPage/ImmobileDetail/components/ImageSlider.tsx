import { useState } from "react";
import type { ImageEntity } from "../../../../models/image";

interface ImageSliderProps {
    images: ImageEntity[];
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    if (!images || images.length === 0) {
        return (
            <img
                src="/fallback.jpg"
                alt="Imagem não disponível"
                className="w-full h-64 object-cover rounded-lg shadow-md"
            />
        );
    }

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Slider */}
            <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-md mt-14">
                <img
                    src={images[current].imageUrl}
                    alt={`Imagem ${current + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setFullscreen(true)}
                />

                {/* Botão anterior */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                    &#10094;
                </button>

                {/* Botão próximo */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                    &#10095;
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 w-full flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Modal fullscreen */}
            {fullscreen && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
                    <button
                        onClick={() => setFullscreen(false)}
                        className="absolute top-4 right-4 text-white text-2xl"
                    >
                        ✕
                    </button>
                    <img
                        src={images[current].imageUrl}
                        alt={`Imagem ampliada ${current + 1}`}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </>
    );
}
