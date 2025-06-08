import logo from "../assets/ApplicationLogo.png"



export function NavBar({ nameTitle=""}) {
    return (
            <nav className="bg-(--primary-color) p-4 w-full h-25 top-0 fixed">
                <div className="flex items-center justify-between w-auto">
                    <img className="w-30 h-17 " src={logo} alt="" />
                    <div>
                        <h3 className="text-(--color-font-title) font-semibold text-[25px] text-shadow-lg shadow-gray-800">{nameTitle}</h3>
                    </div>
                    <div className="flex flex-col  w-8 h-6 gap-1 cursor-pointer group ">
                        <div className="w-full h-1 bg-gray-800 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-y-2"></div>
                        <div className="w-full h-1 bg-gray-800 transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="w-full h-1 bg-gray-800 transition-transform duration-300 group-hover:-rotate-45 group-hover:-translate-y-2"></div>
                    </div>
                </div>
            </nav>
    )
}