import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { UserServices } from "../../../../../../services/user-services";

type Props = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    userId: string
    setSelectedUserId: (value: string | null) => void

}


export function UserDeleteDialog({ isOpen, setIsOpen, userId, setSelectedUserId }: Props) {

    const confirmExclusion = async () => {
        const service = new UserServices();

        await service.deleteUserData(userId);
        setIsOpen(false)
        setSelectedUserId(null)
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <DialogTitle>{"Confirme a exclusão"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Voce deseja realmente realizar a exclusão dos dados deste usuário?
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
                        setSelectedUserId(null)
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