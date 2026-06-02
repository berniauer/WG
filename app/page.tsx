import { Camera, Check, Euro, Home as HomeIcon, Mail, MapPin, Ruler, Users } from 'lucide-react'
import Image from 'next/image'
import FloorPlan from './components/FloorPlan'

const address = 'Bergmanngasse 45/5, 8010 Graz'
const encodedAddress = encodeURIComponent(`${address}, Austria`)
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`

const quickFacts = [
  { icon: Ruler, value: '15,11 m²', label: 'freies Zimmer' },
  { icon: Euro, value: '405 €', label: 'all-in pro Monat' },
  { icon: HomeIcon, value: '2. OG', label: '94,68 m² Wohnung' },
  { icon: Users, value: '3er-WG', label: 'Berni, Marvin und du' },
]

const searchPriorities = [
  'Sofort verfügbar',
  'Eigenes Zimmer mit Parkett',
  'Gemeinsamer Balkon',
  'Putzplan funktioniert',
  'Kochen ist bei uns ein Plus',
]

const photoSlots = [
  { title: 'Dein Zimmer', detail: '15,11 m² · Parkett · hell', src: '/photos/zimmer-1.webp' },
  { title: 'Zimmer Blick 2', detail: 'Platz für Bett, Tisch und Kasten', src: '/photos/zimmer-2.webp' },
  { title: 'Küche', detail: 'gemeinsam · voll ausgestattet', src: '/photos/kueche.webp' },
  { title: 'Bad', detail: 'Bad · WC separat', src: '/photos/bad.webp' },
  { title: 'Zimmer Blick 3', detail: 'weitere Perspektive', src: '/photos/zimmer-3.webp' },
  { title: 'Zimmer Blick 4', detail: 'weitere Perspektive', src: '/photos/zimmer-4.webp' },
]

const roomFacts = [
  { label: 'Fläche', value: '15,11 m²' },
  { label: 'Boden', value: 'Parkett' },
  { label: 'Stockwerk', value: '2. OG' },
  { label: 'Verfügbar', value: 'sofort' },
  { label: 'All-in', value: '404,64 €/Mo' },
]

export default function Home() {
  return (
    <div style={{ background: '#F5EFE6', color: '#1C1917' }}>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-dvh flex flex-col justify-between px-5 sm:px-6 md:px-16 pt-6 md:pt-12 pb-8 md:pb-12"
        style={{ borderBottom: '1px solid #C8BFB5' }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <span className="section-label">Graz · WG gesucht</span>
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
            style={{ background: '#D97706', color: 'white', letterSpacing: '0.05em' }}
          >
            1 Zimmer frei
          </span>
        </div>

        {/* Main headline */}
        <div className="py-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {['sofort frei', '405 € all-in', '2. OG', 'Graz'].map((label) => (
                <span
                  key={label}
                  className="text-xs font-semibold px-3 py-2 rounded-full"
                  style={{ background: '#EDE8DF', color: '#57534E', border: '1px solid #C8BFB5' }}
                >
                  {label}
                </span>
              ))}
            </div>
            <h1
              className="font-serif leading-none mb-5"
              style={{ fontSize: 'clamp(3.1rem, 15vw, 7.5rem)', color: '#1C1917' }}
            >
              15 m²
              <br />
              <span style={{ color: '#B45309' }}>in unserer WG.</span>
            </h1>
            <p className="text-base md:text-xl max-w-xl leading-relaxed" style={{ color: '#57534E' }}>
              Du bekommst ein eigenes Zimmer mit Parkett in einer 94,68 m² Wohnung
              mit Balkon, fixer Kostenübersicht und zwei Mitbewohnern, die WG-Leben
              entspannt, sauber und unkompliziert mögen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a
                href="#fotos"
                data-umami-event="hero-photos-click"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: '#1C1917', color: '#F5EFE6', textDecoration: 'none' }}
              >
                <Camera size={18} aria-hidden="true" />
                Fotos ansehen
              </a>
              <a
                href="#kontakt"
                data-umami-event="hero-contact-click"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: '#EDE8DF', color: '#1C1917', border: '1px solid #C8BFB5', textDecoration: 'none' }}
              >
                <Mail size={18} aria-hidden="true" />
                Anfragen
              </a>
            </div>
          </div>

          {/* Key facts */}
          <div
            className="mt-8 lg:mt-0 grid grid-cols-2 gap-px rounded-2xl overflow-hidden text-left flex-shrink-0 lg:w-[420px]"
            style={{ background: '#C8BFB5', border: '1px solid #C8BFB5' }}
          >
            {quickFacts.map(({ icon: Icon, value, label }) => (
              <div key={label} className="px-4 py-4 sm:px-5 sm:py-5" style={{ background: '#EDE8DF' }}>
                <Icon size={18} aria-hidden="true" style={{ color: '#B45309' }} />
                <div className="font-serif text-2xl leading-none mt-3" style={{ color: '#1C1917' }}>
                  {value}
                </div>
                <div className="text-xs mt-1 leading-snug" style={{ color: '#78716C' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {searchPriorities.map((item) => (
            <div
              key={item}
              className="flex min-h-11 items-center gap-2 px-3 py-2 rounded-xl text-xs"
              style={{ background: '#EDE8DF', color: '#57534E', border: '1px solid #C8BFB5' }}
            >
              <Check size={14} aria-hidden="true" style={{ color: '#4A7C6B', flexShrink: 0 }} />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.3; }
          }
        `}</style>
      </section>

      {/* ─── FOTOS ──────────────────────────────────────────────── */}
      <section id="fotos" className="px-5 sm:px-6 md:px-16 py-16 md:py-24" style={{ background: '#EDE8DF', borderBottom: '1px solid #C8BFB5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="section-label mb-3">Fotos · Photos</p>
              <h2 className="font-serif text-4xl md:text-5xl" style={{ color: '#1C1917' }}>
                Erstmal anschauen.
              </h2>
            </div>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: '#78716C' }}>
              Schau dir das freie Zimmer und die gemeinsam genutzten Räume an. Die wichtigsten
              Eindrücke sind direkt hier gesammelt.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {photoSlots.map(({ title, detail, src }, index) => (
              <div
                key={title}
                className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <div
                  className="relative overflow-hidden rounded-xl min-h-[220px] md:min-h-[190px]"
                  style={{
                    aspectRatio: index === 0 ? '4 / 3' : '1 / 1',
                    background: '#E2D9CE',
                    border: '1px solid #C8BFB5',
                  }}
                >
                  <Image
                    src={src}
                    alt={`${title} in der WG`}
                    fill
                    loading="lazy"
                    sizes={index === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 100vw'}
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{ background: 'linear-gradient(to top, rgba(28, 25, 23, 0.78), rgba(28, 25, 23, 0))' }}
                  >
                    <h3 className="font-serif text-2xl" style={{ color: '#F5EFE6' }}>{title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#EDE8DF' }}>{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── DIE WOHNUNG / FLOOR PLAN ──────────────────────────── */}
      <section id="grundriss" className="px-5 sm:px-6 md:px-16 py-16 md:py-24" style={{ borderBottom: '1px solid #C8BFB5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="section-label mb-3">Grundriss · Floor Plan</p>
              <h2 className="font-serif text-4xl md:text-5xl" style={{ color: '#1C1917' }}>
                Die Wohnung
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#78716C' }}>
              94,68 m² Wohnfläche + 6,21 m² Balkon.
              Parkett in den Zimmern, Terrazzo im Bad.
            </p>
          </div>
          <FloorPlan />
        </div>
      </section>

      {/* ─── DAS ZIMMER ────────────────────────────────────────── */}
      <section
        id="zimmer"
        className="px-5 sm:px-6 md:px-16 py-16 md:py-24"
        style={{ background: '#EDE8DF', borderBottom: '1px solid #C8BFB5' }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-3">Das freie Zimmer · The Room</p>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            <div className="flex-1 max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#1C1917' }}>
                15,11 m²<br />
                <span style={{ color: '#B45309' }}>Dein Zimmer.</span>
              </h2>
              <p className="text-base leading-relaxed max-w-xl" style={{ color: '#57534E' }}>
                Helles Zimmer mit Parkettboden. Ausreichend Platz für
                ein Bett, Schreibtisch und Kasten. Die Wohnung liegt im zweiten
                Obergeschoss, das Zimmer ist gut vom Rest der Wohnung isoliert.
              </p>
              <p className="text-sm leading-relaxed max-w-xl mt-3 italic" style={{ color: '#A8A29E' }}>
                Bright room with parquet flooring. Enough space for a
                bed, desk, and wardrobe. Second floor, well-insulated from the
                rest of the apartment.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  'Die Küche, das Bad, das separate WC und der Balkon werden gemeinsam genutzt.',
                  'Die Kosten sind fix aufgeschlüsselt: dein Anteil liegt bei 404,64 € pro Monat.',
                  'Wir suchen jemanden, der eigenständig ist, aber auch Lust auf ein normales WG-Miteinander hat.',
                  'Sauberkeit ist bei uns entspannt, aber verbindlich: Putzplan, keine Dauerbaustelle.',
                ].map((text) => (
                  <div key={text} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#57534E' }}>
                    <Check size={17} aria-hidden="true" style={{ color: '#4A7C6B', flexShrink: 0, marginTop: 2 }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-80 grid grid-cols-2 gap-3">
              {roomFacts.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 min-h-[104px]"
                  style={{ background: '#F5EFE6', border: '1px solid #C8BFB5' }}
                >
                  <div className="text-xs mb-2" style={{ color: '#78716C' }}>{label}</div>
                  <div className="font-serif text-lg font-bold" style={{ color: '#1C1917' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIE WG / ABOUT ────────────────────────────────────── */}
      <section className="px-5 sm:px-6 md:px-16 py-16 md:py-24" style={{ borderBottom: '1px solid #C8BFB5' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-3">Wir · Us</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-12" style={{ color: '#1C1917' }}>
            Die WG
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: 'Berni',
                room: '18,14 m²',
                bio: 'Ich bin Berni, 24 Jahre alt, komme aus Salzburg und studiere Wirtschaftsinformatik am Campus 02. In meiner Freizeit bin ich gerne unter Leuten, im Park oder bei fast jeder sportlichen Aktivität dabei - egal ob Fußball, Spikeball oder Tischtennis. Neben Sport und meiner Begeisterung für Technik koche ich auch sehr gerne.',
                bioEn: "I'm Berni, 24, from Salzburg, and I study business informatics at Campus 02. In my free time I like being around people, spending time in the park, or joining almost any kind of sport - football, spikeball, or table tennis. Besides sports and my interest in tech, I also really enjoy cooking.",
              },
              {
                name: 'Marvin',
                room: '25,79 m²',
                bio: 'Ich bin Marvin, 28 Jahre alt und komme aus Villach. Ich studiere Pharmazie an der Karl-Franzens-Universität, wo ich auch einen Großteil meiner Zeit verbringe. In meiner Freizeit bin ich leidenschaftlicher Kraftsportler, koche gerne und genieße es, nach einem langen Tag einfach entspannt zusammenzusitzen und zu plaudern. Wie Berni bin ich auch gern für alle möglichen Freizeitaktivitäten zu haben.',
                bioEn: "I'm Marvin, 28, from Villach, and I study pharmacy at the Karl-Franzens-University, where I spend a lot of my time. In my free time I am passionate about strength training, enjoy cooking, and like sitting together for a relaxed chat after a long day. Like Berni, I am also up for all kinds of free-time activities.",
              },
            ].map(({ name, room, bio, bioEn }) => (
              <div
                key={name}
                className="rounded-2xl p-7"
                style={{ background: '#EDE8DF', border: '1px solid #C8BFB5' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-2xl" style={{ color: '#1C1917' }}>{name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#F5EFE6', color: '#78716C', border: '1px solid #C8BFB5' }}>
                    {room}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: '#57534E' }}>{bio}</p>
                <p className="text-xs leading-relaxed italic" style={{ color: '#A8A29E' }}>{bioEn}</p>
              </div>
            ))}
          </div>

          {/* WG vibe */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: '#EDE8DF', border: '1px solid #C8BFB5' }}
          >
            <h3 className="font-serif text-2xl mb-4" style={{ color: '#1C1917' }}>Wie leben wir?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed" style={{ color: '#57534E' }}>
              <p>
                Wir sind keine klassischen Partygänger mehr, gehen aber trotzdem gerne mal fort
                oder sitzen abends zusammen, um eine Runde Dart zu spielen oder einfach zu plaudern.
                Grundsätzlich hat jeder seinen eigenen Alltag und Freiraum, aber wenn es sich ergibt,
                unternehmen wir auch gerne etwas gemeinsam.
                <br /><br />
                Uns ist ein unkompliziertes und respektvolles Zusammenleben wichtig. Wir haben einen
                Putzplan, der gut funktioniert, und die Wohnung ist in der Regel sauber und ordentlich.
                Da wir beide gerne kochen, stehen die Chancen außerdem nicht schlecht, dass regelmäßig
                etwas Gutes auf dem Herd landet.
              </p>
              <p className="italic" style={{ color: '#A8A29E' }}>
                We are not classic party people anymore, but we still like going out now and then
                or spending an evening together, playing a round of darts or simply chatting.
                Everyone has their own routine and personal space, but when it fits, we also like
                doing things together.
                <br /><br />
                An uncomplicated and respectful flatshare matters to us. We have a cleaning schedule
                that works well, and the flat is usually clean and tidy. Since both of us enjoy cooking,
                chances are not bad that something good will regularly end up on the stove.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KOSTEN ────────────────────────────────────────────── */}
      <section
        id="kosten"
        className="px-5 sm:px-6 md:px-16 py-16 md:py-24"
        style={{ background: '#EDE8DF', borderBottom: '1px solid #C8BFB5' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-3">Kosten · Costs</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-2" style={{ color: '#1C1917' }}>
                405 € all-in.
              </h2>
              <p className="text-sm italic" style={{ color: '#A8A29E' }}>
                All costs, no surprises.
              </p>
            </div>
            <div className="rounded-xl p-4 md:w-72" style={{ background: '#F5EFE6', border: '1px solid #C8BFB5' }}>
              <div className="text-xs mb-1" style={{ color: '#78716C' }}>Dein monatlicher Anteil</div>
              <div className="font-serif text-4xl leading-none" style={{ color: '#B45309' }}>404,64 €</div>
              <div className="text-xs mt-2 leading-relaxed" style={{ color: '#78716C' }}>
                inklusive Miete, Betriebskosten, Heizung, Strom, WLAN, Versicherung und WG-Einzahlung.
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-x-auto" style={{ border: '1px solid #C8BFB5' }}>
            <div className="min-w-[620px]">
              {/* Header row */}
              <div
                className="grid grid-cols-4 px-6 py-3 text-xs font-semibold"
                style={{ background: '#C8BFB5', color: '#57534E', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                <span>Posten</span>
                <span className="text-right font-bold" style={{ color: '#B45309' }}>Freies Zimmer</span>
                <span className="text-right">Berni</span>
                <span className="text-right">Marvin</span>
              </div>

              {[
                { label: 'Zimmer (m²)', berni: '18,14', marv: '25,79', you: '15,11', note: 'm²', sub: true },
                { label: 'Miete kalt', berni: '209,93', marv: '259,97', you: '190,10', note: '€' },
                { label: 'BK + Heizung', berni: '156,85', marv: '156,85', you: '156,85', note: '€' },
                { label: 'Strom', berni: '16,67', marv: '16,67', you: '16,67', note: '€' },
                { label: 'WLAN', berni: '14,83', marv: '14,83', you: '14,83', note: '€' },
                { label: 'Versicherung', berni: '6,19', marv: '6,19', you: '6,19', note: '€' },
                { label: 'WG-Einzahlung', berni: '20,00', marv: '20,00', you: '20,00', note: '€' },
              ].map(({ label, berni, marv, you, note, sub }, i) => (
                <div
                  key={label}
                  className="grid grid-cols-4 px-6 py-3.5 text-sm"
                  style={{
                    background: i % 2 === 0 ? '#F5EFE6' : '#EDE8DF',
                    borderTop: '1px solid #C8BFB5',
                    color: sub ? '#A8A29E' : '#57534E',
                    fontStyle: sub ? 'italic' : 'normal',
                  }}
                >
                  <span>{label}</span>
                  <span className="text-right font-semibold" style={{ color: sub ? '#A8A29E' : '#B45309' }}>
                    {you} {note}
                  </span>
                  <span className="text-right">{berni} {note}</span>
                  <span className="text-right">{marv} {note}</span>
                </div>
              ))}

              {/* Total */}
              <div
                className="grid grid-cols-4 px-6 py-4 text-sm font-bold"
                style={{ background: '#1C1917', color: '#F5EFE6', borderTop: '2px solid #A09590' }}
              >
                <span className="font-serif text-base">Gesamt / month</span>
                <span className="text-right text-base" style={{ color: '#FDE68A' }}>404,64 €</span>
                <span className="text-right">424,47 €</span>
                <span className="text-right">474,51 €</span>
              </div>
            </div>
          </div>

          <p className="text-xs mt-4" style={{ color: '#A8A29E' }}>
            * Miete wird nach Zimmergröße aufgeteilt. Alle anderen Kosten zu gleichen Teilen.
            <span className="italic"> · Rent split by room size. All other costs split equally.</span>
          </p>
        </div>
      </section>

      {/* ─── KONTAKT ───────────────────────────────────────────── */}
      <section id="kontakt" className="px-5 sm:px-6 md:px-16 pt-16 md:pt-24 pb-28 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Kontakt · Contact</p>
          <h2 className="font-serif leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#1C1917' }}>
            Klingt gut?
          </h2>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#57534E' }}>
            Schreib uns kurz wer du bist und warum du bei uns einziehen möchtest.
            Ein paar Zeilen reichen, wir freuen uns!
          </p>
          <p className="text-sm italic mb-10" style={{ color: '#A8A29E' }}>
            Tell us a bit about yourself and why you&apos;d like to move in.
            A few lines is enough, we&apos;re happy to hear from you!
          </p>

          <a
            href="mailto:auer_bernhard@outlook.com?subject=WG%20Graz%20-%20Zimmer%20anfrage"
            data-umami-event="contact-email-click"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#1C1917', color: '#F5EFE6', textDecoration: 'none' }}
          >
            E-Mail schreiben
            <span>→</span>
          </a>

          <div
            className="mt-12 rounded-2xl p-5 text-left"
            style={{ background: '#EDE8DF', border: '1px solid #C8BFB5' }}
          >
            <div className="flex items-start gap-3">
              <MapPin size={22} aria-hidden="true" style={{ color: '#B45309', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="section-label mb-2">Adresse · Location</p>
                <p className="font-serif text-2xl leading-tight" style={{ color: '#1C1917' }}>
                  {address}
                </p>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#78716C' }}>
                  Öffne die Adresse direkt in deiner Karten-App, um Lage, Wegzeit und Umgebung zu checken.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                data-umami-event="google-maps-click"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: '#1C1917', color: '#F5EFE6', textDecoration: 'none' }}
              >
                Google Maps
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noreferrer"
                data-umami-event="apple-maps-click"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: '#F5EFE6', color: '#1C1917', border: '1px solid #C8BFB5', textDecoration: 'none' }}
              >
                Apple Karten
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8" style={{ borderTop: '1px solid #C8BFB5' }}>
            <p className="text-xs" style={{ color: '#A8A29E' }}>
              WG Graz · 94,68 m² · 3 Personen · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

      <div
        className="fixed inset-x-0 bottom-0 z-40 md:hidden px-4 pt-3 pb-4"
        style={{ background: 'rgba(245, 239, 230, 0.96)', borderTop: '1px solid #C8BFB5' }}
      >
        <a
          href="#kontakt"
          data-umami-event="sticky-contact-click"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold"
          style={{ background: '#1C1917', color: '#F5EFE6', textDecoration: 'none' }}
        >
          <Mail size={18} aria-hidden="true" />
          Zimmer anfragen
        </a>
      </div>
    </div>
  )
}
