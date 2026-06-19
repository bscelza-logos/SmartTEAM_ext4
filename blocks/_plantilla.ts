/**
 * PLANTILLA — copia este archivo para crear un bloque nuevo.
 *
 * 1. Edita config/bloques.ts y agrega tu bloque con color, icono, categoría, etc.
 * 2. Copia este archivo a blocks/<categoria>/mi-bloque.ts
 * 3. Sincroniza el encabezado y la línea //% con config/bloques.ts
 * 4. Registra el archivo en pxt.json → "files"
 * 5. Agrega traducciones en _locales/es/ext4-strings.json
 */

namespace ext4_salidas {

    // ─── nombreDelBloque ─────────────────────────────────────────────────────
    // EDITAR: config/bloques.ts → BLOQUES.nombreDelBloque
    // COLOR:     #E63022
    // ICONO:     icons/salidas/mi-bloque.png  (FA: \uf0eb)
    // CATEGORÍA: SALIDAS
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Descripción del bloque.
     * @param param describe el parámetro, eg: 0
     */
    //% blockId=ext4_ejemplo block="texto del bloque %param" color="#E63022" icon="\uf0eb" group="LED" weight=50
    export function nombreDelBloque(param: number): void {
        // código del bloque
    }
}
