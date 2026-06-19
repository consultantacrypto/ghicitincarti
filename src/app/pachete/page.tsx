export default function PachetePage() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] pt-32 pb-24 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Secțiune */}
        <header className="text-center mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] to-[#FF007F] text-center inline-block pb-2"
            style={{ backgroundSize: "200% auto", animation: "gradientMove 4s linear infinite" }}
          >
            Alege claritatea.
          </h1>
          <p className="text-xl text-[#86868b] mt-6 max-w-2xl mx-auto text-center font-light">
            Sesiuni individuale de consultanță spirituală și ghidare intuitivă, adaptate căutărilor tale.
          </p>
        </header>

        {/* Pachetul Hero - Experiența Supremă (Dark Mode) */}
        <div className="mb-8 w-full bg-[#1d1d1f] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden group transition-transform duration-500 hover:scale-[1.01]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7B2CBF]/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-[#FF007F]/20 text-[#FF007F] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FF007F]/30">
                Pachetul Premium
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Experiența Supremă: <br className="hidden md:block" /> Tarot + Cartomanție + Cafea
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-6">
                Călătoria spirituală completă. O sesiune profundă de decodare ritualică, unde simbolismul organic al zațului de cafea completează perfect dinamica cărților, oferindu-ți o claritate absolută asupra viitorului (iubire, bani, destin).
              </p>
              <div className="flex gap-6 text-sm font-medium text-gray-300">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#0071e3]"></span> 90 minute</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-center w-full lg:w-auto min-w-[300px]">
              <div className="text-5xl font-bold mb-2">1200<span className="text-2xl font-medium ml-1">RON</span></div>
              <p className="text-sm text-gray-400 mb-8">Sesiune completă 3-în-1</p>
              <a href="https://buy.stripe.com/cNieV6fBN25Ec732uUgQE03" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-[#0071e3] text-white text-lg font-medium rounded-full hover:bg-[#0077ed] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,113,227,0.4)]">
                Rezervă sesiunea
              </a>
            </div>
          </div>
        </div>

        {/* Grila 3-Coloane pentru Pachetele Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Pachet 1 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Sesiune Cartomanție</h3>
              <div className="text-3xl font-bold text-[#1d1d1f] mb-6">500<span className="text-lg font-medium text-gray-500 ml-1">RON</span></div>
              <p className="text-[#86868b] font-light leading-relaxed mb-6">
                O incursiune profundă în cărțile tradiționale pentru a descifra tiparele ascunse din prezent și a anticipa evenimentele viitoare. Ideal pentru claritate imediată în decizii concrete de viață.
              </p>
            </div>
            <div>
              <div className="mb-6 text-sm font-medium text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-300"></span> 45 minute
              </div>
              <a href="https://buy.stripe.com/aFaaEQexJbGe6MJ7PegQE00" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-[#0071e3] text-white font-medium rounded-full hover:bg-[#0077ed] transition-colors">
                Rezervă sesiunea
              </a>
            </div>
          </div>

          {/* Pachet 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Sesiune Tarot</h3>
              <div className="text-3xl font-bold text-[#1d1d1f] mb-6">500<span className="text-lg font-medium text-gray-500 ml-1">RON</span></div>
              <p className="text-[#86868b] font-light leading-relaxed mb-6">
                Ghidare arhetipală și analiză intuitivă. Explorăm dinamica subtilă a situației tale curente, oferindu-ți răspunsuri clare și perspective noi pentru evoluția personală și relațională.
              </p>
            </div>
            <div>
              <div className="mb-6 text-sm font-medium text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-300"></span> 45 minute
              </div>
              <a href="https://buy.stripe.com/8x23codtFfWu2wtfhGgQE01" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-[#0071e3] text-white font-medium rounded-full hover:bg-[#0077ed] transition-colors">
                Rezervă sesiunea
              </a>
            </div>
          </div>

          {/* Pachet 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0071e3]/5 rounded-bl-full"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Tarot + Cartomanție</h3>
              <div className="text-3xl font-bold text-[#1d1d1f] mb-6">666<span className="text-lg font-medium text-gray-500 ml-1">RON</span></div>
              <p className="text-[#86868b] font-light leading-relaxed mb-6">
                Corelarea perfectă între două arte divinatorii. O analiză extinsă ce îmbină destinul reflectat de Tarot cu detaliile pragmatice și cronologice oferite de cartomanția tradițională.
              </p>
            </div>
            <div className="relative z-10">
              <div className="mb-6 text-sm font-medium text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0071e3]/50"></span> 60 minute
              </div>
              <a href="https://buy.stripe.com/6oUeV6cpB39Ib2Zb1qgQE02" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-[#0071e3] text-white font-medium rounded-full hover:bg-[#0077ed] transition-colors">
                Rezervă sesiunea
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
