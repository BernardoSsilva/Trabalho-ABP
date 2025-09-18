import { useState } from "react"
import "../../../../styles/index.css"
import logo from "../../../../assets/ApplicationLogo.png"
import { useNavigate } from "react-router";
import { UserServices } from "../../../../services/user-services";
import { Alert, Backdrop, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import type { AxiosResponse } from "axios";
import { Eye, EyeClosed } from "lucide-react";

export function LoginForm() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const services = new UserServices();
    const [isLoading, setIsLoading] = useState(false);


    async function executeLogin() {
        setIsLoading(true);

        try {
            const response: AxiosResponse = await services.userLogin({ Email: email, Password: password });

            if (response.status === 200)
                navigate("/admin/pages");

            localStorage.setItem("token", response.data)
        } catch (error) {
            if ((error as AxiosResponse).status == 401)
                setErrorMessage("Credenciais inválidas!");
            else if ((error as AxiosResponse).status !== 200)
                setErrorMessage("Ocorreu um erro ao realizar Login, tente novamente mais tarde");
            else
                setErrorMessage("Erro de conexão com o servidor");
        } finally {
            setIsLoading(false);
        }

        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)

    }

    const [showPassword, setShowPassword] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Backdrop
                open={isLoading}
            >
                <div className="bg-white flex border-(--primary-color) border-2 rounded-xl p-4 items-center justify-center gap-1">

                    <CircularProgress color="inherit" size={24} />
                    Processando Dados
                </div>
            </Backdrop>
            <div className="w-1/2 flex flex-col items-center">

                <form className=" w-3/5 h-1/2  mt-10 items-center flex flex-col">
                    <img className="w-1/4" src={logo} alt="Logo da aplicação" />

                    <div className="mt-5 w-full">

                        <TextField className="border border-solid rounded-md w-full" required type="email" label="Informe seu email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div className="mt-5 w-full">
                        <FormControl className="border border-solid rounded-md w-full" variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
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
                                label="Digite sua Senha"
                            />
                        </FormControl>
                    </div>

                    <button onClick={(e) => {
                        e.preventDefault();
                        executeLogin();
                    }} className="p-2 px-12 bg-[var(--primary-color)] mt-7 w-full text-black hover:bg-[var(--primary-color-hover)] transition-colors duration-300 rounded-md">
                        <p className="font-semibold text-white">
                            Realizar login
                        </p>
                    </button>
                </form>
                <h2 className="text-[var(--primary-color)] mt-30 font-semibold">
                    SUA SATISFAÇÃO É O NOSSO LEMA!
                </h2>
                {errorMessage && (
                    <Alert variant="filled" severity="error">
                        {errorMessage}
                    </Alert>


                )}
            </div>
        </>
    )
}