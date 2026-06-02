'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Room {
  id: string
  label: string
  labelEn: string
  area: number
  type: 'offered' | 'private' | 'shared' | 'balkon' | 'entry'
  resident?: string
  x: number
  y: number
  w: number
  h: number
  // L-shaped or non-rectangular rooms
  polygon?: string  // SVG path data
  labelX?: number   // text anchor override
  labelY?: number
  info: string
  infoEn: string
  floor?: string
}

const ROOMS: Room[] = [
  {
    id: 'balkon',
    label: 'Balkon',
    labelEn: 'Balcony',
    area: 6.21,
    type: 'balkon',
    x: 12, y: 12, w: 240, h: 58,
    info: 'Gemeinsamer Balkon, sonnige Seite',
    infoEn: 'Shared balcony, sunny side',
  },
  {
    id: 'wohnzimmer',
    label: 'Zimmer',
    labelEn: 'Room',
    area: 25.79,
    type: 'private',
    resident: 'Marvin',
    x: 12, y: 76, w: 360, h: 210,
    info: 'Privatzimmer: Marvin',
    infoEn: 'Private room: Marvin',
    floor: 'Parkett',
  },
  {
    id: 'kueche',
    label: 'Küche',
    labelEn: 'Kitchen',
    area: 8.40,
    type: 'shared',
    x: 12, y: 292, w: 168, h: 128,
    info: 'Gemeinschaftsküche, voll ausgestattet',
    infoEn: 'Shared kitchen, fully equipped',
    floor: 'PVC',
  },
  {
    id: 'vorraum',
    label: 'Vorraum',
    labelEn: 'Hallway',
    area: 16.14,
    type: 'shared',
    // L-shape: wide (x=186-460, y=292-420) + narrow right (x=460-662, y=362-420)
    // + short stub south (x=526-556, y=420-506): ends at Bad door (south), Klo door is east
    polygon: 'M 186,292 H 460 V 362 H 662 V 420 H 556 V 506 H 526 V 420 H 186 Z',
    x: 186, y: 292, w: 274, h: 128,
    labelX: 323,  // center of wide part
    labelY: 350,
    info: 'Zentraler Eingangsbereich',
    infoEn: 'Central entry hallway',
    floor: 'PVC',
  },
  {
    id: 'abstellkammerl',
    label: 'Abst.',
    labelEn: 'Storage',
    area: 1.44,
    type: 'shared',
    x: 466, y: 292, w: 90, h: 64,
    info: 'Abstellkammerl: Stauraum für alle',
    infoEn: 'Storage room for everyone',
  },
  {
    id: 'klo',
    label: 'Klo',
    labelEn: 'WC',
    area: 1.56,
    type: 'shared',
    // east of stub (Klotür östlich), same height as stub, stacked above Bad
    x: 562, y: 426, w: 100, h: 80,
    info: 'Separates WC',
    infoEn: 'Separate toilet',
    floor: 'Terrazzo',
  },
  {
    id: 'schlafzimmer',
    label: 'Zimmer',
    labelEn: 'Room',
    area: 18.14,
    type: 'private',
    resident: 'Berni',
    x: 12, y: 426, w: 268, h: 148,
    info: 'Privatzimmer: Berni',
    infoEn: 'Private room: Berni',
    floor: 'Parkett',
  },
  {
    id: 'kinderzimmer',
    label: 'Dein Zimmer',
    labelEn: 'Your Room',
    area: 15.11,
    type: 'offered',
    x: 286, y: 426, w: 234, h: 148,
    info: 'Helles Zimmer mit Parkettboden, ab sofort frei!',
    infoEn: 'Bright room with parquet floor, available now!',
    floor: 'Parkett',
  },
  {
    id: 'bad',
    label: 'Bad',
    labelEn: 'Bathroom',
    area: 8.10,
    type: 'shared',
    // south of stub end (Badtür südlich), full right-column width, below Klo
    x: 526, y: 512, w: 142, h: 62,
    info: 'Bad mit Terrazzoboden und Badewanne',
    infoEn: 'Bathroom with terrazzo floor and bathtub',
    floor: 'Terrazzo',
  },
]

