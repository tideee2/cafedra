export const titleOptions = {
  required: 'Введіть назву публікації',
  minLength: {
    message: 'Назва має бути більше 4 символів',
    value: 4,
  },
  maxLength: {
    message: 'Назва має бути менше 120 символів',
    value: 120,
  },
  pattern: {
    message: 'Назва має містити тільки дозволені символи',
    // eslint-disable-next-line regexp/no-obscure-range
    value: /^[а-щЬЮЯЇІЄҐa-z0-9 ;:.\-"-,]*$/gi,
  },
}

export const authorOptions = {
  required: 'Введіть автора',
  minLength: {
    message: 'Автор має бути більше 4 символів',
    value: 4,
  },
  maxLength: {
    message: 'Автор має бути менше 120 символів',
    value: 120,
  },
  pattern: {
    message: 'Автор має містити тільки дозволені символи',
    value: /^[а-щЬЮЯЇІЄҐa-z0-9 ;:."-,]*$/gi,
  },
}
export const categoryOptions = {
  required: 'Введіть категорію',
  minLength: {
    message: 'Категорія має бути більше 4 символів',
    value: 4,
  },
  maxLength: {
    message: 'Категорія має бути менше 50 символів',
    value: 50,
  },
  pattern: {
    message: 'Автор має містити тільки дозволені символи',
    value: /^[а-щЬЮЯЇІЄҐa-z0-9 ;:."-,]*$/gi,
  },
}
export const contentOptions = {
  required: 'Введіть текст публікації',
  minLength: {
    message: 'Текс має бути більше 4 символів',
    value: 4,
  },
  pattern: {
    message: 'Назва має містити тільки дозволені символи',
    value: /^[а-щЬЮЯЇІЄҐa-z0-9 ;\\:."\-,\n]*$/gi,
  },
}
export function commonOptions(title: string) {
  return {
    required: `Введіть ${title}`,
    minLength: {
      message: `${title} має бути більше 14 символів`,
      value: 4,
    },
    maxLength: {
      message: `${title} має бути менше 1000 символів`,
      value: 1000,
    },
    pattern: {
      message: `${title} має містити тільки дозволені символи`,
      // eslint-disable-next-line regexp/no-obscure-range
      value: /^[а-щЬЮЯЇІЄҐa-z0-9 ;:.\-"-,]*$/gi,
    },
  }
}
