import { LoginForm } from "./Components/LoginForm";
import bgImage from "../../../assets/ImageImmobileLoginScreen.png";

export function LoginPage() {
    return (
        <div className="inline-flex w-screen overflow-hidden max-h-screen h-screen">
            <div className="bg-gray-100 w-1/2">
                <img src={bgImage} className="w-full h-full" />
            </div>
            <LoginForm />
        </div>
    )
}