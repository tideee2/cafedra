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
    value: /^[а-щЬЮЯЇІЄҐa-z0-9 ;:."-,]*$/gi,
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
