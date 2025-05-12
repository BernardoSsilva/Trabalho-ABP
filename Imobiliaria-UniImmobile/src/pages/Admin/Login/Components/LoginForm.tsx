export function LoginForm() {
    return (
        <form className="bg-slate-400 p-4 flex-col m-0 h-50% w-20%" >
            <h1>Realize seu Login</h1>

            <div className="w-full m-1">
                <label>
                    Insira seu email:
                </label>
                <input type="email" className="border-white-200 border-2" />

            </div>

            <div className="w-full">
                <label>
                    Insira sua senha:
                </label>
                <input type="password" className="border-white-200 border-2 " />
            </div>

            <input type="submit" className="w-full p-2 text-lg bg-emerald-500 text-white border-r-8" />
        </form>
    )
}