/**
 * @returns new ArrayBuffer with Int8 value
 * @args length (Number) position (Number) and value
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
    }
    const buffer = new DataView(new ArrayBuffer(length), 0, length);
    buffer.setInt8(position, value);
    return buffer;
}
