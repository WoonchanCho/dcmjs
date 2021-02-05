/**
 * Convert UTF-16 to UTF-8
 * @see http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
 *
 * @param {string} str - String in Javascript which are encoded as UTF-16
 * @return {number[]} Array of integer which encodes the entered string as UTF-8
 */
function toUTF8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(
                0xe0 | (charcode >> 12),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode =
                0x10000 +
                (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
            utf8.push(
                0xf0 | (charcode >> 18),
                0x80 | ((charcode >> 12) & 0x3f),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
    }
    return utf8;
}

/**
 * Convert a string or number into an integer number
 * @param {number|string} val - A number or a number-like string
 * @return {number} Integer number
 * @throws {Error} Will throw an error when the argument is not valid number
 */
function toInt(val) {
    if (isNaN(val)) {
        throw new Error("Not a number: " + val);
    } else if (typeof val == "string") {
        return parseInt(val);
    } else return val;
}

/**
 * Convert a string or number into a floating-point number
 * @param {number|string} val - A number or a number-like string
 * @return {number} Float number
 * @throws {Error} Will throw an error when the argument is not valid number
 */
function toFloat(val) {
    if (isNaN(val)) {
        throw new Error("Not a number: " + val);
    } else if (typeof val == "string") {
        return parseFloat(val);
    } else return val;
}

/**
 * Class representing a BufferStream
 */
class BufferStream {
    /**
     * Create a ReadBufferStream
     * @param {number|ArrayBuffer} sizeOrBuffer - Size of buffer in number or array buffer of the image file
     * @param {boolean} [littleEndian=false] - Whether the data elements are encoded as a Little Endian or not
     */
    constructor(sizeOrBuffer, littleEndian) {
        this.buffer =
            typeof sizeOrBuffer == "number"
                ? new ArrayBuffer(sizeOrBuffer)
                : sizeOrBuffer;
        if (!this.buffer) {
            this.buffer = new ArrayBuffer(0);
        }
        this.view = new DataView(this.buffer);
        this.offset = 0;
        this.isLittleEndian = littleEndian || false;
        this.size = 0;
    }

    /**
     * Set an encoding of the data elements
     * @param {boolean} littleEndian - Whether the data elements are encoded as a Little Endian or not
     * @return {void}
     */
    setEndian(isLittle) {
        this.isLittleEndian = isLittle;
    }

    /**
     * Write an 8-bit unsigned integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeUint8(value) {
        this.checkSize(1);
        this.view.setUint8(this.offset, toInt(value));
        return this.increment(1);
    }

    /**
     * Write an 8-bit signed integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeInt8(value) {
        this.checkSize(1);
        this.view.setInt8(this.offset, toInt(value));
        return this.increment(1);
    }

    /**
     * Write an 16-bit unsigned integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeUint16(value) {
        this.checkSize(2);
        this.view.setUint16(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(2);
    }

    /**
     * Write an 16-bit signed integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeInt16(value) {
        this.checkSize(2);
        this.view.setInt16(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(2);
    }

    /**
     * Write an 32-bit unsigned integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeUint32(value) {
        this.checkSize(4);
        this.view.setUint32(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(4);
    }

    /**
     * Write an 32-bit signed integer to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeInt32(value) {
        this.checkSize(4);
        this.view.setInt32(this.offset, toInt(value), this.isLittleEndian);
        return this.increment(4);
    }

    /**
     * Write a 32-bit floating-point number to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeFloat(value) {
        this.checkSize(4);
        this.view.setFloat32(this.offset, toFloat(value), this.isLittleEndian);
        return this.increment(4);
    }

    /**
     * Write a 64-bit floating-point number to buffer
     * @param {number|string} value - Number or string formatted number
     * @return {number} Added bytes
     */
    writeDouble(value) {
        this.checkSize(8);
        this.view.setFloat64(this.offset, toFloat(value), this.isLittleEndian);
        return this.increment(8);
    }

    /**
     * Write a string to buffer
     * @param {string} value - String to write
     * @return {number} Added bytes
     */
    writeString(value) {
        value = value || "";
        var utf8 = toUTF8Array(value),
            bytelen = utf8.length;

        this.checkSize(bytelen);
        var startOffset = this.offset;
        for (var i = 0; i < bytelen; i++) {
            this.view.setUint8(startOffset, utf8[i]);
            startOffset++;
        }
        return this.increment(bytelen);
    }

    /**
     * Write a hex string to buffer
     * @param {string} value - Hex String to write (2 characters represent 1 byte.)
     * @return {number} Added bytes
     */
    writeHex(value) {
        var len = value.length,
            blen = len / 2,
            startOffset = this.offset;
        this.checkSize(blen);
        for (var i = 0; i < len; i += 2) {
            var code = parseInt(value[i], 16),
                nextCode;
            if (i == len - 1) {
                nextCode = null;
            } else {
                nextCode = parseInt(value[i + 1], 16);
            }
            if (nextCode !== null) {
                code = (code << 4) | nextCode;
            }
            this.view.setUint8(startOffset, code);
            startOffset++;
        }
        return this.increment(blen);
    }

    /**
     * Read a 32-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint32() {
        var val = this.view.getUint32(this.offset, this.isLittleEndian);
        this.increment(4);
        return val;
    }

    /**
     * Read a 16-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint16() {
        var val = this.view.getUint16(this.offset, this.isLittleEndian);
        this.increment(2);
        return val;
    }

    /**
     * Read a 8-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint8() {
        var val = this.view.getUint8(this.offset);
        this.increment(1);
        return val;
    }

    /**
     * Read a 8-bit unsigned integer number from buffer
     * @return {number} Number read
     */
    readUint8Array(length) {
        var arr = new Uint8Array(this.buffer, this.offset, length);
        this.increment(length);
        return arr;
    }

    /**
     * Read the specified length of 16-bit unsinged integers from buffer
     * @param {number} length - The number of 16-bit unsigned integers to read
     * @return {Uint16Array} An array of 16-bit unsigned integers.
     */
    readUint16Array(length) {
        var sixlen = length / 2,
            arr = new Uint16Array(sixlen),
            i = 0;
        while (i++ < sixlen) {
            arr[i] = this.view.getUint16(this.offset, this.isLittleEndian);
            this.offset += 2;
        }
        return arr;
    }

    /**
     * Read a 16-bit signed integer number from buffer
     * @return {number} Number read
     */
    readInt16() {
        var val = this.view.getInt16(this.offset, this.isLittleEndian);
        this.increment(2);
        return val;
    }

    /**
     * Read a 32-bit signed integer number from buffer
     * @return {number} Number read
     */
    readInt32() {
        var val = this.view.getInt32(this.offset, this.isLittleEndian);
        this.increment(4);
        return val;
    }

    /**
     * Read a 32-bit floating-point number from buffer
     * @return {number} Number read
     */
    readFloat() {
        var val = this.view.getFloat32(this.offset, this.isLittleEndian);
        this.increment(4);
        return val;
    }

    /**
     * Read a 64-bit floating-point number from buffer
     * @return {number} Number read
     */
    readDouble() {
        var val = this.view.getFloat64(this.offset, this.isLittleEndian);
        this.increment(8);
        return val;
    }

    /**
     * Read the specified length of string from buffer
     * @param {number} - The length of string to read
     * @return {string} String read
     */
    readString(length) {
        var string = "";

        var numOfMulti = length,
            index = 0;
        while (index++ < numOfMulti) {
            var charCode = this.readUint8();
            string += String.fromCharCode(charCode);
        }

        return string;
    }

    /**
     * Read the specified length of string from buffer
     * @param {number} - The length of string to read
     * @return {string} Hex string read
     */
    readHex(length) {
        var hexString = "";
        for (var i = 0; i < length; i++) {
            hexString += this.readUint8().toString(16);
        }
        return hexString;
    }

    /**
     * Check if there is available space of the step bytes in the buffer and if not increase a buffer
     * @param {number} step - The required bytes in length
     */
    checkSize(step) {
        if (this.offset + step > this.buffer.byteLength) {
            //throw new Error("Writing exceeded the size of buffer");
            //resize
            var dstSize = this.offset + step;
            var dst = new ArrayBuffer(dstSize);
            new Uint8Array(dst).set(new Uint8Array(this.buffer));
            this.buffer = dst;
            this.view = new DataView(this.buffer);
        }
    }

    /**
     * Append the entered ArrayBuffer to the existing buffer
     * @param {ArrayBuffer} stream - ArrayBuffer to append
     * @returns {number} The new lengh of the buffer
     */
    concat(stream) {
        var available = this.buffer.byteLength - this.offset;
        if (stream.size > available) {
            let newbuf = new ArrayBuffer(this.offset + stream.size);
            let int8 = new Uint8Array(newbuf);
            int8.set(new Uint8Array(this.getBuffer(0, this.offset)));
            int8.set(
                new Uint8Array(stream.getBuffer(0, stream.size)),
                this.offset
            );
            this.buffer = newbuf;
            this.view = new DataView(this.buffer);
        } else {
            let int8 = new Uint8Array(this.buffer);
            int8.set(
                new Uint8Array(stream.getBuffer(0, stream.size)),
                this.offset
            );
        }
        this.offset += stream.size;
        this.size = this.offset;
        return this.buffer.byteLength;
    }

    /**
     * Move the offset forward by the length of step
     * @param {number} step
     * @return {number} step
     */
    increment(step) {
        this.offset += step;
        if (this.offset > this.size) {
            this.size = this.offset;
        }
        return step;
    }

    /**
     * Get a copied buffer from the start offset to the end offset
     * @param {number} start - The start offset
     * @param {number} end  - The end offset
     * @returns {ArrayBuffer} - The newly allocated ArrayBuffer object
     */
    getBuffer(start, end) {
        if (!start && !end) {
            start = 0;
            end = this.size;
        }

        return this.buffer.slice(start, end);
    }

    /**
     * Create an ReadBufferStream of the given length begining from the current offset
     * @param {number} length - The length of buffer to allocate
     * @returns {ReadBufferStream} - The new ReadBufferStream object
     */
    more(length) {
        if (this.offset + length > this.buffer.byteLength) {
            throw new Error("Request more than currently allocated buffer");
        }

        var newBuf = this.buffer.slice(this.offset, this.offset + length);
        this.increment(length);
        return new ReadBufferStream(newBuf);
    }

    /**
     * Move the offset to the begining of the stream
     * @returns {BufferStream} BufferStream object itself
     */
    reset() {
        this.offset = 0;
        return this;
    }

    /**
     * Check if the current offset points to the end of the buffer
     * @returns {boolean} True if the offset points to the end of the buffer
     */
    end() {
        return this.offset >= this.buffer.byteLength;
    }

    /**
     * Move the offset to the end
     */
    toEnd() {
        this.offset = this.buffer.byteLength;
    }
}

/**
 * Class representing a BufferStream for reading
 * @extends BufferStream
 */
class ReadBufferStream extends BufferStream {
    /**
     * Create a ReadBufferStream
     * @param {BufferStream} buffer
     * @param {string} littleEndian
     */
    constructor(buffer, littleEndian) {
        super(buffer, littleEndian);
        this.size = this.buffer.byteLength;
    }
}

/**
 * Class representing a BufferStream for writing
 * @extends BufferStream
 */
class WriteBufferStream extends BufferStream {
    /**
     * Create a ReadBufferStream
     * @param {BufferStream} buffer
     * @param {string} littleEndian
     */
    constructor(buffer, littleEndian) {
        super(buffer, littleEndian);
        this.size = 0;
    }
}

export { ReadBufferStream };
export { WriteBufferStream };
