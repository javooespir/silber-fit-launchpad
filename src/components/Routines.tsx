import { useState } from "react";
import { ExerciseAnimation } from "./ExerciseAnimation";

type Exercise = {
  name: string;
  key: Parameters<typeof ExerciseAnimation>[0]["exercise"];
  sets: string;
  reps: string;
  rest: string;
  desc: string;
};

type Routine = {
  id: string;
  title: string;
  level: string;
  duration: string;
  freq: string;
  difficulty: number;
  color: "red" | "blue";
  exercises: Exercise[];
};

const routines: Routine[] = [
  {
    id: "principiante",
    title: "Principiante",
    level: "PRINCIPIANTE",
    duration: "45 min",
    freq: "3x semana",
    difficulty: 1,
    color: "red",
    exercises: [
      { name: "Sentadilla", key: "squat", sets: "3", reps: "12", rest: "60s", desc: "Pies al ancho de hombros, bajá controlado, espalda recta." },
      { name: "Flexión de brazos", key: "pushup", sets: "3", reps: "8-10", rest: "60s", desc: "Cuerpo alineado, codos a 45°, podés apoyar rodillas." },
      { name: "Plancha", key: "plank", sets: "3", reps: "30s", rest: "45s", desc: "Glúteos firmes, no hundir cadera. Mirada al piso." },
    ],
  },
  {
    id: "intermedio",
    title: "Intermedio",
    level: "INTERMEDIO",
    duration: "60 min",
    freq: "4x semana",
    difficulty: 2,
    color: "blue",
    exercises: [
      { name: "Peso muerto", key: "deadlift", sets: "4", reps: "10", rest: "90s", desc: "Cadera atrás, espalda neutra, empujá el piso con los pies." },
      { name: "Press de hombro", key: "shoulder-press", sets: "4", reps: "10", rest: "75s", desc: "Core firme, no arquear la espalda al subir." },
      { name: "Estocadas", key: "lunge", sets: "3", reps: "12 c/pierna", rest: "60s", desc: "Rodilla delantera alineada al pie, tronco erguido." },
      { name: "Remo", key: "row", sets: "4", reps: "10", rest: "75s", desc: "Tirá del codo hacia atrás, juntando escápulas." },
    ],
  },
  {
    id: "avanzado",
    title: "Avanzado",
    level: "AVANZADO",
    duration: "75 min",
    freq: "5x semana",
    difficulty: 3,
    color: "red",
    exercises: [
      { name: "Sentadilla con barra", key: "squat", sets: "5", reps: "5", rest: "2 min", desc: "Carga progresiva. Profundidad completa, control en la bajada." },
      { name: "Peso muerto", key: "deadlift", sets: "5", reps: "5", rest: "2 min", desc: "Técnica perfecta antes que peso. Calentá bien la zona lumbar." },
      { name: "Dominadas", key: "pullup", sets: "4", reps: "Máx", rest: "90s", desc: "Pecho hacia la barra, sin balanceo. Bajá controlado." },
      { name: "Press de hombro", key: "shoulder-press", sets: "4", reps: "8", rest: "90s", desc: "De pie, core activado todo el rango." },
    ],
  },
  {
    id: "cardio",
    title: "Cardio HIIT",
    level: "CARDIO",
    duration: "30 min",
    freq: "3-4x semana",
    difficulty: 2,
    color: "blue",
    exercises: [
      { name: "Burpees", key: "burpee", sets: "5", reps: "30s on / 30s off", rest: "30s", desc: "Explosivo. Bajá al piso, salto y palmada arriba." },
      { name: "Estocadas alternadas", key: "lunge", sets: "4", reps: "40s", rest: "20s", desc: "Ritmo continuo, alterná piernas sin pausa." },
      { name: "Plancha dinámica", key: "plank", sets: "4", reps: "30s", rest: "30s", desc: "Sumá movimiento de hombros o caderas para más intensidad." },
    ],
  },
  {
    id: "fullbody",
    title: "Full Body",
    level: "FULL BODY",
    duration: "60 min",
    freq: "3x semana",
    difficulty: 2,
    color: "red",
    exercises: [
      { name: "Sentadilla", key: "squat", sets: "4", reps: "10", rest: "75s", desc: "Trabajá tren inferior con técnica limpia." },
      { name: "Flexión", key: "pushup", sets: "4", reps: "12", rest: "60s", desc: "Pecho, hombro y tríceps. Cuerpo como tabla." },
      { name: "Remo", key: "row", sets: "4", reps: "12", rest: "60s", desc: "Espalda media. Codo cerca del torso." },
      { name: "Curl de bíceps", key: "biceps-curl", sets: "3", reps: "12", rest: "45s", desc: "Codo fijo al costado, sin balanceo." },
      { name: "Plancha", key: "plank", sets: "3", reps: "45s", rest: "45s", desc: "Cierre de core para terminar." },
    ],
  },
];

