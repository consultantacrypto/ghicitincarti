import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Acasă" },
  { href: "#servicii", label: "Servicii" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-semibold text-apple-text">Cătălina Verinceanu</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Claritate și echilibru prin psihologie și tarot.
            </p>
          </div>

          <nav>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navigare
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors duration-300 hover:text-apple-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="mailto:programari@ghicitincarti.ro"
                  className="transition-colors duration-300 hover:text-apple-text"
                >
                  programari@ghicitincarti.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-gray-400">
          © 2026 Ghicit în Cărți. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
