import {
    Alert,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Modal,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { AxiosResponse } from "axios";
import dayjs, { Dayjs } from "dayjs";
import { Eye, EyeClosed } from "lucide-react";
import { useEffect, useState } from "react";
import type { UserCreationDto } from "../../../../../../models/DTOs/userCreationDto";
import type { UserUpdateDto } from "../../../../../../models/DTOs/userUpdateDto";
import { UserRolesEnum } from "../../../../../../models/types/userRolesEnum";
import type { UserEntity } from "../../../../../../models/user";
import { UserServices } from "../../../../../../services/user-services";

type Props = {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
    userId: string | null
    setSelectedUserId: (value: string | null) => void
}

export function UserCreationModal({ isModalOpen, setIsModalOpen, userId, setSelectedUserId }: Props) {
    const [user, setUser] = useState<UserEntity>()

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [userEmail, setUserEmail] = useState(user ? user.userEmail : "");
    const [userRole, setUserRole] = useState<UserRolesEnum>(user ? user.role : UserRolesEnum.ADMIN);
    const [userPhone, setUserPhone] = useState(user ? user.phone : "");
    const [userBornDate, setUserBornDate] = useState<Dayjs | null>(dayjs());
    const [userName, setUserName] = useState(user ? user.userName : "");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("")

    const fetchUser = async () => {
        const service = new UserServices();

        if (userId) {

            setUser((await service.findUser(userId)));
        } else {
            setUser(undefined)
        }

    }

    useEffect(() => {
        fetchUser();
    }, [isModalOpen, userId])


    useEffect(() => {
        if (user) {
            setUserEmail(user.userEmail);
            setUserRole(user.role);
            setUserPhone(user.phone);
            setUserBornDate(dayjs(user.bornDate));
            setUserName(user.userName);
        } else {
            setUserEmail("");
            setUserRole(UserRolesEnum.ADMIN);
            setUserPhone("");
            setUserBornDate(dayjs());
            setUserName("");
        }
    }, [user]);

    const validateForm = (): boolean => {
        if (!userName.trim()) {
            alert("O nome é obrigatório");
            return false;
        }
        if (!userEmail.trim()) {
            alert("O email é obrigatório");
            return false;
        }
        if (!userRole) {
            alert("O papel do usuário é obrigatório");
            return false;
        }
        if (!userPhone.trim()) {
            alert("O telefone é obrigatório");
            return false;
        }
        if (!userBornDate) {
            alert("A data de nascimento é obrigatória");
            return false;
        }

        const idade = dayjs().diff(dayjs(userBornDate), "year");
        if (idade < 18) {
            alert("O usuário deve ter pelo menos 18 anos");
            return false;
        }

        if (!userId) {
            if (userPassword.length < 8) {
                alert("A senha deve ter no mínimo 8 caracteres");
                return false;
            }
            if (userPassword !== userPasswordConfirmation) {
                alert("As senhas não coincidem");
                return false;
            }
        }

        return true;
    };


    const saveUser = async () => {
        const service = new UserServices();

        if (!validateForm()) {
            return;
        }

        if (userId) {
            if (userId) {
                try {

                    const existingUser = (await service.findUser(userId));
                    existingUser.userEmail = userEmail;
                    existingUser.role = userRole;
                    existingUser.phone = userPhone;
                    existingUser.bornDate = userBornDate!.toDate();
                    existingUser.userName = userName;

                    const data: UserUpdateDto = {
                        BornDate: existingUser.bornDate,
                        UserName: existingUser.userName,
                        Phone: existingUser.phone,
                        Role: existingUser.role == UserRolesEnum.ADMIN ? 0 : 1,
                        UserEmail: existingUser.userEmail
                    }


                    await service.updateUserData(data, userId)

                    alert("Usuário alterado com sucesso")
                } catch (error) {
                    if ((error as AxiosResponse).status == 400) {
                        setErrorMessage((error as AxiosResponse).data)
                    } else if ((error as AxiosResponse).status == 401) {
                        setErrorMessage((error as AxiosResponse).data.toString())
                    } else {
                        setErrorMessage("Erro desconhecido!")
                    }
                } finally {
                    setIsModalOpen(false);
                    setSelectedUserId(null)
                }
            }
        } else {
            try {
                const newUser: UserCreationDto = {
                    UserEmail: userEmail,
                    Role: userRole == UserRolesEnum.ADMIN ? 0 : 1,
                    Phone: userPhone,
                    BornDate: userBornDate!.toDate(),
                    UserName: userName,
                    Password: userPassword
                };

                await service.createNewUser(newUser);
                alert("Usuário criado com sucesso")

            } catch (error) {
                if ((error as AxiosResponse).status == 400) {
                    setErrorMessage((error as AxiosResponse).data)
                } else if ((error as AxiosResponse).status == 401) {
                    setErrorMessage((error as AxiosResponse).data.toString())
                } else {
                    setErrorMessage("Erro desconhecido!")
                }
            } finally {
                setIsModalOpen(false);
            }


        }
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)

    }


    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation((showConfirmation) => !showConfirmation);

    const handleMouseDownPasswordConfirmation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPasswordConfirmation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return <>
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} className="h-10">
            <div className="fixed inset-0 flex items-center justify-center ">
                <div className="bg-white w-full max-w-md  h-[80%] rounded-2xl shadow-lg p-6 overflow-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" >
                    <h2 className="text-xl font-semibold mb-4 text-center">Cadastrar Usuário</h2>

                    <form
                        className="flex flex-col gap-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            saveUser();
                        }}
                    >
                        <TextField
                            label="Nome"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            label="E-mail"
                            type="email"
                            name="userEmail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            fullWidth
                        />

                        <FormControl fullWidth>
                            <InputLabel id="role-label">Papel do Usuário</InputLabel>
                            <Select
                                labelId="role-label"
                                name="userRole"
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value)}
                            >
                                <MenuItem value={"ADMIN"}>Admin</MenuItem>
                                <MenuItem value={"OPERATOR"}>Operador</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <OutlinedInput
                                label="Telefone"
                                type="tel"
                                name="phone"
                                placeholder="99 999999999"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                fullWidth />
                            Somente Números
                        </FormControl>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Data de Nascimento"
                                value={userBornDate}
                                onChange={(newValue) => setUserBornDate(newValue)}
                                format="DD/MM/YYYY"
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        margin: "normal",
                                    },
                                }}
                            />
                        </LocalizationProvider>

                        {userId == null && (
                            <>
                                <FormControl className="border border-solid rounded-md w-full" variant="outlined" >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        value={userPassword}
                                        onChange={(e) => { setUserPassword(e.target.value) }}
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <EyeClosed /> : <Eye />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Digite a senha"
                                    />
                                </FormControl>
                                <FormControl className="border border-solid rounded-md w-full" variant="outlined" >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        value={userPasswordConfirmation}
                                        onChange={(e) => { setUserPasswordConfirmation(e.target.value) }}
                                        id="outlined-adornment-password"
                                        type={showPasswordConfirmation ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPasswordConfirmation ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPasswordConfirmation}
                                                    onMouseDown={handleMouseDownPasswordConfirmation}
                                                    onMouseUp={handleMouseUpPasswordConfirmation}
                                                    edge="end"
                                                >
                                                    {showPasswordConfirmation ? <EyeClosed /> : <Eye />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Confirmar senha"
                                    />
                                </FormControl>
                            </>
                        )}
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
                                }}
                            >
                                Cancelar
                            </Button>
                        </div>
                    </form>
                </div>
            </div >
        </Modal >
        {errorMessage && (
            <Alert variant="filled" severity="error">
                {errorMessage}
            </Alert>
        )}
    </>
}