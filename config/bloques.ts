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
        categoria: "SMARTTEAM4",
        subcategoria: "Sensores",
        blockId: "ext4_button_sensor",
        texto: "BOTÓN en el puerto %puerto",
        weight: 0,
    },
    botonComparar: {
        color: "#00979D",
        iconoFa: "\\uf11c",
        iconoArchivo: "icons/entradas/boton-compare.png",
        categoria: "SMARTTEAM4",
        subcategoria: "Sensores",
        blockId: "ext4_button_compare",
        texto: "$reading $op $value",
        weight: 2,
    },
    ultrasonic: {
        color: "#D400D4",
        iconoFa: "\\uf1ce",
        iconoArchivo: "icons/entradas/ultrasonic.png",
        categoria: "SMARTTEAM4",
        subcategoria: "Sensores",
        blockId: "ext4_ultrasonic_sensor",
        texto: "Ultrasonic Sensor %puerto units %unit",
        weight: 1,
    },
    led: {
        color: "#FF0000",
        iconoFa: "\\uf0eb",
        iconoArchivo: "icons/salidas/led.png",
        categoria: "SMARTTEAM4",
        subcategoria: "Salidas",
        blockId: "ext4_led",
        texto: "LED Puerto %puerto Estado %estado",
        weight: 100,
    },
    motorMover: {
        color: "#29B6F6",
        iconoFa: "\\uf013",
        iconoArchivo: "icons/smartteam4/motor-move.png",
        categoria: "SMARTTEAM4",
        subcategoria: "Motores",
        blockId: "ext4_motor_move",
        texto: "Motores %movimiento 🟢 🔴 || Velocidad %velocidad",
        weight: 100,
    },
    oledEscribir: {
        color: "#4527A0",
        iconoFa: "\\uf108",
        iconoArchivo: "icons/smartteam4/oled-escribir.png",
        categoria: "SMARTTEAM4",
        subcategoria: "OLED",
        blockId: "ext4_oled_show_text",
        texto: "Escribir %texto en la posición %posicion de la OLED en el pin IIC",
        weight: 10,
    },
    oledBorrar: {
        color: "#4527A0",
        iconoFa: "\\uf108",
        iconoArchivo: "icons/smartteam4/oled-borrar.png",
        categoria: "SMARTTEAM4",
        subcategoria: "OLED",
        blockId: "ext4_oled_clear",
        texto: "Borrar textos de la OLED en el pin IIC",
        weight: 8,
    },
} as const;
