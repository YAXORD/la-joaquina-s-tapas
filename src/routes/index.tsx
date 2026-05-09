import { createFileRoute } from "@tanstack/react-router";
import heroBar from "@/assets/hero-bar.jpg";
import tapasImg from "@/assets/tapas.jpg";
import carnesImg from "@/assets/carnes.jpg";
import calamaresImg from "@/assets/calamares.jpg";
import menuImg from "@/assets/menu.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Joaquina · Bar de Tapas en Granada" },
      {
        name: "description",
        content:
          "La Joaquina, bar de tapas en el barrio Norte de Granada. Tapas, raciones, carnes y calamares. C/ Joaquina Eguaras, 11.",
      },
      { property: "og:title", content: "La Joaquina · Bar de Tapas en Granada" },
      {
        property: "og:description",
        content: "Tapas, raciones y buen ambiente en el corazón del Norte de Granada.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Reviews />
      <Visit />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-primary">La</span>
          <span className="font-display text-2xl tracking-tight">Joaquina</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#nosotros" className="hover:text-foreground transition">Nosotros</a>
          <a href="#carta" className="hover:text-foreground transition">Carta</a>
          <a href="#resenas" className="hover:text-foreground transition">Reseñas</a>
          <a href="#visita" className="hover:text-foreground transition">Visítanos</a>
        </nav>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=La+Joaquina+Calle+Joaquina+Eguaras+11+18013+Granada&destination_place_id=ChIJ"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition"
        >
          Cómo llegar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroBar}
        alt="Interior cálido del bar La Joaquina con jamones colgados y vinos en la barra"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6">
            Granada · Barrio Norte
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            Tapas, vino<br />
            <span className="italic text-primary">y barrio.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Un bar de toda la vida con tapas que se eligen, raciones para compartir
            y carnes a la brasa. Bienvenido a La Joaquina.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#carta"
              className="rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-warm)]"
            >
              Ver la carta
            </a>
            <a
              href="tel:+34689707543"
              className="rounded-full border border-border px-8 py-3.5 text-sm hover:bg-card transition"
            >
              Reservar: 689 70 75 43
            </a>
          </div>

          <div className="mt-16 flex gap-10 text-sm">
            <Stat n="4,6" label="★ Google" />
            <Stat n="45+" label="Reseñas" />
            <Stat n="1–10€" label="Por persona" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-muted-foreground text-xs uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-28 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">La casa</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Hacía falta un bar así en la zona.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            En la calle Joaquina Eguaras, en pleno barrio Norte de Granada, abrió un
            bar grande, con muchas mesas, camareros atentos y una carta que
            recuerda por qué Granada es Granada: tapas para elegir con la caña,
            raciones generosas, bocadillos y carnes que se hacen al momento.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Sin pretensiones. De barrio. Para volver.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src={tapasImg}
              alt="Selección de tapas españolas: croquetas, patatas bravas, jamón, aceitunas"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 max-w-[220px]">
            <p className="font-display italic text-2xl leading-tight">"Buenísimas"</p>
            <p className="text-xs text-muted-foreground mt-2">— Las tapas, según los vecinos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const items = [
    {
      img: tapasImg,
      tag: "Para empezar",
      title: "Tapas a elegir",
      desc: "Gran cantidad de tapas para acompañar la caña o el vino. Tú eliges.",
    },
    {
      img: carnesImg,
      tag: "De la brasa",
      title: "Carnes que enamoran",
      desc: "Carnes a la brasa, jugosas y sin pretensiones. La estrella de la casa.",
    },
    {
      img: calamaresImg,
      tag: "Clásico",
      title: "Calamares fritos",
      desc: "Crujientes por fuera, tiernos por dentro. Con limón y poco más.",
    },
  ];
  return (
    <section id="carta" className="py-28 px-6 bg-card/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">La carta</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">
              Lo que nos pides una y otra vez.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Cocina honesta. Productos de siempre. Raciones para compartir o para ti solo,
            que aquí no juzgamos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/40 transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-primary uppercase tracking-widest">{it.tag}</p>
                <h3 className="font-display text-2xl mt-2">{it.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">La carta completa</p>
            <h3 className="font-display text-3xl md:text-4xl mb-4">
              Tapas, bocadillos y menú del día por <span className="text-primary">13 €</span>.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tapas plato, tapas pescado, tapas del día y una larga lista de
              bocadillos para todos los gustos. Tapas extras a 2 €.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Reservas: <a href="tel:+34689707543" className="text-primary hover:underline">689 70 75 43</a>
            </p>
          </div>
          <div className="md:col-span-3">
            <a
              href={menuImg}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] hover:border-primary/50 transition"
            >
              <img
                src={menuImg}
                alt="Carta de La Joaquina con tapas, bocadillos y menú del día"
                loading="lazy"
                className="w-full h-auto"
              />
            </a>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Toca la imagen para ampliar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Antonio Nicolás",
      stars: 5,
      text: "Ya hacía falta un bar así en la zona, gran cantidad de tapas a elegir y buenas raciones, bocadillos. Las carnes que pedimos nos encantaron y los calamares.",
      when: "Hace 2 meses",
    },
    {
      name: "María Ángeles Martínez",
      stars: 5,
      text: "Desde que han abierto hemos ido varias veces con diferentes grupos de amigos y siempre ha sido estupendo.",
      when: "Hace 2 meses",
    },
    {
      name: "Dolores Molina",
      stars: 4,
      text: "El bar es muy grande, con bastantes mesas, los camareros muy atentos y simpáticos, y las tapas buenísimas. Aconsejo ir.",
      when: "Hace 2 meses",
    },
  ];
  return (
    <section id="resenas" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Nos lo dicen</p>
          <h2 className="font-display text-4xl md:text-5xl">
            <span className="text-primary">4,6</span> sobre 5 en Google
          </h2>
          <p className="text-muted-foreground mt-4">Basado en 45 reseñas verificadas</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-2xl bg-card border border-border p-8 flex flex-col"
            >
              <div className="text-primary mb-4 tracking-widest">
                {"★".repeat(r.stars)}
                <span className="text-muted-foreground/40">{"★".repeat(5 - r.stars)}</span>
              </div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{r.text}"</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <p className="font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.when} · Google</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visita" className="py-28 px-6 bg-card/40">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Visítanos</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Te esperamos en<br />el barrio Norte.
          </h2>
          <dl className="space-y-6 text-lg">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Dirección
              </dt>
              <dd>C/ Joaquina Eguaras, 11 — 18013 Granada</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Precio medio
              </dt>
              <dd>1 – 10 € por persona</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Cocina
              </dt>
              <dd>Tapas, raciones, bocadillos, carnes</dd>
            </div>
          </dl>
          <a
            href="https://www.google.com/maps/search/?api=1&query=La+Joaquina+Calle+Joaquina+Eguaras+11+Granada"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-warm)]"
          >
            Cómo llegar →
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border h-[420px] md:h-auto">
          <iframe
            title="Mapa La Joaquina Granada"
            src="https://www.google.com/maps?q=Calle+Joaquina+Eguaras+11+Granada&output=embed"
            className="w-full h-full grayscale-[0.3] contrast-[1.1]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-wrap justify-between gap-6 items-center">
        <div>
          <p className="font-display text-xl">
            La <span className="text-primary italic">Joaquina</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            C/ Joaquina Eguaras, 11 · Granada
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} La Joaquina. Hecho con cariño en Granada.
        </p>
      </div>
    </footer>
  );
}
