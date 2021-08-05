export const normalizePhone = (value, prevValue) => {
  if (!value) return value;

  const only_numbers = value.replace(/[^\d]/g, '')

  if (!prevValue || value.length > prevValue.length) {
    if (only_numbers.length === 4) {
      return only_numbers.slice(0,1) + '(' + only_numbers.slice(1,4) + ')';
    }
    if (only_numbers.length === 7) {
      return only_numbers.slice(0,1) + ' (' + only_numbers.slice(1,4) + ') ' + only_numbers.slice(4) + '-';
    }
  }

  if (only_numbers.length <= 4) {
    return only_numbers;
  }

  if (only_numbers.length <= 7) {
    return only_numbers.slice(0,1) + ' (' + only_numbers.slice(1,4) + ') ' + only_numbers.slice(4);
  }
  

  return only_numbers.slice(0,1) + ' (' + only_numbers.slice(1,4) + ') ' + only_numbers.slice(4, 7) + '-' + only_numbers.slice(7,11);
}