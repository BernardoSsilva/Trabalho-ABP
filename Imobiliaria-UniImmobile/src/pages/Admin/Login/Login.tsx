import { LoginForm } from "./Components/LoginForm";

export function LoginPage() {
    return (
        <div className="inline-flex w-screen overflow-hidden">
            <div className="bg-gray-100 w-1/2 h-screen">
                <img className="w-full h-full" src="https://th.bing.com/th/id/OIP.xW2SAK_9PbhzSXaH_7TTEwHaE8?rs=1&pid=ImgDetMain" alt="banana" />
            </div>
            <LoginForm />
        </div>
    )
}