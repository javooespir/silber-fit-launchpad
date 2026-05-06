/**
 * Animated stick-figure exercise illustrations.
 * Each animation uses inline CSS keyframes to animate body parts (groups) — smooth 2-3s loops.
 * The figure has a subtle "3D" look via gradient stroke + drop-shadow.
 */
import type { CSSProperties } from "react";

type ExerciseKey =
  | "squat"
  | "pushup"
  | "deadlift"
  | "shoulder-press"
  | "biceps-curl"
  | "pullup"
  | "burpee"
  | "lunge"
  | "plank"
  | "row";

const styles = `
@keyframes silber-squat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(14px)} }
@keyframes silber-knee-bend { 0%,100%{transform:translateY(0) scaleY(1)} 50%{transform:translateY(8px) scaleY(0.78)} }
@keyframes silber-pushup { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
@keyframes silber-deadlift { 0%,100%{transform:rotate(0deg) translateY(0)} 50%{transform:rotate(-22deg) translateY(10px)} }
@keyframes silber-press { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
@keyframes silber-curl { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-95deg)} }
@keyframes silber-pullup { 0%,100%{transform:translateY(8px)} 50%{transform:translateY(-10px)} }
@keyframes silber-burpee { 0%{transform:translateY(0)} 25%{transform:translateY(20px)} 50%{transform:translateY(20px)} 75%{transform:translateY(-12px)} 100%{transform:translateY(0)} }
@keyframes silber-lunge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
@keyframes silber-plank-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
@keyframes silber-row { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-12px)} }
@keyframes silber-breathe { 0%,100%{opacity:1} 50%{opacity:0.85} }
`;

const baseFigureStyle: CSSProperties = {
  filter: "drop-shadow(0 6px 8px rgba(230,57,70,0.35))",
};

