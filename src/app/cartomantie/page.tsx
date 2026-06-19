import Image from "next/image";
import Link from "next/link";

export default function CartomantiePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfbfd] px-4 pt-32 pb-24 sm:px-6">
      <article className="mx-auto max-w-4xl">
        <header className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#1d1d1f] md:text-7xl">
            Cartomanție.
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-[#86868b] md:text-2xl">
            Adevărul din cărți. O metodă precisă, ancorată în timp, pentru
            decizii pragmatice și răspunsuri directe.
          </p>
        </header>

        <div className="relative mb-20 h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl md:h-[500px]">
          <Image
            src="/cartomantie.jpg"
            alt="Cărți de cartomanție pentru o sesiune de ghicit în cărți"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-16 text-lg leading-relaxed font-light text-[#1d1d1f] md:text-xl">
          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Precizie și Claritate Brută
            </h2>
            <p>
              Dacă Tarotul explorează energiile subtile și starea ta interioară,
              Cartomanția este arta divinatorie a pragmatismului. Folosind
              pachetul tradițional de cărți, această practică se concentrează pe
              evenimente concrete din viața ta. Este instrumentul perfect atunci
              când ai nevoie de un răspuns direct, fără ocolișuri, la
              întrebarea: <em>„Ce se va întâmpla exact și când?”</em>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Origini și Tradiție
            </h2>
            <p>
              Cu rădăcini puternice în curțile regale europene și saloanele
              aristocrate ale secolelor trecute, ghicitul în cărți a
              supraviețuit și a prosperat grație acurateței sale matematice.
              Fiecare suită (inimă, treflă, romb, pică) reprezintă un domeniu
              vital, iar intersecția lor pe masa de citire dezvăluie povestea
              clară, cronologică, a destinului tău imediat.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Logica din Spatele Cărților
            </h2>
            <p>
              Spre deosebire de alte practici, Cartomanția este extrem de
              analitică. Cărțile formează asocieri și perechi care indică
              influențe externe, rivalități, câștiguri financiare iminente sau
              schimbări în dinamica unei relații. Prin experiența mea, descifrez
              aceste tipare riguroase și îți traduc exact intențiile celor din
              jurul tău, oferindu-ți un avantaj strategic în propriile alegeri.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Impactul în viața reală
            </h2>
            <p>
              O ședință de cartomanție îți oferă claritate aplicabilă imediat.
              Vei afla unde trebuie să acționezi urgent, cine îți este aliat și
              ce obstacole concrete stau în calea succesului tău. Nu pleci doar
              cu o perspectivă generală, ci cu o hartă a evenimentelor care
              urmează să se desfășoare, permițându-ți să fii mereu cu un pas
              înainte.
            </p>
          </section>
        </div>

        <div className="mt-24 border-t border-gray-200 pt-16 text-center">
          <h3 className="mb-8 text-2xl font-semibold text-[#1d1d1f]">
            Ai nevoie de un răspuns concret?
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
