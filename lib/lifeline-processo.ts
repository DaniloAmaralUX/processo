import { defineLifeline, type LifelineMilestones } from "@/lib/lifeline-data"

/**
 * O processo — o ciclo que cada mudança de software percorre, passo a
 * passo, até virar conhecimento da Pitang e alimentar a próxima volta.
 *
 * Em vez de anos, os marcadores são passos: `birthYear`/`endYear` viram
 * passo 1..N, `label` carrega o nome da etapa e `age` o número dela.
 */
const FIRST_STEP = 1
const LAST_STEP = 7

const milestones: LifelineMilestones = {
  1: {
    id: "software-changed",
    age: "01",
    label: "Software changed",
    events: [
      "Uma mudança de software é identificada: nova funcionalidade, correção ou ajuste de regra.",
      "É o gatilho que coloca o ciclo em movimento.",
    ],
  },
  2: {
    id: "compound-engineering",
    age: "02",
    label: "Compound Engineering",
    events: [
      "A mudança entra na prática de Compound Engineering.",
      "Cada entrega é construída para tornar a próxima mais rápida e mais segura.",
    ],
  },
  3: {
    id: "plan-work",
    age: "03",
    label: "Plan/Work",
    events: [
      "Planejamento: o problema é decomposto e o caminho é definido.",
      "Trabalho: a implementação segue o plano, com o contexto do que já foi aprendido.",
    ],
  },
  4: {
    id: "review",
    age: "04",
    label: "Review",
    events: [
      "Revisão do que foi produzido: código, decisões e resultado.",
      "O que não passa volta para o trabalho; o que passa segue adiante.",
    ],
  },
  5: {
    id: "compound",
    age: "05",
    label: "Compound",
    events: [
      "Os aprendizados da entrega são capturados e consolidados.",
      "Padrões, armadilhas e soluções passam a fazer parte do sistema.",
    ],
  },
  6: {
    id: "compound-design",
    age: "06",
    label: "Compound Design",
    events: [
      "O mesmo ciclo aplicado ao design: decisões visuais e de produto também se acumulam.",
      "O design system evolui a cada mudança, em vez de recomeçar.",
    ],
  },
  7: {
    id: "pitang-knowledge",
    age: "07",
    label: "Pitang Knowledge ↺",
    events: [
      "Tudo o que foi aprendido vira conhecimento da Pitang, acessível a todos os times.",
      {
        text: "↺ O ciclo recomeça: a próxima mudança de software parte de um patamar mais alto.",
        effect: "fireworks",
      },
    ],
  },
}

const record = defineLifeline({
  slug: "processo",
  name: "Processo",
  birthYear: FIRST_STEP,
  endYear: LAST_STEP,
  description:
    "Software changed → Compound Engineering → Plan/Work → Review → Compound → Compound Design → Pitang Knowledge ↺",
  milestones,
})

export const processoLifeline = record