const COLORS = {
  offered: { base: '#FEF3C7', hover: '#FDE68A', stroke: '#D97706', strokeSel: '#B45309' },
  private: { base: '#EAE4DC', hover: '#DED6CB', stroke: '#A89D94', strokeSel: '#78716C' },
  shared:  { base: '#EDE8DF', hover: '#E5DED3', stroke: '#C8BFB5', strokeSel: '#9B8E84' },
  balkon:  { base: '#D8EDD9', hover: '#C3E3C6', stroke: '#7BAD83', strokeSel: '#4A7C6B' },
  entry:   { base: 'transparent', hover: 'transparent', stroke: '#C8BFB5', strokeSel: '#A8A29E' },
}

const TYPE_LABELS: Record<Room['type'], string> = {
  offered: 'Verfügbar · Available',
  private: 'Privatzimmer',
  shared: 'Gemeinschaftsraum',
  balkon: 'Außenbereich',
  entry: 'Eingang',
}

export default function FloorPlan() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<string>('kinderzimmer')

  const selectedRoom = ROOMS.find(r => r.id === selected) ?? null

  return (
    <div className="flex flex-col xl:flex-row gap-8 items-start w-full">
      {/* SVG */}
      <div className="w-full xl:flex-1 min-w-0">
        <svg viewBox="0 0 680 590" className="w-full h-auto select-none" style={{ maxHeight: 500 }}>
          {/* Apartment footprint background */}
          <path
            d="M6,70 H374 V288 H668 V580 H6 Z"
            fill="#E8E2D9"
            stroke="#A09590"
            strokeWidth="2"
          />
          {/* Balkon background */}
          <rect x="6" y="6" width="252" height="70" fill="#C8DDCA" stroke="#A09590" strokeWidth="2" />

          {/* Entry door on right wall of narrow Vorraum */}
          <line x1="668" y1="362" x2="668" y2="420" stroke="#78716C" strokeWidth="3" strokeLinecap="round" />
          {/* Wohnungstür label inside stub */}
          <text x="541" y="466" textAnchor="middle" fontSize="7" fontFamily="var(--font-inter, sans-serif)" fill="#A8A29E" transform="rotate(-90 541 466)">Eingang</text>

          {/* Rooms */}
          {ROOMS.map((room) => {
            const c = COLORS[room.type]
            const isHov = hovered === room.id
            const isSel = selected === room.id
            const fillColor = isHov ? c.hover : c.base
            const strokeColor = isSel ? c.strokeSel : c.stroke
            const strokeW = isSel ? 2.5 : 1.5
            const small = room.w < 110

            // Text anchor: use override coords or fall back to rect center
            const textX = room.labelX ?? (room.x + room.w / 2)
            const textY = room.labelY ?? (room.y + room.h / 2)

            return (
              <g
                key={room.id}
                onMouseEnter={() => setHovered(room.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(room.id)}
                style={{ cursor: 'pointer' }}
              >
                {room.polygon ? (
                  <motion.path
                    d={room.polygon}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeW}
                    animate={{ fill: fillColor, stroke: strokeColor }}
                    transition={{ duration: 0.12 }}
                  />
                ) : (
                  <motion.rect
                    x={room.x} y={room.y} width={room.w} height={room.h}
                    rx={2}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeW}
                    animate={{ fill: fillColor, stroke: strokeColor }}
                    transition={{ duration: 0.12 }}
                  />
                )}

                {/* Room name */}
                <text
                  x={textX}
                  y={textY + (room.type === 'offered' ? 10 : -4)}
                  textAnchor="middle"
                  fontSize={small ? 9 : room.type === 'offered' ? 12 : 11}
                  fontFamily="var(--font-inter, sans-serif)"
                  fontWeight={room.type === 'offered' ? '600' : '500'}
                  fill={room.type === 'offered' ? '#92400E' : '#1C1917'}
                  style={{ pointerEvents: 'none' }}
                >
                  {room.label}
                </text>

                {/* Area */}
                <text
                  x={textX}
                  y={textY + (room.type === 'offered' ? 26 : 12)}
                  textAnchor="middle"
                  fontSize={small ? 8 : 10}
                  fontFamily="var(--font-inter, sans-serif)"
                  fill="#78716C"
                  style={{ pointerEvents: 'none' }}
                >
                  {room.area.toFixed(2).replace('.', ',')} m²
                </text>

                {/* Resident label for private rooms */}
                {room.type === 'private' && room.resident && !small && (
                  <text
                    x={textX}
                    y={textY + 26}
                    textAnchor="middle"
                    fontSize="9"
                    fontFamily="var(--font-inter, sans-serif)"
                    fill="#A8A29E"
                    style={{ pointerEvents: 'none' }}
                  >
                    {room.resident}
                  </text>
                )}

                {/* FREI badge for offered room */}
                {room.type === 'offered' && (
                  <g style={{ pointerEvents: 'none' }}>
                    <rect
                      x={room.x + room.w / 2 - 22}
                      y={room.y + 12}
                      width={44} height={18}
                      rx={9}
                      fill="#D97706"
                    />
                    <text
                      x={room.x + room.w / 2}
                      y={room.y + 25}
                      textAnchor="middle"
                      fontSize="9"
                      fontFamily="var(--font-inter, sans-serif)"
                      fontWeight="700"
                      fill="white"
                      letterSpacing="1.5"
                    >
                      FREI
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
          {(
            [
              { color: '#FEF3C7', border: '#D97706', label: 'Freies Zimmer' },
              { color: '#EAE4DC', border: '#A89D94', label: 'Belegt' },
              { color: '#EDE8DF', border: '#C8BFB5', label: 'Gemeinschaft' },
              { color: '#D8EDD9', border: '#7BAD83', label: 'Balkon' },
            ] as const
          ).map(({ color, border, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-xs" style={{ color: '#78716C' }}>
              <div style={{ width: 12, height: 12, background: color, border: `1.5px solid ${border}`, borderRadius: 2, flexShrink: 0 }} />
              {label}
            </div>
          ))}
          <div className="text-xs ml-auto" style={{ color: '#A8A29E' }}>
            Zimmer anklicken für Details
          </div>
        </div>
      </div>

      {/* Info panel */}
      <div className="w-full xl:w-60 flex-shrink-0">
        <AnimatePresence mode="wait">
          {selectedRoom && (
            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl p-5"
              style={{ background: '#EDE8DF', border: '1px solid #C8BFB5' }}
            >
              <p className="section-label mb-2">{TYPE_LABELS[selectedRoom.type]}</p>

              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-xl leading-tight font-serif" style={{ color: '#1C1917' }}>
                  {selectedRoom.labelEn !== selectedRoom.label
                    ? <>{selectedRoom.label}<br /><span className="text-base" style={{ color: '#78716C' }}>{selectedRoom.labelEn}</span></>
                    : selectedRoom.label}
                </h3>
                {selectedRoom.type === 'offered' && (
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 mt-0.5"
                    style={{ background: '#D97706', color: 'white' }}
                  >
                    FREI
                  </span>
                )}
              </div>

              <p className="text-2xl font-bold font-serif mt-2" style={{ color: '#B45309' }}>
                {selectedRoom.area.toFixed(2).replace('.', ',')} m²
              </p>

              {selectedRoom.floor && (
                <p className="text-xs mt-1 mb-3" style={{ color: '#A8A29E' }}>
                  Boden: {selectedRoom.floor}
                </p>
              )}

              <p className="text-sm leading-relaxed mt-3" style={{ color: '#57534E' }}>
                {selectedRoom.info}
              </p>
              <p className="text-xs leading-relaxed mt-1 italic" style={{ color: '#A8A29E' }}>
                {selectedRoom.infoEn}
              </p>

              {selectedRoom.type === 'offered' && (
                <>
                  <div
                    className="mt-4 pt-4 space-y-1.5 text-sm"
                    style={{ borderTop: '1px solid #C8BFB5', color: '#57534E' }}
                  >
                    <div className="flex justify-between">
                      <span>Miete kalt</span>
                      <span className="font-medium">190,10 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BK + Heizung</span>
                      <span className="font-medium">156,85 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nebenkosten</span>
                      <span className="font-medium">57,69 €</span>
                    </div>
                    <div
                      className="flex justify-between pt-2 font-semibold"
                      style={{ borderTop: '1px solid #C8BFB5', color: '#1C1917' }}
                    >
                      <span>Gesamt</span>
                      <span style={{ color: '#B45309' }}>404,64 €</span>
                    </div>
                  </div>
                  <a
                    href="#kontakt"
                    className="block w-full text-center mt-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{ background: '#1C1917', color: '#F5EFE6' }}
                  >
                    Zimmer anfragen →
                  </a>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
