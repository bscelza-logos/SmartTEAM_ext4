/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLOQUES EDITABLES — SmartTEAM4
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Cada bloque tiene constantes editables: color, iconoFa, iconoArchivo,
 * categoria, subcategoria (group), blockId, texto y weight.
 *
 * Después de editar aquí, sincroniza la línea //% del archivo .ts del bloque
 * en blocks/<categoria>/ (ver blocks/_plantilla.ts).
 */

const BLOQUES = {
    inicializar: {
        color: "#1565C0",
        iconoFa: "\\uf135",
        iconoArchivo: "icons/smartteam4/inicializar.png",
        categoria: "SMARTTEAM4",
        blockId: "ext4_smartteam4_init",
        texto: "inicializar SmartTEAM4",
        weight: 100,
    },
    led: {
        color: "#FF0000",
        iconoFa: "\\uf0eb",
        iconoArchivo: "icons/salidas/led.png",
        categoria: "SALIDAS",
        subcategoria: "LED",
        blockId: "ext4_led",
        texto: "LED Pin %pin Estado %estado",
        weight: 100,
    },
} as const;
