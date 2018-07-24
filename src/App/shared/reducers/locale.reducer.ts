import { createSelector } from 'reselect';
import { TranslatorContext } from 'react-jhipster';

import { ACTION_TYPES } from '../actions/locale.action';
import { IRootState } from '../../reducers';
import Storage from '../utils/storage';

const initialState = {
  currentLocale: undefined
};

export type LocaleState = Readonly<typeof initialState>;

export default (state: LocaleState = initialState, action): LocaleState => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCALE:
      const currentLocale = action.locale;
      if (state.currentLocale !== currentLocale) {
        Storage.set('locale', currentLocale);
        TranslatorContext.setLocale(currentLocale);
      }
      return {
        currentLocale
      };
    default:
      return state;
  }
};

// Selectors
const getLocaleState = (state: IRootState) => state.locale;

export const selectCurrentLocale = createSelector(
  getLocaleState,
  (state: LocaleState) => state.currentLocale
);
