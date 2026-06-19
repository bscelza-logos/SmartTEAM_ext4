/**
 * Botón en pin — categoría nativa Entrada (input) / grupo sensores
 * Origen: ICreateRobot main.ts → buttonState
 */

enum Ext4ButtonPin {
    //% block="P0"
    P0 = 0,
    //% block="P16"
    P16 = 16,
    //% block="P1"
    P1 = 1,
    //% block="P12"
    P12 = 12,
    //% block="P2"
    P2 = 2,
    //% block="P8"
    P8 = 8,
}

enum Ext4CompareOperator {
    //% block="="
    Eq,
    //% block="≠"
    Neq,
    //% block="<"
    Lt,
    //% block="≤"
    Lte,
    //% block=">"
    Gt,
    //% block="≥"
    Gte,
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

    /**
     * Compara la lectura del botón con un valor numérico.
     * @param reading lectura del botón, eg: ext4BotonEnPin(Ext4ButtonPin.P0)
     * @param op operador de comparación
     * @param value valor a comparar, eg: 0
     */
    //% blockId=ext4_button_compare block="$reading $op $value" blockNamespace=input color=#00979D group="sensores" weight=2 blockGap=8
    //% reading.shadow=ext4_button_sensor
    //% value.shadow=math_number
    //% value.defl=0
    export function ext4BotonComparar(reading: number, op: Ext4CompareOperator, value: number): boolean {
        return compareValues(reading, op, value);
    }
}

function compareValues(left: number, op: Ext4CompareOperator, right: number): boolean {
    switch (op) {
        case Ext4CompareOperator.Eq: return left == right;
        case Ext4CompareOperator.Neq: return left != right;
        case Ext4CompareOperator.Lt: return left < right;
        case Ext4CompareOperator.Lte: return left <= right;
        case Ext4CompareOperator.Gt: return left > right;
        case Ext4CompareOperator.Gte: return left >= right;
        default:
            const _exhaustiveCheck: never = op;
            return _exhaustiveCheck;
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
