import { NavBar } from "../../../utilities/NavBar";
import iconePasta from "../../../assets/iconePasta.png"

export function RegisterProperties() {
    return (
        <>
            <NavBar nameTitle={"Cadastro de Imóveis"} />
            <main className="mt-[110px] sm:p-6 lg:p-10 flex items-center justify-center min-h-screen">
                <form action="" className="w-full max-w-6xl h-auto flex flex-col space-y-6">

                    {/* Primeira linha - 3 campos em desktop, 1 em mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tipoImovel" className="text-sm font-medium text-gray-700">
                                Tipo Imóvel:
                            </label>
                            <input
                                type="text"
                                name="tipoImovel"
                                id="tipoImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o tipo do imóvel"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="enderecoImovel" className="text-sm font-medium text-gray-700">
                                Endereço Imóvel:
                            </label>
                            <input
                                type="text"
                                name="enderecoImovel"
                                id="enderecoImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o endereço do imóvel"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="cidadeImovel" className="text-sm font-medium text-gray-700">
                                Cidade Imóvel:
                            </label>
                            <input
                                type="text"
                                name="cidadeImovel"
                                id="cidadeImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite a cidade do imóvel"
                            />
                        </div>
                    </div>

                    {/* Segunda linha */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="estadoImovel" className="text-sm font-medium text-gray-700">
                                Estado Imóvel:
                            </label>
                            <input
                                type="text"
                                name="estadoImovel"
                                id="estadoImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o estado do imóvel"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="cepImovel" className="text-sm font-medium text-gray-700">
                                CEP Imóvel:
                            </label>
                            <input
                                type="text"
                                name="cepImovel"
                                id="cepImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o CEP do imóvel"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="dormitoriosImovel" className="text-sm font-medium text-gray-700">
                                Dormitórios Imóvel:
                            </label>
                            <input
                                type="number"
                                name="dormitoriosImovel"
                                id="dormitoriosImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o número de dormitórios"
                            />
                        </div>
                    </div>

                    {/* Terceira linha */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="suitesImovel" className="text-sm font-medium text-gray-700">
                                Suítes no Imóvel:
                            </label>
                            <input
                                type="number"
                                name="suitesImovel"
                                id="suitesImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o número de suítes"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="salasImovel" className="text-sm font-medium text-gray-700">
                                Salas Imóvel:
                            </label>
                            <input
                                type="number"
                                name="salasImovel"
                                id="salasImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o número de salas"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="cozinhaImovel" className="text-sm font-medium text-gray-700">
                                Cozinhas no Imóvel:
                            </label>
                            <input
                                type="number"
                                name="cozinhaImovel"
                                id="cozinhaImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o número de cozinhas"
                            />
                        </div>
                    </div>

                    {/* Quarta linha */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="banheiroImovel" className="text-sm font-medium text-gray-700">
                                Banheiros no Imóvel:
                            </label>
                            <input
                                type="number"
                                name="banheiroImovel"
                                id="banheiroImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o número de banheiros"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="tamanhoImovel" className="text-sm font-medium text-gray-700">
                                Tamanho do Imóvel (m²):
                            </label>
                            <input
                                type="number"
                                name="tamanhoImovel"
                                id="tamanhoImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o tamanho em m²"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="garagemImovel" className="text-sm font-medium text-gray-700">
                                Garagem no Imóvel:
                            </label>
                            <input
                                type="text"
                                name="garagemImovel"
                                id="garagemImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o número de vagas"
                            />
                        </div>
                    </div>

                    {/* Quinta linha - 2 campos para dar mais espaço */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="valorImovel" className="text-sm font-medium text-gray-700">
                                Valor Imóvel (R$):
                            </label>
                            <input
                                type="number"
                                name="valorImovel"
                                id="valorImovel"
                                className="bg-[#E6DED5] w-full h-10 px-3  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                placeholder="Digite o valor do imóvel"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="observacaoImovel" className="text-sm font-medium text-gray-700">
                                Observações Imóvel:
                            </label>
                            <textarea
                                name="observacaoImovel"
                                id="observacaoImovel"
                                rows={1}
                                className="bg-[#E6DED5] w-full px-3 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-vertical"
                                placeholder="Digite as observações do imóvel"
                            ></textarea>
                        </div>

                        <div className="flex flex-col gap-2">
                            <input type="file"
                                name="imgProperties"
                                id="imgProperties"
                                placeholder=""
                                className="hidden bg-[#E6DED5] w-full px-3 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-vertical"
                            />
                            <label htmlFor="imgProperties"
                                className="cursor-pointer flex gap-5 bg-[#E6DED5] w-full px-3 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-vertical">
                                <img src={iconePasta} alt="" className="h-5" />
                                <span>Anexar Imagens do Imóvel</span>
                            </label>
                        </div>
                    </div>

                    {/* Botão de enviar */}
                    <div className="flex justify-center md:justify-end pt-6">
                        <button
                            type="submit"
                            className="text-white font-semibold bg-[#6B8C6E] h-8 w-full md:w-48  hover:bg-[#275c4b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6B8C6E] focus:ring-offset-2"
                        >
                            Enviar
                        </button>
                    </div>

                </form>
            </main>
        </>
    )
}