
export const padStart = (str, len, chr) => {
  str = str.toString();
  len = len - str.length;
  return len > 0 ? new Array(len + 1).join(chr || "0") + str : str;
}