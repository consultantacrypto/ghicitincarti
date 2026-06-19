import Image from "next/image";
import Link from "next/link";

export default function CafeaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfbfd] px-4 pt-32 pb-24 sm:px-6">
      <article className="mx-auto max-w-4xl">
        <header className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#1d1d1f] md:text-7xl">
            Ghicit în cafea.
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-[#86868b] md:text-2xl">
            Tradiție și intuiție. Decodarea simbolurilor organice pentru o
            viziune profundă, personală și unică asupra destinului tău.
          </p>
        </header>

        <div className="relative mb-20 h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl md:h-[500px]">
          <Image
            src="/Ghicit in cafea_2.jpg"
            alt="Ceașcă de cafea pentru o sesiune de ghicit în cafea"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-16 text-lg leading-relaxed font-light text-[#1d1d1f] md:text-xl">
          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Simbolism și Fluiditate Organică
            </h2>
            <p>
              Spre deosebire de cărțile de Tarot care au un număr fix de
              imagini, zațul de cafea este o pânză absolut liberă. Nu există
              două cești la fel. Lectura în cafea (Taseografia) este o artă
              divinatorie extrem de intimă, în care energia ta amprentează
              direct materia. Formele lăsate pe porțelan sunt mesaje necenzurate
              ale subconștientului tău, traduse prin intuiție pură.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              O Tradiție Străveche
            </h2>
            <p>
              Transmis din generație în generație în cultura orientală și
              balcanică, ghicitul în cafea este mai mult decât o previziune;
              este un ritual de conectare. Dincolo de simpla interpretare a
              viitorului, acest obicei a reprezentat întotdeauna un spațiu sigur
              de spovedanie sufletească, unde secretele, temerile și speranțele
              sunt ascultate și ghidate.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Cum Funcționează Decodarea?
            </h2>
            <p>
              În timpul ritualului, ceașca devine o hartă a vieții tale: fundul
              ceștii vorbește despre trecutul și rădăcinile tale, pereții
              reflectă evenimentele prezente, iar marginea superioară indică
              viitorul imediat. Voi decoda simbolurile organice — drumuri,
              obstacole, inițiale de persoane, figuri și arhetipuri —
              transformându-le într-o poveste coerentă și plină de sens pentru
              situația ta actuală.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Impactul în viața reală
            </h2>
            <p>
              O ședință de ghicit în cafea aduce o senzație profundă de alinare
              și fascinație. Vei primi detalii uimitor de precise despre
              persoanele din jurul tău și direcția în care se îndreaptă
              proiectele sau relațiile tale. Este metoda ideală atunci când
              cauți mesaje ascunse, sfaturi calde și confirmări subtile pe care
              nicio altă practică nu le poate revela la un nivel atât de
              personal.
            </p>
          </section>
        </div>

        <div className="mt-24 border-t border-gray-200 pt-16 text-center">
          <h3 className="mb-8 text-2xl font-semibold text-[#1d1d1f]">
            Ești gata să îți descoperi povestea?
          </h3>
          <Link
            href="/pachete"
            className="inline-block transform rounded-full bg-[#0071e3] px-10 py-4 text-lg font-medium text-white shadow-lg transition-colors duration-300 hover:-translate-y-1 hover:bg-[#0077ed] hover:shadow-xl"
          >
            Programează o ședință
          </Link>
        </div>
      </article>
    </div>
  );
}
