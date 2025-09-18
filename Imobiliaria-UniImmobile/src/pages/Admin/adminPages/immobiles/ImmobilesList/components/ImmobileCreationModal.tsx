import { Alert, Button, Checkbox, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Modal, OutlinedInput, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ImmobileTypesEnum } from "../../../../../../models/types/immobileTypesEnum";
import { ImmobilesServices } from "../../../../../../services/immobiles-services";
import { BrazilianState } from "../../../../../../models/types/brazilianStatesEnum";
import type { ImmobileCreationDto } from "../../../../../../models/DTOs/ImmobileCreationDTO";
import type { AxiosError } from "axios";
import type { ImmobileUpdateDto } from "../../../../../../models/DTOs/ImmobileUpdateDto";
import axios from "axios";

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

    const formatCurrency = (value: number) => {
        if (!value) return "";
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    const fetchCepData = async (cep: string) => {
        try {
            const cleanCep = cep.replace(/\D/g, "");
            if (cleanCep.length !== 8) return;

            const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cleanCep}`);
            const data = response.data;

            setCity(data.city || "");
            setNeighborhood(data.neighborhood || "");
            setStreet(data.street || "");

            const stateMap: Record<string, keyof typeof BrazilianState> = {
                AC: "AC", AL: "AL", AP: "AP", AM: "AM",
                BA: "BA", CE: "CE", DF: "DF", ES: "ES",
                GO: "GO", MA: "MA", MT: "MT", MS: "MS",
                MG: "MG", PA: "PA", PB: "PB", PR: "PR",
                PE: "PE", PI: "PI", RJ: "RJ", RN: "RN",
                RS: "RS", RO: "RO", RR: "RR", SC: "SC",
                SP: "SP", SE: "SE", TO: "TO"
            };

            const uf = data.state as keyof typeof stateMap;
            if (uf && BrazilianState[stateMap[uf]]) {
                setState(BrazilianState[stateMap[uf]]);
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
            setErrorMessage("CEP inválido ou não encontrado.");
        }
    };


    const fetchSelectedImmobile = async () => {
        const service = new ImmobilesServices();
        const immobile = await service.SelectImmobile(selectedImmobileId ?? "");

        setImmobileType(immobile.immobileType);
        setLocalityInfo(immobile.localityInfo);
        setPostalCode(immobile.postalCode);
        setCity(immobile.city);
        setNeighborhood(immobile.neighborhood);
        setState(immobile.state);
        setStreet(immobile.street);
        setValue(immobile.value);
        setLocalLink(immobile.localLink);
        setHasScripture(immobile.hasScripture);
        setImmobileDescription(immobile.immobileDescription);
    }

    const saveImmobile = async () => {
        const service = new ImmobilesServices();
        const states = Object.values(BrazilianState);
        const types = Object.values(ImmobileTypesEnum)
        try {
            if (selectedImmobileId) {
                const data: ImmobileUpdateDto = {
                    city,
                    hasScripture,
                    immobileDescription,
                    immobileType: types.indexOf(immobileType),
                    localityInfo,
                    localLink,
                    neighborhood,
                    postalCode,
                    state: states.indexOf(state),
                    street,
                    value
                };

                await service.UpdateImmobile(data, selectedImmobileId);
                alert("Imóvel atualizado com sucesso");
            } else {
                const data: ImmobileCreationDto = {
                    city,
                    hasScripture,
                    immobileDescription,
                    immobileType: types.indexOf(immobileType),
                    localityInfo,
                    localLink,
                    neighborhood,
                    postalCode,
                    state: states.indexOf(state),
                    street,
                    value
                };

                await service.PostNewImmobile(data);
                alert("Imóvel criado com sucesso");
            }

        } catch (err) {
            const error = err as AxiosError;
            if (error.response?.status === 400) {
                setErrorMessage(error.response.data as string);
            } else if (error.response?.status === 401) {
                setErrorMessage(error.response.data?.toString() ?? "Não autorizado");
            } else {
                setErrorMessage("Erro desconhecido!");
            }
        } finally {
            resetForm();
        }

        setTimeout(() => setErrorMessage(null), 5000);
    };

    const resetForm = () => {
        setImmobileType(ImmobileTypesEnum.LAND);
        setLocalityInfo("");
        setPostalCode("");
        setCity("");
        setNeighborhood("");
        setState(BrazilianState.SC);
        setStreet("");
        setValue(0);
        setLocalLink("");
        setHasScripture(false);
        setImmobileDescription("");
        setSelectedImmobileId(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (selectedImmobileId) {
            fetchSelectedImmobile();
        }
    }, [isModalOpen]);

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
                                        setImmobileType(e.target.value as ImmobileTypesEnum)
                                    }
                                >
                                    {Object.values(ImmobileTypesEnum).map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                label="Titulo do imóvel"
                                value={localityInfo}
                                onChange={(e) => setLocalityInfo(e.target.value)}
                                fullWidth
                            />

                            <TextField
                                label="Código Postal"
                                value={postalCode}
                                onChange={(e) => {
                                    const formatted = formatCEP(e.target.value);
                                    setPostalCode(formatted);

                                    const cleanCep = formatted.replace(/\D/g, "");
                                    if (cleanCep.length === 8) {
                                        fetchCepData(cleanCep);
                                    }
                                }}
                                fullWidth
                            />

                            <FormControl fullWidth>
                                <InputLabel id="state-label">Estado</InputLabel>
                                <Select
                                    labelId="state-label"
                                    value={state}
                                    onChange={(e) => setState(e.target.value as BrazilianState)}
                                >
                                    {Object.values(BrazilianState).map((uf) => (
                                        <MenuItem key={uf} value={uf}>
                                            {uf}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

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
                            <FormControl fullWidth>
                                <InputLabel htmlFor="outlined-adornment-amount">Preço</InputLabel>
                                <OutlinedInput
                                    value={formatCurrency(value)}
                                    onChange={(e) => {
                                        const raw = e.target.value.replace(/\D/g, "");
                                        const number = parseFloat(raw) / 100;
                                        setValue(isNaN(number) ? 0 : number);
                                    }}
                                    id="outlined-adornment-amount"
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
                                        resetForm();
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
            )}
        </>
    );
}
