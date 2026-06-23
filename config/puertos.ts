/**
 * PUERTOS GPIO SmartTEAM4 — referencia (no compilado)
 *
 * Cada puerto expone dos pines (+VCC y GND) en el conector físico.
 * Los bloques muestran P1–P4; el mapeo a pines reales está en blocks/smartteam4/puertos.ts
 */

const PUERTOS_GPIO = {
    P1: { trig: 7, signal: 8, echo: 8 },
    P2: { trig: 9, signal: 12, echo: 12 },
    P3: { trig: 14, signal: 1, echo: 1 },
    P4: { trig: 15, signal: 2, echo: 2 },
} as const;

/** Pin único para botón y LED por puerto */
const PUERTO_GPIO_SIGNAL: Record<keyof typeof PUERTOS_GPIO, number> = {
    P1: 8,
    P2: 12,
    P3: 1,
    P4: 2,
};

/** Par trig + echo para ultrasónico por puerto (orden: trig, echo) */
const PUERTO_ULTRASONICO: Record<keyof typeof PUERTOS_GPIO, { trig: number; echo: number }> = {
    P1: { trig: 7, echo: 8 },
    P2: { trig: 9, echo: 12 },
    P3: { trig: 14, echo: 1 },
    P4: { trig: 15, echo: 2 },
};
