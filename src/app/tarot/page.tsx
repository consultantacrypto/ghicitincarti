import Image from "next/image";
import Link from "next/link";

export default function TarotPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfbfd] px-4 pt-32 pb-24 sm:px-6">
      <article className="mx-auto max-w-4xl">
        <header className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#1d1d1f] md:text-7xl">
            Tarotologie.
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-[#86868b] md:text-2xl">
            Nu doar o privire în viitor, ci o oglindă clară a subconștientului
            tău. Află unde te afli cu adevărat și încotro te îndrepți.
          </p>
        </header>

        <div className="relative mb-20 h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl md:h-[500px]">
          <Image
            src="/tarot.jpg"
            alt="Cărți de Tarot aranjate pentru o sesiune de tarotologie"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover object-center transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-16 text-lg leading-relaxed font-light text-[#1d1d1f] md:text-xl">
          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Mister și Claritate
            </h2>
            <p>
              Tarotul este mult mai mult decât un instrument divinatoriu; este o
              hartă a sufletului. Atunci când te afli la o răscruce de drumuri
              – fie în dragoste, carieră sau în dezvoltarea ta personală –
              cărțile de tarot intervin pentru a ridica ceața confuziei. Ele
              nu îți dictează o sentință implacabilă, ci îți luminează
              traseul, arătându-ți consecințele energiilor pe care le
              manifești în prezent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Origini și Tradiție
            </h2>
            <p>
              Apărut în Europa secolului al XV-lea, Tarotul a fost inițial
              rezervat nobililor și inițiaților. De-a lungul secolelor, cele 78
              de arcane (majore și minore) au fost perfecționate pentru a
              cuprinde întreaga experiență umană. Păstrând o tradiție
              străveche, interpretarea cărților este o artă ce necesită ani de
              studiu și o vocație spirituală autentică.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Conexiunea Energetică și Psihologică
            </h2>
            <p>
              Cum funcționează o sesiune? Carl Jung numea acest fenomen
              „sincronicitate” – coincidența plină de sens. În momentul
              extragerii, energia și starea ta interioară dictează cărțile care
              vor apărea. Prin expertiza psihologică și intuiția dezvoltată în
              zeci de ani de practică, traduc aceste simboluri vizuale într-un
              limbaj clar, aplicabil direct în viața ta. Este un dialog profund
              între subconștientul tău și ghidarea spirituală.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-3xl font-semibold text-[#1d1d1f]">
              Impactul în viața reală
            </h2>
            <p>
              Clienții care apelează la o ședință de Tarot pleacă cu un
              sentiment profund de eliberare. Vei obține validarea intuiției
              tale, avertismente legate de blocaje ascunse și, cel mai
              important, <strong>claritatea de a lua decizii asumate</strong>.
              Frica de necunoscut dispare atunci când înțelegi tabloul complet.
            </p>
          </section>
        </div>

        <div className="mt-24 border-t border-gray-200 pt-16 text-center">
          <h3 className="mb-8 text-2xl font-semibold text-[#1d1d1f]">
            Ești pregătit să afli adevărul?
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
