const DECIMAL_NUMBER_PATTERN = /^\d+(\.\d+)?$/g;
export const isDecimal = (value) => (value.match(DECIMAL_NUMBER_PATTERN) ?? [])[0];

const ONLY_LETTER_PATTERN = /^[a-zA-Z ]+$/g;
export const isOnlyLetters = (value) => (value.match(ONLY_LETTER_PATTERN) ?? [])[0];
