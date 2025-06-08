import { useState } from "react"
import logo from "../../../../assets/ApplicationLogo.png"
export function LoginForm() {

    const [rememberMe, setRememberMe] = useState(false)

    return (
        <div className="w-1/2 flex flex-col items-center">
            <form className=" w-3/5 h-1/2 p-5 mt-10 items-center flex flex-col">
                <img className="w-1/2" src={logo} />

                <div className="mt-5 w-full">
                    <p>
                        Informe seu email
                    </p>
                    <input className="border border-solid rounded-md w-full" type="email" />
                </div>

                <div className="mt-5 w-full">
                    <p>
                        Informe sua senha
                    </p>
                    <input className="border border-solid rounded-md w-full" type="text" />
                </div>
                <div className="flex flex-row w-full">
                    <input type="checkbox" className="w-4" value={rememberMe.toString()} onChange={(e) => setRememberMe(e.target.value == "true")} />
                    <p className="ml-2">
                        lembrar-me
                    </p>
                </div>
                <input className="p-2 px-12 bg-(--primary-color) m-2 text-black hover:bg-(--primary-color-hover) transition-colors duration-300 rounded-md" type="submit" value="realizar login" />
            </form>
            <h2 className="text-(--primary-color) mt-30 font-semibold">
                SUA SATISFAÇÃO É O NOSSO LEMA!
            </h2>
        </div>
    )
}