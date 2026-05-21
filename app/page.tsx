import FloorPlan from './components/FloorPlan'

export default function Home() {
  return (
    <div style={{ background: '#F5EFE6', color: '#1C1917' }}>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-16 pb-12"
        style={{ borderBottom: '1px solid #C8BFB5' }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <span className="section-label">Wien · WG gesucht</span>
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: '#D97706', color: 'white', letterSpacing: '0.05em' }}
          >
            1 Zimmer frei
          </span>
        </div>

        {/* Main headline */}
        <div className="py-16 md:py-0 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1
              className="font-serif leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)', color: '#1C1917' }}
            >
              Ein Zimmer
              <br />
              <span style={{ color: '#B45309' }}>wartet.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-md leading-relaxed" style={{ color: '#57534E' }}>
              Wir sind eine 2er-WG in Wien und suchen eine dritte Person, die zu uns passt.
              <span className="italic" style={{ color: '#A8A29E' }}> We're looking for a third flatmate.</span>
            </p>
          </div>

          {/* Key facts */}
          <div
            className="mt-10 md:mt-0 grid grid-cols-2 gap-px rounded-2xl overflow-hidden text-center flex-shrink-0"
            style={{ background: '#C8BFB5', border: '1px solid #C8BFB5' }}
          >
            {[
              { value: '15,11', unit: 'm²', label: 'Zimmer' },
              { value: '396', unit: '€', label: 'pro Monat' },
              { value: '94,68', unit: 'm²', label: 'Gesamtwohnung' },
              { value: '3.', unit: 'OG', label: 'Stockwerk' },
            ].map(({ value, unit, label }) => (
              <div key={label} className="px-7 py-5" style={{ background: '#EDE8DF' }}>
                <div
                  className="font-serif leading-none"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#1C1917' }}
                >
                  {value}
                  <span className="text-base ml-0.5" style={{ color: '#B45309' }}>{unit}</span>
                </div>
                <div className="text-xs mt-1" style={{ color: '#A8A29E' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3" style={{ color: '#A8A29E' }}>
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1.5px solid #C8BFB5' }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: '#A8A29E', animation: 'scrollDot 1.8s ease-in-out infinite' }}
            />
          </div>
          <span className="text-xs" style={{ letterSpacing: '0.1em' }}>SCROLL</span>
        </div>

        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.3; }
          }
        `}</style>
      </section>

      {/* ─── DIE WOHNUNG / FLOOR PLAN ──────────────────────────── */}
      <section className="px-6 md:px-16 py-20 md:py-28" style={{ borderBottom: '1px solid #C8BFB5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="section-label mb-3">Grundriss · Floor Plan</p>
              <h2 className="font-serif text-4xl md:text-5xl" style={{ color: '#1C1917' }}>
                Die Wohnung
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#78716C' }}>
              94,68 m² Wohnfläche + 6,21 m² Balkon.
              Parkett in den Zimmern, Terrazzo im Bad.
              <br />
              <span className="italic" style={{ color: '#A8A29E' }}>
                Click any room to explore.
              </span>
            </p>
          </div>
          <FloorPlan />
        </div>
      </section>

      {/* ─── DAS ZIMMER ────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 py-20 md:py-28"
        style={{ background: '#EDE8DF', borderBottom: '1px solid #C8BFB5' }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-3">Das freie Zimmer · The Room</p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1">
              <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#1C1917' }}>
                15,11 m²<br />
                <span style={{ color: '#B45309' }}>Dein Zimmer.</span>
              </h2>
              <p className="text-base leading-relaxed max-w-md" style={{ color: '#57534E' }}>
                Helles, ruhiges Zimmer mit Parkettboden. Ausreichend Platz für
                ein Bett, Schreibtisch und Kasten. Die Wohnung liegt im dritten
                Obergeschoss, das Zimmer ist gut vom Rest der Wohnung isoliert.
              </p>
              <p className="text-sm leading-relaxed max-w-md mt-3 italic" style={{ color: '#A8A29E' }}>
                Bright and quiet room with parquet flooring. Enough space for a
                bed, desk, and wardrobe. Third floor, well-insulated from the
                rest of the apartment.
              </p>
            </div>

            <div className="w-full lg:w-80 grid grid-cols-2 gap-3">
              {[
                { icon: '◻', label: 'Fläche', value: '15,11 m²' },
                { icon: '▦', label: 'Boden', value: 'Parkett' },
                { icon: '◯', label: 'Stockwerk', value: '3. OG' },
                { icon: '▷', label: 'Ausrichtung', value: 'ruhig' },
                { icon: '◉', label: 'Verfügbar', value: 'sofort' },
                { icon: '€', label: 'All-in', value: '396 €/Mo' },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl p-4"
                  style={{ background: '#F5EFE6', border: '1px solid #C8BFB5' }}
                >
                  <div className="text-xs mb-2" style={{ color: '#A8A29E' }}>{label}</div>
                  <div className="font-serif text-lg font-bold" style={{ color: '#1C1917' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIE WG / ABOUT ────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-20 md:py-28" style={{ borderBottom: '1px solid #C8BFB5' }}>
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
                bio: 'Ich bin Berni. [Ergänze hier ein paar Sätze über dich – was du machst, was dir in einer WG wichtig ist.]',
                bioEn: "I'm Berni. [Add a few lines about yourself here.]",
              },
              {
                name: 'Marv',
                room: '25,79 m²',
                bio: 'Ich bin Marv. [Ergänze hier ein paar Sätze über dich – Hobbys, Arbeitszeiten, WG-Wünsche.]',
                bioEn: "I'm Marv. [Add a few lines about yourself here.]",
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
                [Beschreibe hier den WG-Alltag: Wie oft kocht ihr gemeinsam? Wie ist die Stimmung?
                Gibt es WG-Abende? Wie haltet ihr die Wohnung sauber?]
              </p>
              <p className="italic" style={{ color: '#A8A29E' }}>
                [Describe the flat vibe here: Do you cook together? House evenings? Cleaning arrangement?]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KOSTEN ────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 py-20 md:py-28"
        style={{ background: '#EDE8DF', borderBottom: '1px solid #C8BFB5' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-3">Kosten · Costs</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-2" style={{ color: '#1C1917' }}>
            Transparent.
          </h2>
          <p className="text-sm mb-10 italic" style={{ color: '#A8A29E' }}>
            All costs, no surprises.
          </p>

          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #C8BFB5' }}>
            {/* Header row */}
            <div
              className="grid grid-cols-4 px-6 py-3 text-xs font-semibold"
              style={{ background: '#C8BFB5', color: '#57534E', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <span>Posten</span>
              <span className="text-right">Berni</span>
              <span className="text-right">Marv</span>
              <span className="text-right font-bold" style={{ color: '#B45309' }}>Du</span>
            </div>

            {[
              { label: 'Zimmer (m²)', berni: '18,14', marv: '25,79', you: '15,11', note: 'm²', sub: true },
              { label: 'Miete kalt', berni: '200,38', marv: '248,15', you: '181,46', note: '€' },
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
                <span className="text-right">{berni} {note}</span>
                <span className="text-right">{marv} {note}</span>
                <span className="text-right font-semibold" style={{ color: sub ? '#A8A29E' : '#B45309' }}>
                  {you} {note}
                </span>
              </div>
            ))}

            {/* Total */}
            <div
              className="grid grid-cols-4 px-6 py-4 text-sm font-bold"
              style={{ background: '#1C1917', color: '#F5EFE6', borderTop: '2px solid #A09590' }}
            >
              <span className="font-serif text-base">Gesamt / month</span>
              <span className="text-right">414,92 €</span>
              <span className="text-right">462,69 €</span>
              <span className="text-right text-base" style={{ color: '#FDE68A' }}>396,00 €</span>
            </div>
          </div>

          <p className="text-xs mt-4" style={{ color: '#A8A29E' }}>
            * Miete wird nach Zimmergröße aufgeteilt. Alle anderen Kosten zu gleichen Teilen.
            <span className="italic"> · Rent split by room size. All other costs split equally.</span>
          </p>
        </div>
      </section>

      {/* ─── KONTAKT ───────────────────────────────────────────── */}
      <section id="kontakt" className="px-6 md:px-16 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Kontakt · Contact</p>
          <h2 className="font-serif leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#1C1917' }}>
            Klingt gut?
          </h2>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#57534E' }}>
            Schreib uns kurz wer du bist und warum du bei uns einziehen möchtest.
            Ein paar Zeilen reichen — wir freuen uns!
          </p>
          <p className="text-sm italic mb-10" style={{ color: '#A8A29E' }}>
            Tell us a bit about yourself and why you'd like to move in.
            A few lines is enough — we're happy to hear from you!
          </p>

          <a
            href="mailto:deine@email.at?subject=WG%20Wien%20–%20Zimmer%20anfrage"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#1C1917', color: '#F5EFE6', textDecoration: 'none' }}
          >
            E-Mail schreiben
            <span>→</span>
          </a>

          <div className="mt-16 pt-8" style={{ borderTop: '1px solid #C8BFB5' }}>
            <p className="text-xs" style={{ color: '#A8A29E' }}>
              WG Wien · 94,68 m² · 3 Personen · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
