// Mock UUID v4 implementation
let seed = 0;
export function v4(): string {
  return (seed++).toString();
}

export default {
  v4,
};
