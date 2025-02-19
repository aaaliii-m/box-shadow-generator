export const hexConverter = (value: string): string => {
    const numericValue = Number(value);
    const hexValue = Math.round((numericValue / 100) * 255);
    const paddedHexValue = hexValue.toString(16).padStart(2, "0");
    return paddedHexValue;
}