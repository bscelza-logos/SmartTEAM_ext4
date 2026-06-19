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
        subcategorias: ["Movimiento", "Motores", "OLED"],
    },
    ENTRADAS: {
        namespace: "input",
        nombre: "Entrada",
        color: "#D400D4",
        iconoFa: "\\uf192",
        iconoArchivo: "icons/entradas/categoria.png",
        weight: 111,
        subcategorias: ["sensores"],
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
