import { Alert, Button, Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Modal, OutlinedInput, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ImmobileTypesEnum } from "../../../../../../models/types/immobileTypesEnum";
import { ImmobilesServices } from "../../../../../../services/immobiles-services";
import { BrazilianState } from "../../../../../../models/types/brazilianStatesEnum";
import type { ImmobileCreationDto } from "../../../../../../models/DTOs/ImmobileCreationDTO";
import type { AxiosResponse } from "axios";
import type { ImmobileUpdateDto } from "../../../../../../models/DTOs/ImmobileUpdateDto";

type Props = {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void
    selectedImmobileId: string | null
    setSelectedImmobileId: (value: string | null) => void;
}

export function ImmobilesCreationModal(
    {
        isModalOpen,
        setIsModalOpen,
        selectedImmobileId,
        setSelectedImmobileId
    }: Props
) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [immobileType, setImmobileType] = useState<ImmobileTypesEnum>(ImmobileTypesEnum.LAND);
    const [localityInfo, setLocalityInfo] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [state, setState] = useState<BrazilianState>(BrazilianState.SC);
    const [street, setStreet] = useState("");
    const [value, setValue] = useState(0);
    const [localLink, setLocalLink] = useState("");
    const [hasScripture, setHasScripture] = useState(false);
    const [immobileDescription, setImmobileDescription] = useState("");


    const formatCEP = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .slice(0, 9);
    };
    const formatCurrency = (value: string) => {
        const numericValue = value.replace(/\D/g, ""); // Remove tudo que não for número
        const number = parseFloat(numericValue) / 100; // Divide por 100 para ter centavos
        if (isNaN(number)) return "";
        return number.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    const fetchSelectedImmobile = async () => {
        const service = new ImmobilesServices();

        const immobile = await service.SelectImmobile(selectedImmobileId ?? "")
        const states = Object.values(BrazilianState);
        const types = Object.values(ImmobileTypesEnum)

        setImmobileType(types[parseInt(immobile.immobileType)])
        setLocalityInfo(immobile.localityInfo)
        setPostalCode(immobile.postalCode)
        setCity(immobile.city)
        setNeighborhood(immobile.neighborhood)
        setState(states[parseInt(immobile.state)])
        setStreet(immobile.street)
        setValue(immobile.value)
        setLocalLink(immobile.localLink)
        setHasScripture(immobile.hasScripture)
        setImmobileDescription(immobile.immobileDescription)
    }

    const saveImmobile = async () => {
        const service = new ImmobilesServices();
        const states = Object.values(BrazilianState);
        const types = Object.values(ImmobileTypesEnum)

        try {

            if (selectedImmobileId) {
                const data: ImmobileUpdateDto = {
                    city: city,
                    hasScripture: hasScripture,
                    immobileDescription: immobileDescription,
                    immobileType: types.indexOf(immobileType),
                    localityInfo: localityInfo,
                    localLink: localLink,
                    neighborhood: neighborhood,
                    postalCode: postalCode,
                    state: states.indexOf(state),
                    street: street,
                    value: value
                }

                await service.UpdateImmobile(data, selectedImmobileId)

                alert("Imóvel atualizado com sucesso")
            } else {

                const data: ImmobileCreationDto = {
                    city: city,
                    hasScripture: hasScripture,
                    immobileDescription: immobileDescription,
                    immobileType: types.indexOf(immobileType),
                    localityInfo: localityInfo,
                    localLink: localLink,
                    neighborhood: neighborhood,
                    postalCode: postalCode,
                    state: states.indexOf(state),
                    street: street,
                    value: value
                }

                await service.PostNewImmobile(data)

                alert("Imóvel criado com sucesso")
            }

        } catch (error) {
            if ((error as AxiosResponse).status == 400) {
                setErrorMessage((error as AxiosResponse).data)
            } else if ((error as AxiosResponse).status == 401) {
                setErrorMessage((error as AxiosResponse).data.toString())
            } else {
                setErrorMessage("Erro desconhecido!")
            }
        }
        finally {
            setImmobileType(ImmobileTypesEnum.LAND)
            setLocalityInfo("")
            setPostalCode("")
            setCity("")
            setNeighborhood("")
            setState(BrazilianState.SC)
            setStreet("")
            setValue(0)
            setLocalLink("")
            setHasScripture(false)
            setImmobileDescription("")
            setSelectedImmobileId(null)
            setIsModalOpen(false);
        }


        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    };

    useEffect(() => {
        if (selectedImmobileId) {
            fetchSelectedImmobile()
        }

    }, [isModalOpen])
    return (
        <>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div
                        className="bg-white w-full max-w-md h-[80%] rounded-2xl shadow-lg p-6 overflow-scroll
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-transparent
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-center">Cadastrar Imóvel</h2>

                        <form
                            className="flex flex-col gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                saveImmobile();
                            }}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="immobile-type-label">Tipo de Imóvel</InputLabel>
                                <Select
                                    labelId="immobile-type-label"
                                    value={immobileType}
                                    onChange={(e) =>
                                        setImmobileType(e.target.value)
                                    }
                                >
                                    <MenuItem value="LAND">Terreno</MenuItem>
                                    <MenuItem value="HABITATION">Imóvel</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Localização */}
                            <TextField
                                label="Informações da Localização"
                                value={localityInfo}
                                onChange={(e) => setLocalityInfo(e.target.value)}
                                fullWidth
                            />

                            <TextField
                                label="Código Postal"
                                value={postalCode}
                                onChange={(e) => setPostalCode(formatCEP(e.target.value))}
                                fullWidth
                            />

                            <FormControl fullWidth>
                                <InputLabel id="state-label">Estado</InputLabel>
                                <Select
                                    labelId="state-label"
                                    value={state}
                                    onChange={(e) => setState(e.target.value as BrazilianState)}
                                >
                                    {Object.entries(BrazilianState).map(([uf, name]) => (
                                        <MenuItem key={uf} value={name}>
                                            {name} ({uf})
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* Cidade, Bairro, Rua */}
                            <TextField
                                label="Cidade"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Bairro"
                                value={neighborhood}
                                onChange={(e) => setNeighborhood(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Rua"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                fullWidth
                            />
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Preço</InputLabel>
                                <OutlinedInput
                                    value={formatCurrency(value.toString())}
                                    onChange={(e) => {
                                        const raw = e.target.value.replace(/\D/g, "");
                                        const number = parseFloat(raw) / 100;
                                        setValue(isNaN(number) ? 0 : number);
                                    }}
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Preço"
                                />
                            </FormControl>

                            <TextField
                                label="Link de Localização"
                                type="url"
                                value={localLink}
                                onChange={(e) => setLocalLink(e.target.value)}
                                fullWidth
                            />

                            <TextField
                                label="Descrição do Imóvel"
                                multiline
                                minRows={3}
                                value={immobileDescription}
                                onChange={(e) => setImmobileDescription(e.target.value)}
                                fullWidth
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={hasScripture}
                                        onChange={(e) => setHasScripture(e.target.checked)}
                                    />
                                }
                                label="Escriturado"
                            />

                            <div className="flex justify-between">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ width: "40%" }}
                                >
                                    Salvar
                                </Button>

                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ width: "40%" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsModalOpen(false);
                                        setSelectedImmobileId(null)

                                    }}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            {errorMessage && (
                <Alert variant="filled" severity="error">
                    {errorMessage}
                </Alert>
            )}</>
    )

}
