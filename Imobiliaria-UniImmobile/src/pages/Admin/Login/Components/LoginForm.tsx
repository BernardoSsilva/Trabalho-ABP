export function LoginForm() {
    return (
        <form className="w-1/2 flex flex-col p-8 py-20  items-center ">
            <h1>Login</h1>

            <div>
                <p>
                    Informe seu email
                </p>
                <input className="border border-solid rounded-s" type="email" />
            </div>

            <div>
                <p>
                    Informe sua senha
                </p>
                <input className="border border-solid rounded-s" type="text" />
            </div>

        </form>
    )
}