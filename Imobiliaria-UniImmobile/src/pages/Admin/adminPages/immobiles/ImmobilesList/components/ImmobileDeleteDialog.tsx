import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ImmobilesServices } from "../../../../../../services/immobiles-services";

type Props = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    immobileId: string | null
    setSelectedImmobileId: (value: string | null) => void

}


export function ImmobileDeleteDialog({ isOpen, setIsOpen, immobileId, setSelectedImmobileId }: Props) {

    const confirmExclusion = async () => {
        const service = new ImmobilesServices();

        await service.DeleteImmobile(immobileId ?? "");
        setIsOpen(false)
        setSelectedImmobileId(null)
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <DialogTitle>{"Confirme a exclusão"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Voce deseja realmente realizar a exclusão dos dados deste imóvel?
                    Os dados não poderão ser restaurados
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => confirmExclusion()}
                    variant="contained"
                    color="error"
                >
                    Confirmar
                </Button>
                <Button
                    onClick={() => {
                        setIsOpen(false)
                        setSelectedImmobileId(null)
                    }}
                    variant="contained"
                    color="info"
                >
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog >
    )
}