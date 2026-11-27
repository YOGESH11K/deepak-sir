import type { ProjectVisualId } from "../data/projects";

/**
 * Original, hand-drawn technical artwork (no stock imagery).
 * SVG strokes draw in when the parent gains `.is-visible`.
 */

const stroke = "var(--accent)";
const dim = "var(--fg-dim)";
const faint = "var(--line)";

/* ------------------------------ PROJECT 01 ------------------------------- */
function BldcVisual() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="PCB layout of a high-power BLDC motor driver">
      <title>High-power BLDC motor driver PCB</title>
      {/* board outline */}
      <rect className="draw" pathLength={1} x="30" y="28" width="340" height="244" rx="6" fill="none" stroke={stroke} strokeWidth="1.4" />
      {/* mounting holes */}
      {[[44, 42], [356, 42], [44, 258], [356, 258]].map(([x, y], i) => (
        <circle key={i} className="draw" pathLength={1} cx={x} cy={y} r="4.5" fill="none" stroke={dim} strokeWidth="1" />
      ))}
      {/* central driver IC */}
      <rect className="draw" pathLength={1} x="150" y="108" width="100" height="84" fill="none" stroke={stroke} strokeWidth="1.4" />
      <line className="draw" pathLength={1} x1="150" y1="124" x2="138" y2="124" stroke={stroke} strokeWidth="1" />
      <line className="draw" pathLength={1} x1="250" y1="124" x2="262" y2="124" stroke={stroke} strokeWidth="1" />
      <text x="200" y="152" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">BLDC</text>
      <text x="200" y="165" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">DRIVER</text>
      {/* MOSFETs */}
      {[[70, 96], [330, 96], [70, 196], [330, 196], [70, 146], [330, 146]].map(([x, y], i) => (
        <rect key={i} className="draw" pathLength={1} x={x - 12} y={y - 14} width="24" height="28" fill="none" stroke={dim} strokeWidth="1" />
      ))}
      {/* capacitor bank */}
      {[[110, 70], [130, 70], [150, 70]].map(([x, y], i) => (
        <g key={i}>
          <line className="draw" pathLength={1} x1={x} y1={y} x2={x} y2={y + 14} stroke={dim} strokeWidth="1.2" />
          <line className="draw" pathLength={1} x1={x - 5} y1={y + 14} x2={x + 5} y2={y + 14} stroke={stroke} strokeWidth="1.2" />
          <line className="draw" pathLength={1} x1={x - 5} y1={y + 19} x2={x + 5} y2={y + 19} stroke={stroke} strokeWidth="1.2" />
          <line className="draw" pathLength={1} x1={x} y1={y + 19} x2={x} y2={y + 30} stroke={dim} strokeWidth="1.2" />
        </g>
      ))}
      {/* power input */}
      <rect className="draw" pathLength={1} x="300" y="58" width="46" height="20" fill="none" stroke={stroke} strokeWidth="1.2" />
      <text x="323" y="71" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={dim}>24–33.6V</text>
      {/* output phases */}
      {[[180, 240], [200, 240], [220, 240]].map(([x, y], i) => (
        <g key={i}>
          <line className="draw" pathLength={1} x1={x} y1="192" x2={x} y2={y} stroke={stroke} strokeWidth="1.6" />
          <circle cx={x} cy={y} r="3" fill={stroke} />
        </g>
      ))}
      {/* high-current traces */}
      <path className="draw draw--slow" pathLength={1} d="M70 110 H150" fill="none" stroke={stroke} strokeWidth="2.4" />
      <path className="draw draw--slow" pathLength={1} d="M250 110 H330" fill="none" stroke={stroke} strokeWidth="2.4" />
      <path className="draw draw--slow" pathLength={1} d="M70 160 H150" fill="none" stroke={stroke} strokeWidth="2.4" />
      <path className="draw draw--slow" pathLength={1} d="M250 160 H330" fill="none" stroke={stroke} strokeWidth="2.4" />
      <path className="draw draw--slow" pathLength={1} d="M58 96 V196" fill="none" stroke={stroke} strokeWidth="2.4" />
      <path className="draw draw--slow" pathLength={1} d="M342 96 V196" fill="none" stroke={stroke} strokeWidth="2.4" />
      {/* silkscreen */}
      <text x="36" y="24" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">BLDC-8S · 20A · REV A</text>
    </svg>
  );
}

