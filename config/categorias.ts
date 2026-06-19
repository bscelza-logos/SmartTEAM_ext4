/**
 * CATEGORÍAS EDITABLES — SmartTEAM4 (referencia, no compilado)
 */
const CATEGORIAS: Record<CategoriaId, CategoriaConfig> = {
    SMARTTEAM4: {
        namespace: "ext4_smartteam4",
        nombre: "SmartTEAM4",
        color: "#1565C0",
        iconoFa: "\\uf135",
        iconoArchivo: "icons/smartteam4/categoria.png",
        weight: 90,
        subcategorias: ["Movimiento", "Motores", "OLED", "others"],
    },
    ENTRADAS: {
        namespace: "ext4_entradas",
        nombre: "ENTRADAS",
        color: "#0288D1",
        iconoFa: "\\uf061",
        iconoArchivo: "icons/entradas/categoria.png",
        weight: 80,
        subcategorias: ["Sensores"],
    },
    SALIDAS: {
        namespace: "ext4_salidas",
        nombre: "SALIDAS",
        color: "#E63022",
        iconoFa: "\\uf0eb",
        iconoArchivo: "icons/salidas/categoria.png",
        weight: 70,
        subcategorias: ["LED"],
    },
};
