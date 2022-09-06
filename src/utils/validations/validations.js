import { DECIMAL_NUMBER_PATTERN } from './regexPatterns';

export const isDecimal = (value) => (value.match(DECIMAL_NUMBER_PATTERN) ?? [])[0];
