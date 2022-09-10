export const BALANCE_ACTIVITY_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
};

export const CREDIT_ACTIVITY_TYPES = {
  TAKE: 'take',
  PAY: 'pay',
};

export const EXPENSE_CREDIT_CATEGORY_KEY = 999;

export const BALANCE_EXPENSE_CATEGORIES = [
  { key: 1, value: 'Shop' },
  { key: 2, value: 'Restaurant' },
  { key: 3, value: 'Phone' },
  { key: 4, value: 'Transport' },
  { key: 5, value: 'Education' },
  { key: 6, value: 'Other' },
  { key: EXPENSE_CREDIT_CATEGORY_KEY, value: 'Credit' },
];
