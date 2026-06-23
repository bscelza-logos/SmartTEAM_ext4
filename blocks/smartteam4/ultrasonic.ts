/**
 * Sensor ultrasónico — SmartTEAM4 / subcategoría Sensores
 * Origen: ICreateRobot main.ts → ping (blockId sonar_ping)
 */

enum Ext4PingUnit {
    //% block="centimeters"
    Centimeters,
    //% block="microseconds"
    MicroSeconds,
    //% block="inches"
    Inches,
}

namespace ext4_smartteam4 {

    /**
     * Mide la distancia con el sensor ultrasónico en el puerto GPIO indicado.
     * @param puerto puerto GPIO, eg: P1
     * @param unit unidad de medida
     */
    //% blockId=ext4_ultrasonic_sensor block="Ultrasonic Sensor %puerto units %unit" color=#D400D4 group="Sensores" weight=1 blockGap=8
    export function ext4UltrasonicSensor(puerto: Ext4Puerto, unit: Ext4PingUnit, maxCmDistance = 500): number {
        const { trig, echo } = puertoToUltrasonicTrigEcho(puerto);
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
