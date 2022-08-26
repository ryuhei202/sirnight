export const convertHalfWidthNumber = (str: string): string => {
  const replacedFullWidthDigits = str.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });
  const replacedNotNumber = replacedFullWidthDigits.replace(/[^0-9]/g, "");
  return replacedNotNumber;
};
