/**
 * Botón en pin — categoría nativa Entrada (input) / grupo sensores
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

    /**
     * Lee el estado del botón conectado al pin indicado.
     * @param pin pin de conexión, eg: P0
     */
    //% blockId=ext4_button_sensor block="BOTÓN en el pin %pin" blockNamespace=input color=#D400D4 group="sensores" weight=0 blockGap=8
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    export function ext4BotonEnPin(pin: Ext4ButtonPin): number {
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
