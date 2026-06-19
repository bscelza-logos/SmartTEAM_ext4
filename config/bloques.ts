/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BLOQUES EDITABLES — SmartTEAM4
 * ═══════════════════════════════════════════════════════════════════════════
 */

const BLOQUES = {
    boton: {
        color: "#D400D4",
        iconoFa: "\\uf11c",
        iconoArchivo: "icons/entradas/boton.png",
        categoria: "input",
        subcategoria: "sensores",
        blockId: "ext4_button_sensor",
        texto: "BOTÓN en el pin %pin",
        weight: 0,
    },
    botonComparar: {
        color: "#00979D",
        iconoFa: "\\uf11c",
        iconoArchivo: "icons/entradas/boton-compare.png",
        categoria: "input",
        subcategoria: "sensores",
        blockId: "ext4_button_compare",
        texto: "$reading $op $value",
        weight: 2,
    },
    ultrasonic: {
        color: "#D400D4",
        iconoFa: "\\uf1ce",
        iconoArchivo: "icons/entradas/ultrasonic.png",
        categoria: "input",
        subcategoria: "sensores",
        blockId: "ext4_ultrasonic_sensor",
        texto: "Ultrasonic Sensor %pin units %unit",
        weight: 1,
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
        color: "#29B6F6",
        iconoFa: "\\uf013",
        iconoArchivo: "icons/smartteam4/motor-run.png",
        categoria: "SMARTTEAM4",
        subcategoria: "Motores",
        blockId: "ext4_motor_run",
        texto: "|%motoraddress|Motor rotate at|%speed|",
        weight: 100,
    },
    oledInit: {
        color: "#4527A0",
        iconoFa: "\\uf108",
        iconoArchivo: "icons/smartteam4/oled-init.png",
        categoria: "SMARTTEAM4",
        subcategoria: "OLED",
        blockId: "ext4_oled_init",
        texto: "Initialize OLED ",
        weight: 110,
    },
} as const;
