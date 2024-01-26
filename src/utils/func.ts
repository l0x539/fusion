export function range(offset: number, from: number, distance: number, margin = 0) {
  const start = from - margin;
  const end = start + distance + margin * 2;
  return offset < start ? 0 : offset > end ? 1 : (offset - start) / (end - start);
}

export function rangeCheck(offset: number, from: number, distance: number, margin = 0) {
  const start = from - margin;
  const end = start + distance + margin * 2;
  return offset < start ? false : offset > end ? false : true;
}