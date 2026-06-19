export default function PachetePage() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] px-4 pt-32 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h1
            className="inline-block bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] to-[#FF007F] bg-clip-text pb-2 text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl"
            style={{
              backgroundSize: "200% auto",
              animation: "gradientMove 4s linear infinite",
            }}
          >
            Alege claritatea.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl font-light text-[#86868b]">
            Sesiuni individuale de consultanță spirituală și ghidare intuitivă,
            adaptate căutărilor tale.
          </p>
        </header>

        <div className="group relative mb-8 w-full overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white shadow-2xl transition-transform duration-500 hover:scale-[1.01] md:rounded-[3.5rem] md:p-14">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#7B2CBF]/20 opacity-50 mix-blend-screen blur-[100px] filter transition-opacity duration-700 group-hover:opacity-80" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block rounded-full border border-[#FF007F]/30 bg-[#FF007F]/20 px-3 py-1 text-xs font-bold tracking-wider text-[#FF007F] uppercase">
                Pachetul Premium
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                Experiența Supremă:{" "}
                <br className="hidden md:block" /> Tarot + Cartomanție + Cafea
              </h2>
              <p className="mb-6 text-lg leading-relaxed font-light text-gray-400 md:text-xl">
                Călătoria spirituală completă. O sesiune profundă de decodare
                ritualică, unde simbolismul organic al zațului de cafea
                completează perfect dinamica cărților, oferindu-ți o claritate
                absolută asupra viitorului (iubire, bani, destin).
              </p>
              <div className="flex gap-6 text-sm font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0071e3]" />
                  90 minute
                </div>
              </div>
            </div>

            <div className="w-full min-w-[300px] rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl lg:w-auto">
              <div className="mb-2 text-5xl font-bold">
                1200
                <span className="ml-1 text-2xl font-medium">RON</span>
              </div>
              <p className="mb-8 text-sm text-gray-400">Sesiune completă 3-în-1</p>
              <a
                href="https://buy.stripe.com/cNieV6fBN25Ec732uUgQE03"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-[#0071e3] py-4 text-center text-lg font-medium text-white transition-all duration-300 hover:bg-[#0077ed] hover:shadow-[0_0_20px_rgba(0,113,227,0.4)]"
              >
                Rezervă sesiunea
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-[#1d1d1f]">
                Sesiune Cartomanție
              </h3>
              <div className="mb-6 text-3xl font-bold text-[#1d1d1f]">
                500
                <span className="ml-1 text-lg font-medium text-gray-500">
                  RON
                </span>
              </div>
              <p className="mb-6 leading-relaxed font-light text-[#86868b]">
                O incursiune profundă în cărțile tradiționale pentru a descifra
                tiparele ascunse din prezent și a anticipa evenimentele
                viitoare. Ideal pentru claritate imediată în decizii concrete de
                viață.
              </p>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="h-2 w-2 rounded-full bg-gray-300" />
                45 minute
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-[#0071e3] py-3 font-medium text-white transition-colors hover:bg-[#0077ed]"
              >
                Rezervă sesiunea
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-[#1d1d1f]">
                Sesiune Tarot
              </h3>
              <div className="mb-6 text-3xl font-bold text-[#1d1d1f]">
                500
                <span className="ml-1 text-lg font-medium text-gray-500">
                  RON
                </span>
              </div>
              <p className="mb-6 leading-relaxed font-light text-[#86868b]">
                Ghidare arhetipală și analiză intuitivă. Explorăm dinamica
                subtilă a situației tale curente, oferindu-ți răspunsuri clare
                și perspective noi pentru evoluția personală și relațională.
              </p>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="h-2 w-2 rounded-full bg-gray-300" />
                45 minute
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-[#0071e3] py-3 font-medium text-white transition-colors hover:bg-[#0077ed]"
              >
                Rezervă sesiunea
              </button>
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-[#0071e3]/5" />
            <div className="relative z-10">
              <h3 className="mb-2 text-2xl font-semibold text-[#1d1d1f]">
                Tarot + Cartomanție
              </h3>
              <div className="mb-6 text-3xl font-bold text-[#1d1d1f]">
                666
                <span className="ml-1 text-lg font-medium text-gray-500">
                  RON
                </span>
              </div>
              <p className="mb-6 leading-relaxed font-light text-[#86868b]">
                Corelarea perfectă între două arte divinatorii. O analiză
                extinsă ce îmbină destinul reflectat de Tarot cu detaliile
                pragmatice și cronologice oferite de cartomanția tradițională.
              </p>
            </div>
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="h-2 w-2 rounded-full bg-[#0071e3]/50" />
                60 minute
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-[#0071e3] py-3 font-medium text-white transition-colors hover:bg-[#0077ed]"
              >
                Rezervă sesiunea
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
