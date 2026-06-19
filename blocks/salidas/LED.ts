/**
 * Pin de conexión LED — SmartTEAM4
 */
enum Ext4LedPin {
    //% block="0"
    P0 = 0,
    //% block="1"
    P1 = 1,
    //% block="2"
    P2 = 2,
    //% block="8"
    P8 = 8,
    //% block="12"
    P12 = 12,
    //% block="15"
    P15 = 15,
}

/**
 * Estado del LED — ON escribe 0, OFF escribe 1
 */
enum Ext4LedEstado {
    //% block="ON"
    ON = 0,
    //% block="OFF"
    OFF = 1,
}

/**
 * Bloque LED — categoría SALIDAS
 */
namespace ext4_salidas {

    // ─── led ─────────────────────────────────────────────────────────────────
    // EDITAR: config/bloques.ts → BLOQUES.led
    // COLOR:     #FF0000
    // ICONO:     icons/salidas/led.png  (FA: \uf0eb)
    // CATEGORÍA: SALIDAS
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Escribe el estado del LED en el pin indicado.
     * @param pin pin de conexión, eg: P2
     * @param estado ON (0) u OFF (1), eg: ON
     */
    //% blockId=ext4_led block="LED Pin %pin Estado %estado" color="#FF0000" icon="\uf0eb" weight=100
    export function led(pin: Ext4LedPin, estado: Ext4LedEstado): void {
        pins.digitalWritePin(ledPinToDigital(pin), estado);
    }
}

function ledPinToDigital(pin: Ext4LedPin): DigitalPin {
    switch (pin) {
        case Ext4LedPin.P0: return DigitalPin.P0;
        case Ext4LedPin.P1: return DigitalPin.P1;
        case Ext4LedPin.P2: return DigitalPin.P2;
        case Ext4LedPin.P8: return DigitalPin.P8;
        case Ext4LedPin.P12: return DigitalPin.P12;
        case Ext4LedPin.P15: return <DigitalPin>15;
        default:
            const _exhaustiveCheck: never = pin;
            return _exhaustiveCheck;
    }
}