export function Routines() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="rutinas" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      {/* Decorative diagonals */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" viewBox="0 0 1440 1000" preserveAspectRatio="none" aria-hidden>
        <line x1="0" y1="0" x2="1440" y2="700" stroke="var(--primary)" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="200" x2="1440" y2="900" stroke="var(--secondary)" strokeWidth="1" opacity="0.3" />
      </svg>

      <div className="container mx-auto px-5 relative">
        <div className="max-w-3xl mb-14">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Empezá hoy · Sin excusas
          </p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
            Rutinas <span className="text-3d-red">gratis</span><br />
            para empezar
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Elegí tu nivel y entrená hoy mismo. Cada ejercicio con animación, series, repes y descansos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {routines.map((r) => {
            const open = openId === r.id;
            return (
              <article
                key={r.id}
                className={`relative bg-card border rounded-2xl overflow-hidden transition-all shadow-card ${
                  open ? "lg:col-span-3 sm:col-span-2 border-primary/60" : "border-border hover:border-primary/40 hover:-translate-y-1"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${r.color === "red" ? "bg-gradient-red" : "bg-secondary"}`}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`text-xs uppercase tracking-[0.25em] font-semibold ${r.color === "red" ? "text-primary" : "text-secondary-foreground/70"}`}>
                        Nivel
                      </p>
                      <h3 className="font-display text-3xl uppercase mt-1">{r.title}</h3>
                    </div>
                    <Difficulty level={r.difficulty} />
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                    <Meta label="Duración" value={r.duration} />
                    <Meta label="Frecuencia" value={r.freq} />
                  </div>

                  <button
                    onClick={() => setOpenId(open ? null : r.id)}
                    className="w-full font-display tracking-widest py-3 bg-gradient-red text-primary-foreground rounded-md hover:scale-[1.02] transition-transform"
                  >
                    {open ? "OCULTAR RUTINA" : "VER RUTINA"}
                  </button>
                </div>

                {open && (
                  <div className="px-6 pb-6 animate-fade-up">
                    <div className="border-t border-border pt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {r.exercises.map((ex, i) => (
                        <div key={ex.name + i} className="bg-background/60 border border-border rounded-xl p-4">
                          <ExerciseAnimation exercise={ex.key} />
                          <h4 className="font-display text-xl uppercase mt-4">{ex.name}</h4>
                          <div className="flex flex-wrap gap-2 mt-2 text-xs">
                            <Tag>{ex.sets} series</Tag>
                            <Tag>{ex.reps} reps</Tag>
                            <Tag>desc. {ex.rest}</Tag>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{ex.desc}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contacto"
                      className="mt-8 group flex items-center justify-between gap-4 p-5 rounded-xl bg-gradient-red text-primary-foreground hover:scale-[1.01] transition-transform"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-widest opacity-80">¿Querés más?</p>
                        <p className="font-display text-xl md:text-2xl uppercase">
                          Rutinas personalizadas · Asociate ahora
                        </p>
                      </div>
                      <span className="font-display text-3xl">→</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-background/60 border border-border p-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="font-semibold mt-0.5">{value}</p>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 rounded bg-secondary/50 text-secondary-foreground uppercase tracking-wider text-[10px] font-semibold">
      {children}
    </span>
  );
}

function Difficulty({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= level ? "var(--primary)" : "transparent"} stroke="var(--primary)" strokeWidth="2">
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}
