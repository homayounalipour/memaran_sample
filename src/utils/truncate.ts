export function truncate(str: string, length: number) {
  return str.length > 30 ? str.substring(0, length) + "..." : str;
}
