import logo from "../assets/NavBarLogo.png"



export function NavBar({ nameTitle = "" }) {
    return (
        <nav className="bg-(--primary-color)  p-4 w-[100%] h-25">
            <div className="flex items-center justify-between w-auto">
                <img className="w-30" src={logo} alt="" />
                <div>
                    <h3 className="text-(--color-font-title) font-semibold text-[25px] text-shadow-lg shadow-gray-800">{nameTitle}</h3>
                </div>
            </div>
        </nav>
    )
}