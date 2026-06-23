/**
 * Puertos GPIO SmartTEAM4 — mapeo interno a pines de la micro:bit
 * EDITAR tabla en: config/puertos.ts
 *
 * PUERTO 1 → P7 + P8   (ultrasonido: trig P7, echo P8; botón/LED: P8)
 * PUERTO 2 → P9 + P12
 * PUERTO 3 → P14 + P1
 * PUERTO 4 → P15 + P2
 */

enum Ext4Puerto {
    //% block="P1"
    P1 = 1,
    //% block="P2"
    P2 = 2,
    //% block="P3"
    P3 = 3,
    //% block="P4"
    P4 = 4,
}

function puertoToGpioPin(puerto: Ext4Puerto): DigitalPin {
    switch (puerto) {
        case Ext4Puerto.P1: return DigitalPin.P8;
        case Ext4Puerto.P2: return DigitalPin.P12;
        case Ext4Puerto.P3: return DigitalPin.P1;
        case Ext4Puerto.P4: return DigitalPin.P2;
        default:
            const _exhaustiveCheck: never = puerto;
            return _exhaustiveCheck;
    }
}

function puertoToUltrasonicTrigEcho(puerto: Ext4Puerto): { trig: DigitalPin; echo: DigitalPin } {
    switch (puerto) {
        case Ext4Puerto.P1: return { trig: DigitalPin.P7, echo: DigitalPin.P8 };
        case Ext4Puerto.P2: return { trig: DigitalPin.P9, echo: DigitalPin.P12 };
        case Ext4Puerto.P3: return { trig: DigitalPin.P14, echo: DigitalPin.P1 };
        case Ext4Puerto.P4: return { trig: DigitalPin.P15, echo: DigitalPin.P2 };
        default:
            const _exhaustiveCheck: never = puerto;
            return _exhaustiveCheck;
    }
}
