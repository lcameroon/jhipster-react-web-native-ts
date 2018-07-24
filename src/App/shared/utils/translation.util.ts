import { TranslatorContext } from 'react-jhipster';
import Storage from '../utils/storage';

import { setLocale } from '../actions/locale.action';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' }
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  Storage.get('locale').then(locale => {
    store.dispatch(setLocale(locale || 'en'));
  });
};
