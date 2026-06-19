# EXT4 - SmartTEAM4

Extensión MakeCode para SmartTEAM4 (micro:bit).

## Uso como extensión

1. Abre [makecode.microbit.org](https://makecode.microbit.org/)
2. Crea un **Nuevo proyecto**
3. Ve a **Extensiones** (icono de engranaje)
4. Pega la URL del repositorio de GitHub:
   `https://github.com/bscelza-logos/SmartTEAM_ext4`
5. Confirma la importación

## Simulador y conexión USB

**El simulador y WebUSB son cosas distintas.**

| Función | Qué usa | Cuándo |
|---------|---------|--------|
| Simulador (micro:bit virtual) | JavaScript en el navegador | Siempre, sin cable |
| micro:bit físico | WebUSB (MakeCode lo gestiona) | Al descargar o emparejar |

### Si el simulador no carga (spinner infinito)

1. Recarga la página o colapsa y vuelve a abrir el panel del simulador (flecha junto a la barra).
2. Pulsa **Reiniciar** en los controles del simulador.
3. Alterna entre **Bloques** y **JavaScript** para forzar una recarga.
4. Revisa la consola del navegador (F12 → Consola) por errores de compilación.
5. Si estás en red escolar/empresa, pide desbloquear los dominios del simulador MakeCode.

### WebUSB (micro:bit físico) — requisitos

Según la [especificación WebUSB](https://wicg.github.io/webusb/):

- **Contexto seguro**: usar `https://makecode.microbit.org` (HTTPS).
- **Navegador compatible**: Chrome, Edge u Opera (Chrome 61+). Firefox y Safari no soportan WebUSB.
- **Gestión del usuario**: emparejar requiere un clic (MakeCode llama a `requestDevice()`).
- **Cable USB de datos** (no solo carga).
- **Firmware DAPLink** actualizado en la micro:bit.

Esta extensión no implementa WebUSB; lo hace MakeCode al pulsar **Descargar** o **Emparejar**.

## Bloques incluidos al iniciar

Al crear o abrir un proyecto con esta extensión, estarán disponibles:

- **SmartTEAM4**: bloques generales de la extensión (p. ej. `inicializar SmartTEAM4`)
- **SALIDAS**: bloques de salida (p. ej. `LED Pin … Estado …`)
- **Básicos**: categoría estándar de MakeCode (incluida vía `core`)
- **al iniciar** (`on start`): se ejecuta una vez al iniciar el programa
- **para siempre** (`forever`): repite el código en segundo plano

---

## Reglas para crear bloques

Toda extensión SmartTEAM4 sigue estas reglas. **Respétalas antes de agregar un bloque nuevo.**

### 1. Constantes editables por bloque

Cada bloque debe tener **COLOR**, **ICONO** y **CATEGORÍA** editables en dos lugares:

| Dónde editar | Para qué sirve |
|--------------|----------------|
| `config/bloques.ts` | Registro central de todos los bloques (fuente de verdad) |
| Encabezado del archivo `.ts` del bloque | Referencia rápida al editar un bloque concreto |
| Línea `//%` encima de la función | Lo que MakeCode lee para dibujar el bloque |

**Importante:** MakeCode no puede leer variables TypeScript en la línea `//%`. Por eso, al cambiar un valor en `config/bloques.ts`, debes **sincronizar** el encabezado y la línea `//%` del bloque con los mismos valores.

### 2. Categorías disponibles

Usa solo estas categorías por ahora:

| Categoría | Archivo de categoría | Carpeta de bloques | Config |
|-----------|---------------------|-------------------|--------|
| SmartTEAM4 | `blocks/categorias/smartteam4.ts` | `blocks/smartteam4/` | `config/categorias.ts → SMARTTEAM4` |
| ENTRADAS | `blocks/categorias/entradas.ts` | `blocks/entradas/` | `config/categorias.ts → ENTRADAS` |
| SALIDAS | `blocks/categorias/salidas.ts` | `blocks/salidas/` | `config/categorias.ts → SALIDAS` |
| MOTORES | `blocks/categorias/motores.ts` | `blocks/motores/` | `config/categorias.ts → MOTORES` |
| PANTALLAS | `blocks/categorias/pantallas.ts` | `blocks/pantallas/` | `config/categorias.ts → PANTALLAS` |

Para cambiar el color, icono o nombre de una **categoría completa**, edita `config/categorias.ts` y sincroniza la línea `//%` en `blocks/categorias/<nombre>.ts`.

### 3. Iconos personalizados

Sube tus iconos en la carpeta `icons/`:

```
icons/
├── entradas/       ← iconos de categoría y bloques ENTRADAS
├── salidas/        ← iconos de categoría y bloques SALIDAS
├── motores/        ← iconos de categoría y bloques MOTORES
└── pantallas/      ← iconos de categoría y bloques PANTALLAS
```

- Registra la ruta del archivo en `iconoArchivo` (ej: `icons/salidas/encender-luz.png`).
- MakeCode usa **Font Awesome** en la línea `//% icon="\uf0eb"`. Busca códigos en [fontawesome.com/v5](https://fontawesome.com/v5/search?m=free).
- El PNG en `icons/` es tu referencia visual y queda listo para uso futuro; el código FA es el que MakeCode muestra hoy en el editor.

### 4. Pasos para agregar un bloque nuevo

1. Agrega la entrada en **`config/bloques.ts`** (color, icono, categoría, blockId, texto, weight).
2. Copia **`blocks/_plantilla.ts`** a `blocks/<categoria>/mi-bloque.ts`.
3. Sincroniza el **encabezado** y la línea **`//%`** con los valores de `config/bloques.ts`.
4. Escribe el código de la función.
5. Registra el archivo en **`pxt.json`** → array `"files"`.
6. Agrega traducciones en **`_locales/es/ext4-strings.json`**.

### 5. Ejemplo de encabezado editable

```typescript
// ─── encenderLuz ─────────────────────────────────────────────────────────
// EDITAR: config/bloques.ts → BLOQUES.encenderLuz
// COLOR:     #E63022
// ICONO:     icons/salidas/encender-luz.png  (FA: \uf0eb)
// CATEGORÍA: SALIDAS
// ─────────────────────────────────────────────────────────────────────────
//% blockId=ext4_led_on block="encender luz en pin %pin" color="#E63022" icon="\uf0eb" weight=100
export function encenderLuz(pin: DigitalPin): void {
    pins.digitalWritePin(pin, 1);
}
```

---

## Estructura del proyecto

```
SmarTEAM_EXT4/
├── config/
│   ├── tipos.ts           # Tipos CategoriaId, BloqueConfig
│   ├── categorias.ts      # COLOR, ICONO y CATEGORÍA editables
│   └── bloques.ts         # Metadatos editables de cada bloque
├── icons/                 # Iconos personalizados (PNG/SVG)
├── blocks/
│   ├── categorias/        # Definición de cada categoría en la caja de herramientas
│   ├── salidas/           # Bloques de la categoría SALIDAS
│   ├── _plantilla.ts      # Plantilla para bloques nuevos
│   └── ...
├── main.ts
├── main.blocks
├── pxt.json
└── _locales/es/
```

## Editar esta extensión

1. En MakeCode, usa **Importar** → **Importar URL**
2. Pega la URL del repositorio de GitHub
3. Edita los bloques o el código y sincroniza con GitHub

## Licencia

MIT
