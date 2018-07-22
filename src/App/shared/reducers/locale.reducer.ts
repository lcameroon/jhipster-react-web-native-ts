import { TranslatorContext, Storage } from 'react-jhipster';

export const ACTION_TYPES = {
  SET_LOCALE: 'locale/SET_LOCALE'
};

const initialState = {
  currentLocale: undefined
};

export type LocaleState = Readonly<typeof initialState>;

export default (state: LocaleState = initialState, action): LocaleState => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCALE:
      const currentLocale = action.locale;
      if (state.currentLocale !== currentLocale) {
        Storage.session.set('locale', currentLocale);
        TranslatorContext.setLocale(currentLocale);
      }
      return {
        currentLocale
      };
    default:
      return state;
  }
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
