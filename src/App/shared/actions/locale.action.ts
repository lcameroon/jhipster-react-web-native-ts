import { TranslatorContext } from 'react-jhipster';

export const ACTION_TYPES = {
  SET_LOCALE: 'locale/SET_LOCALE'
};

export const setLocale = locale => async dispatch => {
  if (Object.keys(TranslatorContext.context.translations).indexOf(locale) === -1) {
    const i18n = require(`../../../i18n/${locale}.json`);
    TranslatorContext.registerTranslations(locale, i18n);
  }
  dispatch({
    type: ACTION_TYPES.SET_LOCALE,
    locale
  });
};