const stroke = "url(#silberStroke)";
const sw = 4;
const lineProps = {
  stroke,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function Defs() {
  return (
    <defs>
      <linearGradient id="silberStroke" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="oklch(0.85 0.18 25)" />
        <stop offset="100%" stopColor="oklch(0.5 0.2 20)" />
      </linearGradient>
      <radialGradient id="silberHead" cx="0.4" cy="0.35" r="0.7">
        <stop offset="0%" stopColor="oklch(0.95 0.12 25)" />
        <stop offset="100%" stopColor="oklch(0.45 0.18 25)" />
      </radialGradient>
    </defs>
  );
}

function Head({ cx, cy, r = 9 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="url(#silberHead)" />;
}

function Floor() {
  return <line x1="20" y1="172" x2="180" y2="172" stroke="oklch(0.32 0.08 260 / 0.6)" strokeWidth="2" strokeDasharray="4 6" />;
}

export function ExerciseAnimation({ exercise }: { exercise: ExerciseKey }) {
  return (
    <div className="relative aspect-square w-full bg-gradient-to-br from-secondary/20 to-background rounded-xl border border-border overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <Defs />
        <Floor />
        {render(exercise)}
      </svg>
    </div>
  );
}

function render(ex: ExerciseKey) {
  switch (ex) {
    case "squat":
      return (
        <g style={{ ...baseFigureStyle, transformOrigin: "100px 130px", animation: "silber-squat 1.8s ease-in-out infinite" }}>
          <Head cx={100} cy={50} />
          <line x1="100" y1="59" x2="100" y2="110" {...lineProps} />
          <line x1="100" y1="75" x2="78" y2="62" {...lineProps} />
          <line x1="100" y1="75" x2="122" y2="62" {...lineProps} />
          <line x1="78" y1="62" x2="78" y2="50" {...lineProps} />
          <line x1="122" y1="62" x2="122" y2="50" {...lineProps} />
          {/* barbell */}
          <line x1="60" y1="50" x2="140" y2="50" stroke="oklch(0.9 0 0)" strokeWidth="3" strokeLinecap="round" />
          <rect x="55" y="44" width="10" height="12" fill="oklch(0.3 0 0)" />
          <rect x="135" y="44" width="10" height="12" fill="oklch(0.3 0 0)" />
          {/* legs */}
          <line x1="100" y1="110" x2="86" y2="150" {...lineProps} />
          <line x1="86" y1="150" x2="86" y2="172" {...lineProps} />
          <line x1="100" y1="110" x2="114" y2="150" {...lineProps} />
          <line x1="114" y1="150" x2="114" y2="172" {...lineProps} />
        </g>
      );

    case "pushup":
      return (
        <g style={{ ...baseFigureStyle, transformOrigin: "100px 140px", animation: "silber-pushup 1.6s ease-in-out infinite" }}>
          {/* body horizontal */}
          <Head cx={45} cy={130} />
          <line x1="54" y1="130" x2="160" y2="140" {...lineProps} />
          <line x1="60" y1="130" x2="60" y2="160" {...lineProps} />
          <line x1="60" y1="160" x2="60" y2="172" {...lineProps} />
          <line x1="150" y1="140" x2="158" y2="172" {...lineProps} />
          <line x1="120" y1="138" x2="120" y2="172" {...lineProps} />
        </g>
      );

    case "deadlift":
      return (
        <g style={baseFigureStyle}>
          <g style={{ transformOrigin: "100px 110px", animation: "silber-deadlift 2s ease-in-out infinite" }}>
            <Head cx={100} cy={50} />
            <line x1="100" y1="59" x2="100" y2="115" {...lineProps} />
            <line x1="100" y1="75" x2="80" y2="130" {...lineProps} />
            <line x1="100" y1="75" x2="120" y2="130" {...lineProps} />
            {/* bar */}
            <line x1="55" y1="138" x2="145" y2="138" stroke="oklch(0.9 0 0)" strokeWidth="3" strokeLinecap="round" />
            <rect x="50" y="132" width="10" height="12" fill="oklch(0.3 0 0)" />
            <rect x="140" y="132" width="10" height="12" fill="oklch(0.3 0 0)" />
          </g>
          <line x1="100" y1="115" x2="86" y2="150" {...lineProps} />
          <line x1="86" y1="150" x2="86" y2="172" {...lineProps} />
          <line x1="100" y1="115" x2="114" y2="150" {...lineProps} />
          <line x1="114" y1="150" x2="114" y2="172" {...lineProps} />
        </g>
      );

    case "shoulder-press":
      return (
        <g style={baseFigureStyle}>
          <Head cx={100} cy={60} />
          <line x1="100" y1="69" x2="100" y2="120" {...lineProps} />
          {/* arms - animated press */}
          <g style={{ transformOrigin: "100px 80px", animation: "silber-press 1.6s ease-in-out infinite" }}>
            <line x1="100" y1="80" x2="74" y2="60" {...lineProps} />
            <line x1="100" y1="80" x2="126" y2="60" {...lineProps} />
            <line x1="74" y1="60" x2="68" y2="42" {...lineProps} />
            <line x1="126" y1="60" x2="132" y2="42" {...lineProps} />
            <circle cx="64" cy="38" r="7" fill="oklch(0.3 0 0)" />
            <circle cx="136" cy="38" r="7" fill="oklch(0.3 0 0)" />
          </g>
          <line x1="100" y1="120" x2="88" y2="160" {...lineProps} />
          <line x1="88" y1="160" x2="88" y2="172" {...lineProps} />
          <line x1="100" y1="120" x2="112" y2="160" {...lineProps} />
          <line x1="112" y1="160" x2="112" y2="172" {...lineProps} />
        </g>
      );

    case "biceps-curl":
      return (
        <g style={baseFigureStyle}>
          <Head cx={100} cy={50} />
          <line x1="100" y1="59" x2="100" y2="120" {...lineProps} />
          <line x1="100" y1="120" x2="88" y2="160" {...lineProps} />
          <line x1="88" y1="160" x2="88" y2="172" {...lineProps} />
          <line x1="100" y1="120" x2="112" y2="160" {...lineProps} />
          <line x1="112" y1="160" x2="112" y2="172" {...lineProps} />
          {/* upper arms */}
          <line x1="100" y1="75" x2="78" y2="105" {...lineProps} />
          <line x1="100" y1="75" x2="122" y2="105" {...lineProps} />
          {/* forearms - curl animation */}
          <g style={{ transformOrigin: "78px 105px", animation: "silber-curl 1.8s ease-in-out infinite" }}>
            <line x1="78" y1="105" x2="78" y2="135" {...lineProps} />
            <circle cx="78" cy="142" r="7" fill="oklch(0.3 0 0)" />
          </g>
          <g style={{ transformOrigin: "122px 105px", animation: "silber-curl 1.8s ease-in-out infinite" }}>
            <line x1="122" y1="105" x2="122" y2="135" {...lineProps} />
            <circle cx="122" cy="142" r="7" fill="oklch(0.3 0 0)" />
          </g>
        </g>
      );

    case "pullup":
      return (
        <g style={baseFigureStyle}>
          {/* bar */}
          <line x1="40" y1="30" x2="160" y2="30" stroke="oklch(0.9 0 0)" strokeWidth="3" />
          <line x1="40" y1="20" x2="40" y2="30" stroke="oklch(0.6 0 0)" strokeWidth="2" />
          <line x1="160" y1="20" x2="160" y2="30" stroke="oklch(0.6 0 0)" strokeWidth="2" />
          <g style={{ transformOrigin: "100px 80px", animation: "silber-pullup 2s ease-in-out infinite" }}>
            <Head cx={100} cy={70} />
            <line x1="100" y1="79" x2="100" y2="135" {...lineProps} />
            {/* arms up */}
            <line x1="100" y1="82" x2="80" y2="55" {...lineProps} />
            <line x1="80" y1="55" x2="78" y2="32" {...lineProps} />
            <line x1="100" y1="82" x2="120" y2="55" {...lineProps} />
            <line x1="120" y1="55" x2="122" y2="32" {...lineProps} />
            {/* legs */}
            <line x1="100" y1="135" x2="88" y2="170" {...lineProps} />
            <line x1="100" y1="135" x2="112" y2="170" {...lineProps} />
          </g>
        </g>
      );

    case "burpee":
      return (
        <g style={{ ...baseFigureStyle, transformOrigin: "100px 140px", animation: "silber-burpee 2.4s ease-in-out infinite" }}>
          <Head cx={100} cy={60} />
          <line x1="100" y1="69" x2="100" y2="120" {...lineProps} />
          <line x1="100" y1="80" x2="78" y2="55" {...lineProps} />
          <line x1="100" y1="80" x2="122" y2="55" {...lineProps} />
          <line x1="78" y1="55" x2="72" y2="35" {...lineProps} />
          <line x1="122" y1="55" x2="128" y2="35" {...lineProps} />
          <line x1="100" y1="120" x2="86" y2="155" {...lineProps} />
          <line x1="86" y1="155" x2="86" y2="172" {...lineProps} />
          <line x1="100" y1="120" x2="114" y2="155" {...lineProps} />
          <line x1="114" y1="155" x2="114" y2="172" {...lineProps} />
        </g>
      );

    case "lunge":
      return (
        <g style={{ ...baseFigureStyle, transformOrigin: "100px 130px", animation: "silber-lunge 2s ease-in-out infinite" }}>
          <Head cx={100} cy={55} />
          <line x1="100" y1="64" x2="100" y2="115" {...lineProps} />
          <line x1="100" y1="78" x2="80" y2="105" {...lineProps} />
          <line x1="100" y1="78" x2="120" y2="105" {...lineProps} />
          {/* front leg bent */}
          <line x1="100" y1="115" x2="135" y2="145" {...lineProps} />
          <line x1="135" y1="145" x2="135" y2="172" {...lineProps} />
          {/* back leg extended */}
          <line x1="100" y1="115" x2="68" y2="160" {...lineProps} />
          <line x1="68" y1="160" x2="55" y2="172" {...lineProps} />
        </g>
      );

    case "plank":
      return (
        <g style={{ ...baseFigureStyle, transformOrigin: "100px 140px", animation: "silber-plank-bob 2.4s ease-in-out infinite" }}>
          <Head cx={45} cy={130} />
          <line x1="54" y1="130" x2="160" y2="140" {...lineProps} />
          {/* forearms on floor */}
          <line x1="50" y1="135" x2="50" y2="170" {...lineProps} />
          <line x1="50" y1="170" x2="70" y2="170" {...lineProps} />
          {/* legs */}
          <line x1="160" y1="140" x2="170" y2="170" {...lineProps} />
          <line x1="135" y1="138" x2="135" y2="170" {...lineProps} />
        </g>
      );

    case "row":
      return (
        <g style={baseFigureStyle}>
          <Head cx={70} cy={70} />
          <line x1="78" y1="73" x2="155" y2="100" {...lineProps} />
          {/* arms - animated row */}
          <g style={{ transformOrigin: "120px 90px", animation: "silber-row 1.6s ease-in-out infinite" }}>
            <line x1="120" y1="88" x2="160" y2="105" {...lineProps} />
            <circle cx="165" cy="106" r="7" fill="oklch(0.3 0 0)" />
            <line x1="155" y1="100" x2="170" y2="115" stroke="oklch(0.9 0 0)" strokeWidth="3" />
          </g>
          {/* legs */}
          <line x1="155" y1="100" x2="155" y2="135" {...lineProps} />
          <line x1="155" y1="135" x2="135" y2="170" {...lineProps} />
          <line x1="155" y1="135" x2="170" y2="170" {...lineProps} />
        </g>
      );
  }
}
