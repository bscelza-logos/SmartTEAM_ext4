/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CATEGORÍAS EDITABLES — SmartTEAM4
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Edita COLOR, iconoFa, iconoArchivo y weight aquí.
 * Después sincroniza la línea //% del archivo en blocks/categorias/<nombre>.ts
 *
 * iconoArchivo: sube tu PNG/SVG en la carpeta icons/<categoria>/
 * iconoFa: código Font Awesome usado por MakeCode en //% icon="..."
 *           Busca iconos en: https://fontawesome.com/v5/search?m=free
 */

const CATEGORIAS: Record<CategoriaId, CategoriaConfig> = {
    SMARTTEAM4: {
        namespace: "ext4_smartteam4",
        nombre: "SmartTEAM4",
        color: "#1565C0",
        iconoFa: "\\uf135",
        iconoArchivo: "icons/smartteam4/categoria.png",
        weight: 90,
    },
    ENTRADAS: {
        namespace: "ext4_entradas",
        nombre: "ENTRADAS",
        color: "#0288D1",
        iconoFa: "\\uf061",
        iconoArchivo: "icons/entradas/categoria.png",
        weight: 80,
    },
    SALIDAS: {
        namespace: "ext4_salidas",
        nombre: "SALIDAS",
        color: "#E63022",
        iconoFa: "\\uf0eb",
        iconoArchivo: "icons/salidas/categoria.png",
        weight: 70,
    },
    MOTORES: {
        namespace: "ext4_motores",
        nombre: "MOTORES",
        color: "#7B1FA2",
        iconoFa: "\\uf013",
        iconoArchivo: "icons/motores/categoria.png",
        weight: 60,
    },
    PANTALLAS: {
        namespace: "ext4_pantallas",
        nombre: "PANTALLAS",
        color: "#00695C",
        iconoFa: "\\uf108",
        iconoArchivo: "icons/pantallas/categoria.png",
        weight: 50,
    },
};
