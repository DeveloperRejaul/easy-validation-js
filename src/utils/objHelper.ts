export function getObjectValues(obj: { [key: string]: any }): any[] {
  const keys = Object.keys(obj);
  const values = keys.map(key => obj[key]);
  return values;
}

export function areAllIncluded(arr1: string[], arr2: string[]): boolean {
  return arr1.every(item => arr2.indexOf(item) !== -1);
}