/* ------------------------------ PROJECT 02 ------------------------------- */
function RoverVisual() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="CAD view of a solar-powered lake cleaning rover">
      <title>Solar-powered lake cleaning rover</title>
      {/* water lines */}
      <path className="draw draw--slow" pathLength={1} d="M0 236 q 30 -8 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0" fill="none" stroke={faint} strokeWidth="1" />
      <path className="draw draw--slow" pathLength={1} d="M0 252 q 30 -8 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0" fill="none" stroke={faint} strokeWidth="1" />
      <path className="draw draw--slow" pathLength={1} d="M0 268 q 30 -8 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0" fill="none" stroke={faint} strokeWidth="1" />
      {/* hull */}
      <path className="draw" pathLength={1} d="M70 196 h240 l24 22 h-300 z" fill="none" stroke={stroke} strokeWidth="1.6" />
      <line className="draw" pathLength={1} x1="70" y1="196" x2="80" y2="218" stroke={dim} strokeWidth="1" />
      <line className="draw" pathLength={1} x1="330" y1="196" x2="320" y2="218" stroke={dim} strokeWidth="1" />
      {/* solar panel on deck */}
      <rect className="draw" pathLength={1} x="96" y="150" width="208" height="42" fill="none" stroke={stroke} strokeWidth="1.4" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} className="draw" pathLength={1} x1={96 + i * 26} y1="150" x2={96 + i * 26} y2="192" stroke={faint} strokeWidth="1" />
      ))}
      <line className="draw" pathLength={1} x1="96" y1="171" x2="304" y2="171" stroke={faint} strokeWidth="1" />
      {/* mast + radio */}
      <line className="draw" pathLength={1} x1="200" y1="150" x2="200" y2="120" stroke={dim} strokeWidth="1.2" />
      <path className="draw" pathLength={1} d="M192 122 q 8 -8 16 0" fill="none" stroke={stroke} strokeWidth="1" />
      <path className="draw" pathLength={1} d="M186 116 q 14 -12 28 0" fill="none" stroke={stroke} strokeWidth="1" />
      <text x="214" y="118" fontSize="8" fontFamily="var(--font-mono)" fill={dim}>2.4GHz</text>
      {/* collection basket at stern */}
      <path className="draw" pathLength={1} d="M300 196 v-22 h34 v22" fill="none" stroke={stroke} strokeWidth="1.4" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} className="draw" pathLength={1} x1={304 + i * 8} y1="174" x2={304 + i * 8} y2="196" stroke={faint} strokeWidth="1" />
      ))}
      {/* drive wheels */}
      <circle className="draw" pathLength={1} cx="110" cy="218" r="12" fill="none" stroke={dim} strokeWidth="1.2" />
      <circle className="draw" pathLength={1} cx="300" cy="218" r="12" fill="none" stroke={dim} strokeWidth="1.2" />
      {/* floating waste */}
      <rect x="150" y="226" width="9" height="6" fill="none" stroke={dim} strokeWidth="1" transform="rotate(-12 154 229)" />
      <circle cx="240" cy="230" r="3.5" fill="none" stroke={dim} strokeWidth="1" />
      <text x="36" y="24" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">SURFACE VESSEL · SOLAR · RC</text>
    </svg>
  );
}

/* ------------------------------ PROJECT 03 ------------------------------- */
function UavVisual() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Wireframe CAD view of a long-range UAV airframe">
      <title>Long-range UAV airframe</title>
      {/* center body */}
      <ellipse className="draw" pathLength={1} cx="200" cy="150" rx="34" ry="18" fill="none" stroke={stroke} strokeWidth="1.4" />
      <line className="draw" pathLength={1} x1="166" y1="150" x2="234" y2="150" stroke={faint} strokeWidth="1" />
      {/* arms */}
      <line className="draw" pathLength={1} x1="178" y1="138" x2="86" y2="84" stroke={stroke} strokeWidth="1.4" />
      <line className="draw" pathLength={1} x1="222" y1="138" x2="314" y2="84" stroke={stroke} strokeWidth="1.4" />
      <line className="draw" pathLength={1} x1="178" y1="162" x2="86" y2="216" stroke={stroke} strokeWidth="1.4" />
      <line className="draw" pathLength={1} x1="222" y1="162" x2="314" y2="216" stroke={stroke} strokeWidth="1.4" />
      {/* motors + props */}
      {[[86, 84], [314, 84], [86, 216], [314, 216]].map(([x, y], i) => (
        <g key={i}>
          <circle className="draw" pathLength={1} cx={x} cy={y} r="9" fill="none" stroke={dim} strokeWidth="1.2" />
          <ellipse className="draw draw--slow" pathLength={1} cx={x} cy={y} rx="34" ry="5" fill="none" stroke={stroke} strokeWidth="1" opacity="0.6" />
        </g>
      ))}
      {/* payload / camera */}
      <rect className="draw" pathLength={1} x="188" y="172" width="24" height="12" fill="none" stroke={dim} strokeWidth="1" />
      <circle className="draw" pathLength={1} cx="200" cy="178" r="3" fill="none" stroke={stroke} strokeWidth="1" />
      {/* dimension lines */}
      <line className="draw draw--slow" pathLength={1} x1="86" y1="244" x2="314" y2="244" stroke={faint} strokeWidth="1" />
      <line className="draw draw--slow" pathLength={1} x1="86" y1="238" x2="86" y2="250" stroke={faint} strokeWidth="1" />
      <line className="draw draw--slow" pathLength={1} x1="314" y1="238" x2="314" y2="250" stroke={faint} strokeWidth="1" />
      <text x="200" y="258" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={dim}>WHEELBASE</text>
      {/* flight controller */}
      <rect className="draw" pathLength={1} x="186" y="140" width="28" height="18" fill="none" stroke={stroke} strokeWidth="1" />
      <text x="36" y="24" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">UAV · LONG-RANGE · CFRP</text>
    </svg>
  );
}

