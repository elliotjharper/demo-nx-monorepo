export function formatString(text: string): string {
  return text.toUpperCase().trim();
}

export function reverseString(text: string): string {
  return text.split('').reverse().join('');
}
