/**
 * Bloques generales SmartTEAM4
 */
namespace ext4_smartteam4 {

    // ─── inicializar ─────────────────────────────────────────────────────────
    // EDITAR: config/bloques.ts → BLOQUES.inicializar
    // COLOR:     #1565C0
    // ICONO:     icons/smartteam4/inicializar.png  (FA: \uf135)
    // CATEGORÍA: SMARTTEAM4
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Punto de entrada de la extensión SmartTEAM4.
     */
    //% blockId=ext4_smartteam4_init block="inicializar SmartTEAM4" color="#1565C0" icon="\uf135" weight=100
    export function inicializar(): void {
        basic.showIcon(IconNames.Heart);
    }
}
