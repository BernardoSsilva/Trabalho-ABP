import { useState } from "react"

export function LoginForm() {

    const [rememberMe, setRememberMe] = useState(false)

    return (
        <div className="w-1/2 flex flex-col items-center justify-center">
            <form className=" w-1/2 h-1/2 p-2 items-center flex flex-col border-gray-300 border-2 rounded-2xl">
                <h1>Login</h1>

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
                <input className="p-2 px-12 bg-emerald-200 mt-7 text-black hover:bg-emerald-500 hover:text-white transition-colors duration-300 rounded-md" type="submit" value="realizar login" />
            </form>

        </div>
    )
}