/* ------------------------------ PROJECT 04 ------------------------------- */
function BmsVisual() {
  const cells = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Schematic of a balance-charging battery management system">
      <title>Battery management system schematic</title>
      {/* cell stack */}
      <g>
        {cells.map((i) => {
          const y = 56 + i * 30;
          return (
            <g key={i}>
              <line className="draw" pathLength={1} x1="70" y1={y} x2="110" y2={y} stroke={dim} strokeWidth="1.4" />
              {/* cell symbol */}
              <line className="draw" pathLength={1} x1="110" y1={y - 8} x2="110" y2={y + 8} stroke={stroke} strokeWidth="2" />
              <line className="draw" pathLength={1} x1="118" y1={y - 4} x2="118" y2={y + 4} stroke={dim} strokeWidth="1.4" />
              <line className="draw" pathLength={1} x1="118" y1={y} x2="150" y2={y} stroke={dim} strokeWidth="1.4" />
              {/* node */}
              <circle cx="150" cy={y} r="2.4" fill={stroke} />
              <text x="56" y={y + 3} fontSize="8" fontFamily="var(--font-mono)" fill={dim}>C{i + 1}</text>
              {/* balancing shunt to bus */}
              <path className="draw draw--slow" pathLength={1} d={`M150 ${y} h30`} fill="none" stroke={faint} strokeWidth="1" />
              <rect className="draw" pathLength={1} x="180" y={y - 5} width="16" height="10" fill="none" stroke={dim} strokeWidth="1" />
              <path className="draw draw--slow" pathLength={1} d={`M196 ${y} h24`} fill="none" stroke={faint} strokeWidth="1" />
            </g>
          );
        })}
      </g>
      {/* balance bus */}
      <line className="draw" pathLength={1} x1="220" y1="56" x2="220" y2="226" stroke={stroke} strokeWidth="1.4" />
      {/* protection MOSFET */}
      <rect className="draw" pathLength={1} x="248" y="118" width="30" height="34" fill="none" stroke={stroke} strokeWidth="1.4" />
      <text x="263" y="139" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={dim}>Q</text>
      <line className="draw" pathLength={1} x1="220" y1="135" x2="248" y2="135" stroke={dim} strokeWidth="1.2" />
      <line className="draw" pathLength={1} x1="278" y1="135" x2="300" y2="135" stroke={dim} strokeWidth="1.2" />
      {/* controller */}
      <rect className="draw" pathLength={1} x="248" y="180" width="78" height="46" fill="none" stroke={dim} strokeWidth="1.2" />
      <text x="287" y="199" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={dim}>BMS</text>
      <text x="287" y="212" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={dim}>PROTECT</text>
      {/* pack output */}
      <line className="draw" pathLength={1} x1="300" y1="135" x2="344" y2="135" stroke={stroke} strokeWidth="1.6" />
      <circle cx="348" cy="135" r="3" fill={stroke} />
      <text x="348" y="126" textAnchor="end" fontSize="8" fontFamily="var(--font-mono)" fill={dim}>PACK+</text>
      <text x="36" y="24" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">BMS · BALANCE-CHARGE · Li-ION</text>
    </svg>
  );
}

