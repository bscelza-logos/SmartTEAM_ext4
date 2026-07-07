/**
 * Puertos GPIO SmartTEAM4 — mapeo interno a pines de la micro:bit
 * EDITAR tabla en: config/puertos.ts
 *
 * PUERTO 1 → trig P0,  echo P13
 * PUERTO 2 → trig P1,  echo P14
 * PUERTO 3 → trig P2,  echo P15
 * PUERTO 4 → trig P8,  echo P7
 * PUERTO 5 → trig P12, echo P9
 * PUERTO 6 → trig P16, echo P10
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
    //% block="P5"
    P5 = 5,
    //% block="P6"
    P6 = 6,
}

function puertoToGpioPin(puerto: Ext4Puerto): DigitalPin {
    switch (puerto) {
        case Ext4Puerto.P1: return DigitalPin.P0;
        case Ext4Puerto.P2: return DigitalPin.P1;
        case Ext4Puerto.P3: return DigitalPin.P2;
        case Ext4Puerto.P4: return DigitalPin.P8;
        case Ext4Puerto.P5: return DigitalPin.P12;
        case Ext4Puerto.P6: return DigitalPin.P16;
        default:
            const _exhaustiveCheck: never = puerto;
            return _exhaustiveCheck;
    }
}

function puertoToUltrasonicTrigEcho(puerto: Ext4Puerto): { trig: DigitalPin; echo: DigitalPin } {
    switch (puerto) {
        case Ext4Puerto.P1: return { trig: DigitalPin.P0,  echo: DigitalPin.P13 };
        case Ext4Puerto.P2: return { trig: DigitalPin.P1,  echo: DigitalPin.P14 };
        case Ext4Puerto.P3: return { trig: DigitalPin.P2,  echo: DigitalPin.P15 };
        case Ext4Puerto.P4: return { trig: DigitalPin.P8,  echo: DigitalPin.P7  };
        case Ext4Puerto.P5: return { trig: DigitalPin.P12, echo: DigitalPin.P9  };
        case Ext4Puerto.P6: return { trig: DigitalPin.P16, echo: DigitalPin.P10 };
        default:
            const _exhaustiveCheck: never = puerto;
            return _exhaustiveCheck;
    }
}
