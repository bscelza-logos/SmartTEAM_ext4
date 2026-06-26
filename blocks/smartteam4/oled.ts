/**
 * Bloques pantalla OLED — SmartTEAM4 / subcategoría OLED
 * Origen: ICreateRobot block/Av_OLED.ts
 */
//OLED模块
enum Ext4OledPosicion {
    //% block=" "
    P0 = 0,
    //% block="0"
    P1 = 1,
    //% block="1"
    P2 = 2,
    //% block="2"
    P3 = 3,
    //% block="3"
    P4 = 4,
    //% block="4"
    P5 = 5,
    //% block="5"
    P6 = 6,
    //% block="6"
    P7 = 7,
    //% block="7"
    P8 = 8,
    //% block="8"
    P9 = 9,
    //% block="9"
    P10 = 10,
    //% block="10"
    P11 = 11,
    //% block="11"
    P12 = 12,
    //% block="0"
    P13 = 13,
    //% block=" "
    P14 = 14,
    //% block=" "
    P15 = 15,
    //% block=" "
    P16 = 16,
    //% block=" "
    P17 = 17,
    //% block=" "
    P18 = 18,
    //% block=" "
    P19 = 19,
    //% block=" "
    P20 = 20,
    //% block=" "
    P21 = 21,
    //% block=" "
    P22 = 22,
    //% block=" "
    P23 = 23,
    //% block=" "
    P24 = 24,
    //% block=" "
    P25 = 25,
    //% block="1"
    P26 = 26,
    //% block=" "
    P27 = 27,
    //% block=" "
    P28 = 28,
    //% block=" "
    P29 = 29,
    //% block=" "
    P30 = 30,
    //% block=" "
    P31 = 31,
    //% block=" "
    P32 = 32,
    //% block=" "
    P33 = 33,
    //% block=" "
    P34 = 34,
    //% block=" "
    P35 = 35,
    //% block=" "
    P36 = 36,
    //% block=" "
    P37 = 37,
    //% block=" "
    P38 = 38,
    //% block="2"
    P39 = 39,
    //% block=" "
    P40 = 40,
    //% block=" "
    P41 = 41,
    //% block=" "
    P42 = 42,
    //% block=" "
    P43 = 43,
    //% block=" "
    P44 = 44,
    //% block=" "
    P45 = 45,
    //% block=" "
    P46 = 46,
    //% block=" "
    P47 = 47,
    //% block=" "
    P48 = 48,
    //% block=" "
    P49 = 49,
    //% block=" "
    P50 = 50,
    //% block=" "
    P51 = 51,
    //% block="3"
    P52 = 52,
    //% block=" "
    P53 = 53,
    //% block=" "
    P54 = 54,
    //% block=" "
    P55 = 55,
    //% block=" "
    P56 = 56,
    //% block=" "
    P57 = 57,
    //% block=" "
    P58 = 58,
    //% block=" "
    P59 = 59,
    //% block=" "
    P60 = 60,
    //% block=" "
    P61 = 61,
    //% block=" "
    P62 = 62,
    //% block=" "
    P63 = 63,
    //% block=" "
    P64 = 64,
}

namespace ext4_smartteam4 {
    let _I2CAddr = 0;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _ZOOM = 1;
    let _oledInitialized = false;
    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;


    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col * (_ZOOM + 1)
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    function draw() {
        set_pos()
        pins.i2cWriteBuffer(_I2CAddr, _screen)
    }

    function clearScreenBuffer() {
        _screen.fill(0)
        _screen[0] = 0x40
        draw()
    }

    function initOled() {
        _I2CAddr = 60;
        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd2(0xD6, 1)    // zoom on
        cmd1(0xAF)       // SSD1306_DISPLAYON
        _ZOOM = 1
        _oledInitialized = true
        clearScreenBuffer()
    }

    function oledPosFromGridIndex(index: number): { x: number; y: number } {
        const row = Math.idiv(index, 13);
        const col = index % 13;
        if (row === 0) {
            if (col === 0) {
                return { x: 0, y: 0 };
            }
            return { x: col - 1, y: 0 };
        }
        if (col === 0) {
            return { x: 0, y: row - 1 };
        }
        return { x: col - 1, y: row - 1 };
    }

    function ensureOledInit() {
        if (!_oledInitialized) {
            initOled()
        }
    }

    /**
     * Escribe texto en la OLED I2C (inicializa la pantalla si hace falta).
     * @param texto texto a mostrar, eg: abc
     * @param posicion posicion F0,C0…F3,C11, eg: F0_C0
     */
    //% blockId=ext4_oled_show_text block="Escribir %texto en la posición %posicion de la OLED en el pin IIC"
    //% parts=OLED12864_I2C trackArgs=0
    //% texto.defl="abc"
    //% posicion.fieldEditor="gridpicker"
    //% posicion.fieldOptions.width=320
    //% posicion.fieldOptions.columns=13
    //% group="OLED" color="#34c2eb" icon="\uf108"
    //% weight=10 blockGap=10
    export function showString(texto: string, posicion: Ext4OledPosicion, color: number = 1) {
        ensureOledInit()
        let gridPos = oledPosFromGridIndex(posicion as number);
        let oled_x = gridPos.x;
        let oled_y = gridPos.y;
        let col2 = 0
        let q = 0
        let ind2 = 0
        for (let r = 0; r < texto.length; r++) {
            q = font[texto.charCodeAt(r)]
            for (let o = 0; o < 5; o++) {
                col2 = 0
                for (let p = 0; p < 5; p++) {
                    if (q & (1 << (5 * o + p)))
                        col2 |= (1 << (p + 1))
                }
                ind2 = (oled_x + r) * 5 * (_ZOOM + 1) + oled_y * 128 + o * (_ZOOM + 1) + 1
                if (color == 0)
                    col2 = 255 - col2
                _screen[ind2] = col2
                if (_ZOOM)
                    _screen[ind2 + 1] = col2
            }
        }
        set_pos(oled_x * 5, oled_y)
        let ind02 = oled_x * 5 * (_ZOOM + 1) + oled_y * 128
        let buf72 = _screen.slice(ind02, ind2 + 1)
        buf72[0] = 0x40
        pins.i2cWriteBuffer(_I2CAddr, buf72)
    }

    /**
     * Borra todos los textos de la OLED I2C.
     */
    //% blockId=ext4_oled_clear block="Borrar textos de la OLED en el pin IIC"
    //% parts=OLED12864_I2C trackArgs=0
    //% group="OLED" color="#34c2eb" icon="\uf108"
    //% weight=8 blockGap=10
    export function clear() {
        ensureOledInit()
        clearScreenBuffer()
    }
}
