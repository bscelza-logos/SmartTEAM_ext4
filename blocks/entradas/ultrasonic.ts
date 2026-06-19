/**
 * Sensor ultrasónico — categoría nativa Entrada (input) / grupo sensores
 * Origen: ICreateRobot main.ts → ping (blockId sonar_ping)
 */

enum Ext4UltrasonicPin {
    //% block="(P13,P0)"
    P13_P0 = 13,
    //% block="(P14,P1)"
    P14_P1 = 114,
    //% block="(P9,P12)"
    P9_P12 = 129,
    //% block="(P15,P2)"
    P15_P2 = 215,
}

enum Ext4PingUnit {
    //% block="centimeters"
    Centimeters,
    //% block="microseconds"
    MicroSeconds,
    //% block="inches"
    Inches,
}

namespace ext4_entradas {

    /**
     * Mide la distancia con el sensor ultrasónico en los pines indicados.
     * @param pin par trig/echo, eg: (P13,P0)
     * @param unit unidad de medida
     */
    //% blockId=ext4_ultrasonic_sensor block="Ultrasonic Sensor %pin units %unit" blockNamespace=input color=#D400D4 group="sensores" weight=1 blockGap=8
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    export function ext4UltrasonicSensor(pin: Ext4UltrasonicPin, unit: Ext4PingUnit, maxCmDistance = 500): number {
        const { trig, echo } = ultrasonicPinToTrigEcho(pin);
        let d: number;
        let distance: number;

        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 50);
        distance = d * 34 / 2 / 1000 * 3 / 2;

        switch (unit) {
            case Ext4PingUnit.Centimeters:
                return Math.round(distance);
            case Ext4PingUnit.Inches:
                return Math.round(distance / 30.48);
            case Ext4PingUnit.MicroSeconds:
                return Math.round(d);
            default:
                const _exhaustiveCheck: never = unit;
                return _exhaustiveCheck;
        }
    }
}

function ultrasonicPinToTrigEcho(pin: Ext4UltrasonicPin): { trig: DigitalPin; echo: DigitalPin } {
    switch (pin) {
        case Ext4UltrasonicPin.P13_P0:
            return { trig: DigitalPin.P0, echo: DigitalPin.P13 };
        case Ext4UltrasonicPin.P14_P1:
            return { trig: DigitalPin.P1, echo: DigitalPin.P14 };
        case Ext4UltrasonicPin.P9_P12:
            return { trig: DigitalPin.P12, echo: DigitalPin.P9 };
        case Ext4UltrasonicPin.P15_P2:
            return { trig: DigitalPin.P2, echo: DigitalPin.P15 };
        default:
            const _exhaustiveCheck: never = pin;
            return _exhaustiveCheck;
    }
}
