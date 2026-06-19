/**
 * Sensor botón — ENTRADAS / subcategoría Sensores
 * Origen: ICreateRobot main.ts → buttonState
 */

enum Ext4ButtonPin {
    //% block="P0"
    P0 = 1,
    //% block="P16"
    P16 = 2,
    //% block="P1"
    P1 = 3,
    //% block="P12"
    P12 = 4,
    //% block="P2"
    P2 = 5,
    //% block="P8"
    P8 = 6,
}

namespace ext4_entradas {

    // ─── boton ───────────────────────────────────────────────────────────────
    // EDITAR: config/bloques.ts → BLOQUES.boton
    // COLOR:     #0288D1
    // ICONO:     icons/entradas/boton.png  (FA: \uf11c)
    // CATEGORÍA: ENTRADAS
    // SUBCATEGORÍA: Sensores
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Lee el estado del sensor botón en el pin indicado.
     * @param pin pin de conexión, eg: P0
     */
    //% blockId=ext4_button_sensor block="Button Sensor %pin" color="#0288D1" icon="\uf11c" group="Sensores" weight=100
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    export function boton(pin: Ext4ButtonPin): number {
        return pins.digitalReadPin(buttonPinToDigital(pin));
    }
}

function buttonPinToDigital(pin: Ext4ButtonPin): DigitalPin {
    switch (pin) {
        case Ext4ButtonPin.P0: return DigitalPin.P0;
        case Ext4ButtonPin.P16: return <DigitalPin>16;
        case Ext4ButtonPin.P1: return DigitalPin.P1;
        case Ext4ButtonPin.P12: return DigitalPin.P12;
        case Ext4ButtonPin.P2: return DigitalPin.P2;
        case Ext4ButtonPin.P8: return DigitalPin.P8;
        default:
            const _exhaustiveCheck: never = pin;
            return _exhaustiveCheck;
    }
}
