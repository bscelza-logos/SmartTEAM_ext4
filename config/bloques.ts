/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLOQUES EDITABLES — SmartTEAM4
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Cada bloque tiene constantes editables: color, iconoFa, iconoArchivo,
 * categoria, blockId, texto y weight.
 *
 * Después de editar aquí, sincroniza la línea //% del archivo .ts del bloque
 * en blocks/<categoria>/ (ver blocks/_plantilla.ts).
 */

const BLOQUES = {
    led: {
        color: "#FF0000",
        iconoFa: "\\uf0eb",
        iconoArchivo: "icons/salidas/led.png",
        categoria: "SALIDAS",
        blockId: "ext4_led",
        texto: "LED Pin %pin Estado %estado",
        weight: 100,
    },
} as const;
