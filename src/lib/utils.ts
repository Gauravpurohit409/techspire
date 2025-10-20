import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCSSVariable(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export function parseLab(
  labStr: string,
): { L: number; a: number; b: number } | null {
  const match = labStr.match(/lab\(([\d.]+)%?\s+([\d.-]+)\s+([\d.-]+)\)/);
  if (!match) return null;
  return {
    L: parseFloat(match[1]),
    a: parseFloat(match[2]),
    b: parseFloat(match[3]),
  };
}

export function labToXyz(L: number, a: number, b: number) {
  const y = (L + 16) / 116;
  const x = a / 500 + y;
  const z = y - b / 200;

  const pivot = (n: number) =>
    n ** 3 > 0.008856 ? n ** 3 : (n - 16 / 116) / 7.787;

  const X = pivot(x) * 0.95047; // D65 reference white
  const Y = pivot(y) * 1.0;
  const Z = pivot(z) * 1.08883;

  return [X, Y, Z];
}

// Convert XYZ → linear RGB → gamma corrected sRGB
export function xyzToRgb(X: number, Y: number, Z: number) {
  let r = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
  let g = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
  let b = X * 0.0557 + Y * -0.204 + Z * 1.057;

  const gamma = (c: number) =>
    c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;

  r = Math.min(Math.max(0, gamma(r)), 1);
  g = Math.min(Math.max(0, gamma(g)), 1);
  b = Math.min(Math.max(0, gamma(b)), 1);

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function rgbToHex([r, g, b]: [number, number, number]) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
