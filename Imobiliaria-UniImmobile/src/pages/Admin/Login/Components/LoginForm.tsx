import { useState } from "react"
import "../../../../styles/index.css"
import logo from "../../../../assets/ApplicationLogo.png"
import { useNavigate } from "react-router";
export function LoginForm() {
  const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(false)

    return (
        <div className="w-1/2 flex flex-col items-center">
            <form className=" w-3/5 h-1/2  mt-10 items-center flex flex-col">
                <img className="w-1/2" src={logo} alt="Logo da aplicação" />

                <div className="mt-5 w-full">
                    <p>
                        Informe seu email
                    </p>
                    <input className="border border-solid rounded-md w-full" required type="email" />
                </div>

                <div className="mt-5 w-full">
                    <p>
                        Informe sua senha
                    </p>
                    <input className="border border-solid rounded-md w-full" required type="password" />
                </div>
                <div className="flex justify-start w-full mt-5">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <p >
                        lembrar-me
                    </p>
                </div>
                <button  onClick={() =>   navigate(`/admin/pages`)} className="p-2 px-12 bg-[var(--primary-color)] mt-7 w-full text-black hover:bg-[var(--primary-color-hover)] transition-colors duration-300 rounded-md">
                    <p className="font-semibold text-white">
                        Realizar login
                    </p>
                </button>
            </form>
            <h2 className="text-[var(--primary-color)] mt-30 font-semibold">
                SUA SATISFAÇÃO É O NOSSO LEMA!
            </h2>
        </div>
    )
}