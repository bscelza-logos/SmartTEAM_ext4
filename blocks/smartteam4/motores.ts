/**
 * Movimiento de motores — SmartTEAM4 / subcategoría Motores
 * Origen: ICreateRobot block/M_motor.ts (runDMotor)
 *
 * Disposición del robot (vista desde arriba, frente arriba):
 * - Motor izquierdo: VERDE (I2C 82)
 * - Motor derecho: ROJO (I2C 81)
 */

enum Ext4MovimientoMotores {
    //% block="Avanzar"
    Avanzar,
    //% block="Retroceder"
    Retroceder,
    //% block="Girar a la derecha"
    GirarDerecha,
    //% block="Girar a la Izquierda"
    GirarIzquierda,
    //% block="Frenar"
    Frenar,
}

namespace ext4_smartteam4 {

    const MOTOR_ROJO = 81;
    const MOTOR_VERDE = 82;

    /**
     * Mueve ambos motores según la acción elegida.
     * @param movimiento acción del robot, eg: Avanzar
     * @param velocidad velocidad en % (0–100), eg: 50
     */
    //% blockId=ext4_motor_move block="Motores %movimiento 🟢 🔴 || Velocidad %velocidad"
    //% expandableArgumentMode="toggle"
    //% velocidad.min=0 velocidad.max=100 velocidad.defl=50
    //% group="Motores" color="#29B6F6" icon="\uf013" weight=100 blockGap=8
    export function ext4MotoresMover(movimiento: Ext4MovimientoMotores, velocidad?: number): void {
        const v = clampSpeed(velocidad === undefined ? 50 : velocidad);
        const { rojo, verde } = movimientoToSpeeds(movimiento, v);
        runDualMotors(rojo, verde);
    }

    function movimientoToSpeeds(movimiento: Ext4MovimientoMotores, velocidad: number): { rojo: number; verde: number } {
        switch (movimiento) {
            case Ext4MovimientoMotores.Avanzar:
                // Ambos horario
                return { rojo: -velocidad, verde: velocidad };
            case Ext4MovimientoMotores.Retroceder:
                // Verde horario, rojo anti-horario
                return { rojo: velocidad, verde: velocidad };
            case Ext4MovimientoMotores.GirarDerecha:
                // Ambos anti-horario
                return { rojo: velocidad, verde: -velocidad };
            case Ext4MovimientoMotores.GirarIzquierda:
                // Ambos horario (espejo del giro derecha)
                return { rojo: -velocidad, verde: -velocidad };
            case Ext4MovimientoMotores.Frenar:
                return { rojo: 0, verde: 0 };
            default:
                const _exhaustiveCheck: never = movimiento;
                return _exhaustiveCheck;
        }
    }

    function clampSpeed(velocidad: number): number {
        if (velocidad < 0) return 0;
        if (velocidad > 100) return 100;
        return velocidad;
    }

    /**
     * Control dual I2C — parámetros en % (−100…100) antes del escalado interno.
     * rojo → MOTOR_ROJO (81), verde → MOTOR_VERDE (82)
     */
    function runDualMotors(rojo: number, verde: number): void {
        let speedRojo = -rojo / 2;
        let speedVerde = verde / 2;

        let speedBuffRojo: number;
        if (speedRojo < 0) {
            speedRojo = -speedRojo;
            speedBuffRojo = (~speedRojo) + 1;
            speedBuffRojo = speedBuffRojo | 0x80;
        } else {
            speedBuffRojo = speedRojo;
        }

        let speedBuffVerde: number;
        if (speedVerde < 0) {
            speedVerde = -speedVerde;
            speedBuffVerde = (~speedVerde) + 1;
            speedBuffVerde = speedBuffVerde | 0x80;
        } else {
            speedBuffVerde = speedVerde;
        }

        let bufRojo = pins.createBuffer(4);
        bufRojo.setNumber(NumberFormat.UInt8BE, 0, 0x11);
        bufRojo.setNumber(NumberFormat.UInt8BE, 1, speedBuffRojo);
        bufRojo.setNumber(NumberFormat.UInt8BE, 2, 0);
        bufRojo.setNumber(NumberFormat.UInt8BE, 3, 0);

        let bufVerde = pins.createBuffer(4);
        bufVerde.setNumber(NumberFormat.UInt8BE, 0, 0x11);
        bufVerde.setNumber(NumberFormat.UInt8BE, 1, speedBuffVerde);
        bufVerde.setNumber(NumberFormat.UInt8BE, 2, 0);
        bufVerde.setNumber(NumberFormat.UInt8BE, 3, 0);

        pins.i2cWriteBuffer(MOTOR_ROJO, bufRojo);
        pins.i2cWriteBuffer(MOTOR_VERDE, bufVerde);
    }
}
