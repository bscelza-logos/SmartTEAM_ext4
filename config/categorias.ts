/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CATEGORÍAS EDITABLES — SmartTEAM4
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Edita COLOR, iconoFa, iconoArchivo, weight y subcategorias aquí.
 * Después sincroniza la línea //% del archivo en blocks/categorias/<nombre>.ts
 *
 * subcategorias → atributo groups=['…'] en la categoría (MakeCode)
 */

const CATEGORIAS: Record<CategoriaId, CategoriaConfig> = {
    SMARTTEAM4: {
        namespace: "ext4_smartteam4",
        nombre: "SmartTEAM4",
        color: "#1565C0",
        iconoFa: "\\uf135",
        iconoArchivo: "icons/smartteam4/categoria.png",
        weight: 90,
        subcategorias: ["Movimiento", "Motores", "others"],
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
        subcategorias: ["LED", "Pantalla OLED"],
    },
};
