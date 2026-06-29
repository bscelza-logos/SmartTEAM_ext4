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

    let MOTOR_ROJO = 81;   // Motor derecho — verificar con bloque Escanear I2C
    let MOTOR_VERDE = 82;  // Motor izquierdo — verificar con bloque Escanear I2C

    /**
     * Mueve ambos motores según la acción elegida.
     * @param movimiento acción del robot, eg: Avanzar
     * @param velocidad velocidad en % (0–100), eg: 50
     */
    //% blockId=ext4_motor_move block="Motores %movimiento || Velocidad %velocidad"
    //% expandableArgumentMode="toggle"
    //% velocidad.min=0 velocidad.max=100 velocidad.defl=50
    //% group="Motores" color="#34c2eb" icon="\uf013" weight=100 blockGap=8
    export function ext4MotoresMover(movimiento: Ext4MovimientoMotores, velocidad?: number): void {
        const v = clampSpeed(velocidad === undefined ? 50 : velocidad);
        const { rojo, verde } = movimientoToSpeeds(movimiento, v);
        runDualMotors(rojo, verde);
    }

    function movimientoToSpeeds(
        movimiento: Ext4MovimientoMotores,
        velocidad: number
    ): { rojo: number; verde: number } {
        switch (movimiento) {
            case Ext4MovimientoMotores.Avanzar:
                return { rojo: velocidad, verde: velocidad };
            case Ext4MovimientoMotores.Retroceder:
                return { rojo: -velocidad, verde: -velocidad };
            case Ext4MovimientoMotores.GirarDerecha:
                return { rojo: -velocidad, verde: velocidad };
            case Ext4MovimientoMotores.GirarIzquierda:
                return { rojo: velocidad, verde: -velocidad };
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

    /**
     * Escanea el bus I2C y muestra en la pantalla LED las direcciones
     * que responden. Útil para encontrar la dirección real de los motores.
     * Muestra cada dirección encontrada como número durante 1 segundo.
     */
    //% blockId=ext4_i2c_scan block="Escanear bus I2C (mostrar direcciones)"
    //% group="Motores" color="#34c2eb" icon="\uf013" weight=1 blockGap=8
    export function escanearI2C(): void {
        let encontrados = 0;
        for (let addr = 1; addr < 128; addr++) {
            // Intenta escribir 0 bytes; si no hay error, el dispositivo responde
            let buf = pins.createBuffer(1);
            buf[0] = 0;
            pins.i2cWriteBuffer(addr, buf);
            // En micro:bit PXT, i2cWriteBuffer no lanza excepción; usamos
            // i2cReadBuffer para detectar ACK
            let resp = pins.i2cReadBuffer(addr, 1);
            if (resp.length > 0) {
                basic.showNumber(addr);
                basic.pause(1000);
                encontrados += 1;
            }
        }
        if (encontrados == 0) {
            basic.showString("?");
        }
    }
}
