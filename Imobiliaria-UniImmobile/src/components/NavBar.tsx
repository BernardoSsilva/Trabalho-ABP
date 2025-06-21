import logo from "../assets/ApplicationLogo.png"



export function NavBar({ nameTitle = "" }) {
    return (
        <nav className="bg-(--primary-color) z-10 p-4 w-full h-25 top-0 fixed">
            <div className="flex items-center justify-between w-auto">
                <img className="w-30 h-17 " src={logo} alt="" />
                <div>
                    <h3 className="text-(--color-font-title) font-semibold text-[25px] text-shadow-lg shadow-gray-800">{nameTitle}</h3>
                </div>

            </div>
        </nav>
    )
}