import Link from "next/link";

const testimonials = [
  {
    quote:
      "Am plecat de la sesiune cu o claritate pe care nu o mai simțisem de ani. Am înțeles în sfârșit de ce mă blocam și ce pași concreți pot face înainte.",
    name: "Maria D.",
  },
  {
    quote:
      "Combinația dintre psihologie și tarot mi-a oferit o perspectivă complet nouă asupra situației mele. M-am simțit ascultată, înțeleasă și ghidată cu blândețe.",
    name: "Elena R.",
  },
  {
    quote:
      "După ani de incertitudine, am regăsit un echilibru interior pe care credeam că l-am pierdut definitiv. Recomand cu toată încrederea.",
    name: "Andrei P.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#fbfbfd] px-4">
        <div className="relative z-10 flex w-full flex-col items-center">
          <h1
            className="w-full bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] to-[#FF007F] bg-clip-text text-center text-[15vw] leading-[0.85] font-bold tracking-tighter text-transparent md:text-[12vw]"
            style={{
              backgroundSize: "200% auto",
              animation: "gradientMove 4s linear infinite",
            }}
          >
            CLARITATE.
          </h1>

          <div className="mt-12 flex flex-col items-center">
            <p className="mx-auto max-w-2xl text-center text-xl font-light text-[#86868b] md:text-2xl">
              Prin Tarot, Cartomanție și Ghicit în Cafea, îți ofer o imagine
              clară asupra viitorului tău – iubire, bani sau destin.
            </p>
            <Link
              href="/pachete"
              className="mt-12 inline-block rounded-full bg-[#0071e3] px-10 py-4 text-center text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#0077ed] hover:shadow-xl"
            >
              Află ce îți rezervă viitorul
            </Link>
          </div>
        </div>
      </section>

      <section id="servicii" className="py-32">
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
          <Link
            href="/cartomantie"
            className="group relative flex h-[450px] min-h-0 flex-col overflow-hidden rounded-[2.5rem] border border-gray-100 bg-[#fbfbfd]"
          >
            <div className="relative z-10 p-10 pb-0">
              <h3 className="text-3xl font-semibold text-[#1d1d1f]">
                Cartomanție.
              </h3>
              <p className="mt-2 text-[#86868b]">
                Previziuni precise prin cărțile tradiționale.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0071e3] transition-all duration-300 group-hover:gap-2">
                Află detalii{" "}
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
            <div className="relative mt-8 min-h-0 flex-1">
              <img
                src="/cartomantie.jpg"
                alt="Cartomanție"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>

          <Link
            href="/tarot"
            className="group relative flex h-[450px] min-h-0 flex-col overflow-hidden rounded-[2.5rem] border border-gray-100 bg-[#fbfbfd]"
          >
            <div className="relative z-10 p-10 pb-0">
              <h3 className="text-3xl font-semibold text-[#1d1d1f]">
                Tarotologie.
              </h3>
              <p className="mt-2 text-[#86868b]">
                Citiri intuitive și analiză simbolică.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0071e3] transition-all duration-300 group-hover:gap-2">
                Află detalii{" "}
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
            <div className="relative mt-8 min-h-0 flex-1">
              <img
                src="/tarot.jpg"
                alt="Tarot"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>

          <Link
            href="/cafea"
            className="group relative flex h-[500px] min-h-0 flex-col overflow-hidden rounded-[2.5rem] border border-gray-100 bg-[#fbfbfd] md:col-span-2"
          >
            <div className="relative z-10 p-10 pb-0 text-center md:text-left">
              <h3 className="text-4xl font-semibold text-[#1d1d1f]">
                Ghicit în cafea. Tradiție și intuiție.
              </h3>
              <div className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-[#0071e3] transition-all duration-300 group-hover:gap-2 md:justify-start">
                Află detalii{" "}
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
            <div className="relative mt-8 min-h-0 flex-1">
              <img
                src="/Ghicit in cafea_2.jpg"
                alt="Ghicit în cafea"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </section>

      <section
        id="despre"
        className="relative overflow-hidden border-t border-gray-100 bg-[#fbfbfd] py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src="/catalina.jpg"
                alt="Cătălina - Consilier Spiritual"
                className="h-full w-full object-cover object-center grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
            <div className="absolute -right-10 -bottom-10 -z-10 h-64 w-64 rounded-full bg-[#7B2CBF]/10 mix-blend-multiply blur-3xl filter" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1d1d1f] md:text-5xl">
              Intuiție dublată de experiență.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-light text-[#86868b]">
              <p>
                Peste trei decenii de studiu al minții umane și o vocație
                spirituală autentică. Nu cred în coincidențe, ci în mesaje care
                așteaptă să fie descifrate.
              </p>
              <p>
                Abordarea mea nu este doar despre a &ldquo;ghici&rdquo;
                viitorul, ci despre a-ți oferi un cadru clar, empatic și
                structurat pentru a lua deciziile corecte atunci când viața
                devine confuză. Folosind instrumente tradiționale – Tarotul,
                Cartomanția și Cafeaua – traduc energiile subtile în strategii
                concrete pentru liniștea ta.
              </p>
            </div>
            <div className="mt-10 border-t border-gray-200 pt-8">
              <p className="text-xl font-semibold text-[#1d1d1f]">Cătălina</p>
              <p className="mt-1 text-sm font-medium text-[#0071e3]">
                Fondator & Consilier Spiritual
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoniale" className="bg-white px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-semibold text-apple-text">
            Ce spun clienții
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl bg-[#fbfbfd] p-8"
              >
                <p className="mb-6 italic leading-relaxed text-gray-500">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-apple-text">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
