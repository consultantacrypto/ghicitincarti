import Link from "next/link";

const navLinks = [
  { href: "/cartomantie", label: "Ghicit în cărți" },
  { href: "/tarot", label: "Ghicit în tarot" },
  { href: "/cafea", label: "Ghicit în cafea" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-baseline">
          <span className="font-serif text-3xl font-bold tracking-tighter text-[#1d1d1f]">
            Cătălina
          </span>
          <span className="text-4xl text-[#0071e3] transition-colors duration-300 group-hover:text-[#FF007F]">
            .
          </span>
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
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
    </header>
  );
}
