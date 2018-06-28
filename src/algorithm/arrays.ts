export function trimNulls<T>(arr: T[]) {
  const len = arr.length;
  let i = 0;
  while (
    (arr[i] === null || typeof arr[i] === 'undefined' )
    && i < len
  ) {
    ++i;
  }
  return {
    deleted: i,
    result: arr.slice(i),
  };
}
