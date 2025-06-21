import type { ImmobileEntity } from "../models/immobile";
import type { UserEntity } from "../models/user";

export const usersList: UserEntity[] = Array.from({ length: 25 }, (_, i) => {
    const id = (i + 1).toString();
    const isEven = i % 2 === 0;
    return {
        id,
        userName: `testUser${id}`,
        userEmail: `test@user${id}.com`,
        phone: '48999999999',
        civilState: 'CASADO',
        bornDate: new Date(2005, 7, 8), // 8 de agosto (mês 7 = agosto)
        CreatedAt: new Date(),
        userRole: isEven ? 'ADMIN' : 'OPERATOR',
    };
});

export const exampleImmobile: ImmobileEntity[] = [
    {
        id: "c149f257-7e18-4cf2-b6cd-9814aef311b3",
        localityInfo: "Rua das Palmeiras, 125\nCentro\n12345-678 Silva / SP",
        immobileType: "HABITATION",
        localLink: "https://exemplo.com/imovel1",
        status: "ACTIVE",
        userCreationId: "f8f0344d-324b-4c1c-9158-5a91c1a1c2d3",
        creationDate: new Date("2024-06-01T10:00:00Z"),
        updateDate: new Date("2025-06-01T10:00:00Z"),
        postalCode: "12345-678",
        state: "SP",
        city: "São Paulo",
        street: "Rua das Palmeiras",
        neighborhood: "Centro",
        hasScripture: true,
        immobileDescription: "Casa aconchegante com quintal amplo.",
        value: 250000,
        Images: [
            {
                id: "img-1a",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=1",
                size: 150000,
                name: "fachada.jpg",
                immobileId: "c149f257-7e18-4cf2-b6cd-9814aef311b3",
                cloudnaryPublicId: ""
            },
            {
                id: "img-1b",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=2",
                size: 180000,
                name: "sala.jpg",
                immobileId: "c149f257-7e18-4cf2-b6cd-9814aef311b3",
                cloudnaryPublicId: ""
            },
            {
                id: "img-1c",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=3",
                size: 160000,
                name: "quarto.jpg",
                immobileId: "c149f257-7e18-4cf2-b6cd-9814aef311b3",
                cloudnaryPublicId: ""
            }
        ]
    },

    {
        id: "56781b5e-4048-40b6-a939-0f56b93d9ead",
        localityInfo: "Av. Brasil, 1000\nJardim América\n87654-321 Souza / RJ",
        immobileType: "HABITATION",
        localLink: "https://exemplo.com/imovel2",
        status: "INACTIVE",
        userCreationId: "1228fe45-fe16-45cf-a759-3748c19f7f7e",
        creationDate: new Date("2024-01-15T08:30:00Z"),
        updateDate: new Date("2025-03-22T14:45:00Z"),
        postalCode: "87654-321",
        state: "RJ",
        city: "Rio de Janeiro",
        street: "Av. Brasil",
        neighborhood: "Jardim América",
        hasScripture: true,
        immobileDescription: "Apartamento com vista para o mar e varanda gourmet.",
        value: 480000,
        Images: [
            {
                id: "img-2a",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=4",
                size: 200000,
                name: "vista.jpg",
                immobileId: "56781b5e-4048-40b6-a939-0f56b93d9ead",
                cloudnaryPublicId: ""
            },
            {
                id: "img-2b",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=5",
                size: 170000,
                name: "cozinha.jpg",
                immobileId: "56781b5e-4048-40b6-a939-0f56b93d9ead",
                cloudnaryPublicId: ""
            },
            {
                id: "img-2c",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=6",
                size: 190000,
                name: "banheiro.jpg",
                immobileId: "56781b5e-4048-40b6-a939-0f56b93d9ead",
                cloudnaryPublicId: ""
            }
        ]
    },

    {
        id: "8971f3b9-d752-4faf-bf18-5a0af44065cf",
        localityInfo: "Rua das Rosas, 300\nBela Vista\n99887-123 Oliveira / MG",
        immobileType: "HABITATION",
        localLink: "https://exemplo.com/imovel3",
        status: "INANALYSIS",
        userCreationId: "a081fb4f-4e85-4a81-9458-0ead028b0b4f",
        creationDate: new Date("2023-11-10T09:15:00Z"),
        updateDate: new Date("2024-11-10T09:15:00Z"),
        postalCode: "99887-123",
        state: "MG",
        city: "Belo Horizonte",
        street: "Rua das Rosas",
        neighborhood: "Bela Vista",
        hasScripture: false,
        immobileDescription: "Condomínio fechado com área de lazer completa.",
        value: 360000,
        Images: [
            {
                id: "img-3a",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=7",
                size: 130000,
                name: "piscina.jpg",
                immobileId: "8971f3b9-d752-4faf-bf18-5a0af44065cf",
                cloudnaryPublicId: ""
            },
            {
                id: "img-3b",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=8",
                size: 140000,
                name: "salao_festas.jpg",
                immobileId: "8971f3b9-d752-4faf-bf18-5a0af44065cf",
                cloudnaryPublicId: ""
            },
            {
                id: "img-3c",
                type: "image/jpeg",
                imageUrl: "https://picsum.photos/300/200?random=9",
                size: 170000,
                name: "academia.jpg",
                immobileId: "8971f3b9-d752-4faf-bf18-5a0af44065cf",
                cloudnaryPublicId: ""
            }
        ]
    }
];