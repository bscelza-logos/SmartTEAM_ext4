/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLOQUES EDITABLES — SmartTEAM4
 * ═══════════════════════════════════════════════════════════════════════════
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
    boton: {
        color: "#0288D1",
        iconoFa: "\\uf11c",
        iconoArchivo: "icons/entradas/boton.png",
        categoria: "ENTRADAS",
        subcategoria: "Sensores",
        blockId: "ext4_button_sensor",
        texto: "Button Sensor %pin",
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
    motorRun: {
        color: "#1565C0",
        iconoFa: "\\uf013",
        iconoArchivo: "icons/smartteam4/motor-run.png",
        categoria: "SMARTTEAM4",
        subcategoria: "Motores",
        blockId: "ext4_motor_run",
        texto: "|%motoraddress|Motor rotate at|%speed|",
        weight: 100,
    },
    oledInit: {
        color: "#1565C0",
        iconoFa: "\\uf108",
        iconoArchivo: "icons/smartteam4/oled-init.png",
        categoria: "SMARTTEAM4",
        subcategoria: "OLED",
        blockId: "ext4_oled_init",
        texto: "Initialize OLED ",
        weight: 110,
    },
} as const;