/* ------------------------------ PROJECT 05 ------------------------------- */
function RoboxVisual() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Exploded view of the ROBOX robotics coding kit hardware">
      <title>ROBOX robotics coding kit</title>
      {/* robot body */}
      <rect className="draw" pathLength={1} x="110" y="70" width="180" height="150" rx="14" fill="none" stroke={stroke} strokeWidth="1.6" />
      {/* ESP32-S3 */}
      <rect className="draw" pathLength={1} x="150" y="104" width="100" height="56" fill="none" stroke={dim} strokeWidth="1.2" />
      <text x="200" y="128" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={dim}>ESP32-S3</text>
      <text x="200" y="142" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill={dim}>MCU</text>
      {/* pin header */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} className="draw" pathLength={1} x={118 + i * 8} y="78" width="4" height="10" fill={faint} stroke="none" />
      ))}
      {/* sensors + LEDs */}
      <circle className="draw" pathLength={1} cx="138" cy="184" r="7" fill="none" stroke={dim} strokeWidth="1" />
      <circle className="draw" pathLength={1} cx="262" cy="184" r="7" fill="none" stroke={dim} strokeWidth="1" />
      <circle cx="172" cy="92" r="3" fill={stroke} />
      <circle cx="228" cy="92" r="3" fill={stroke} />
      {/* wheels */}
      <rect className="draw" pathLength={1} x="84" y="196" width="22" height="34" rx="4" fill="none" stroke={dim} strokeWidth="1.2" />
      <rect className="draw" pathLength={1} x="294" y="196" width="22" height="34" rx="4" fill="none" stroke={dim} strokeWidth="1.2" />
      {/* programming blocks below */}
      {[[96, 248, "WHEN"], [168, 248, "MOVE"], [240, 248, "LOOP"]].map(([x, y, t], i) => (
        <g key={i}>
          <rect className="draw" pathLength={1} x={x as number} y={y as number} width="62" height="26" rx="4" fill="none" stroke={stroke} strokeWidth="1.2" />
          <text x={(x as number) + 31} y={(y as number) + 17} textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={dim}>{t as string}</text>
        </g>
      ))}
      <path className="draw draw--slow" pathLength={1} d="M158 261 h10 M230 261 h10" fill="none" stroke={stroke} strokeWidth="1.2" />
      <text x="36" y="24" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">ROBOX · BLOCK CODING · STEM</text>
    </svg>
  );
}

/* ------------------------------ PROJECT 06 ------------------------------- */
function TapbotVisual() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Technical view of TAPBOT, a screenless button-programmable robot">
      <title>TAPBOT screenless robot</title>
      {/* shell */}
      <rect className="draw" pathLength={1} x="120" y="56" width="160" height="188" rx="28" fill="none" stroke={stroke} strokeWidth="1.6" />
      {/* no screen — indicate blank face */}
      <line className="draw draw--slow" pathLength={1} x1="150" y1="96" x2="250" y2="96" stroke={faint} strokeWidth="1" strokeDasharray="3 4" />
      {/* speaker */}
      {[0, 1, 2].map((i) => (
        <line key={i} className="draw" pathLength={1} x1={182 + i * 12} y1="112" x2={182 + i * 12} y2="124" stroke={dim} strokeWidth="1.4" />
      ))}
      {/* big physical buttons */}
      <circle className="draw" pathLength={1} cx="172" cy="170" r="22" fill="none" stroke={stroke} strokeWidth="1.6" />
      <circle className="draw" pathLength={1} cx="228" cy="170" r="22" fill="none" stroke={stroke} strokeWidth="1.6" />
      <circle className="draw" pathLength={1} cx="172" cy="170" r="12" fill="none" stroke={dim} strokeWidth="1" />
      <circle className="draw" pathLength={1} cx="228" cy="170" r="12" fill="none" stroke={dim} strokeWidth="1" />
      <text x="172" y="174" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={dim}>A</text>
      <text x="228" y="174" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill={dim}>B</text>
      {/* bottom interaction button */}
      <rect className="draw" pathLength={1} x="180" y="212" width="40" height="14" rx="7" fill="none" stroke={dim} strokeWidth="1.2" />
      {/* interaction arrows */}
      <path className="draw draw--slow" pathLength={1} d="M96 150 H116" fill="none" stroke={stroke} strokeWidth="1.2" />
      <path className="draw draw--slow" pathLength={1} d="M88 150 l6 -4 v8 z" fill={stroke} stroke="none" />
      <path className="draw draw--slow" pathLength={1} d="M304 150 H284" fill="none" stroke={stroke} strokeWidth="1.2" />
      <path className="draw draw--slow" pathLength={1} d="M312 150 l-6 -4 v8 z" fill={stroke} stroke="none" />
      <text x="200" y="272" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill={dim}>SCREENLESS · PROGRAM BY TAPPING</text>
      <text x="36" y="24" fontSize="8" fontFamily="var(--font-mono)" fill={dim} letterSpacing="1">TAPBOT · STORYTELLING · KIDS</text>
    </svg>
  );
}

/* ------------------------------------------------------------------------- */

const VISUALS: Record<ProjectVisualId, () => React.ReactNode> = {
  bldc: BldcVisual,
  rover: RoverVisual,
  uav: UavVisual,
  bms: BmsVisual,
  robox: RoboxVisual,
  tapbot: TapbotVisual,
};

export function ProjectVisual({ id }: { id: ProjectVisualId }) {
  const Render = VISUALS[id];
  return <Render />;
}
