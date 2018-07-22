import React from 'react';
import { DropdownItem } from 'reactstrap';

import { NavDropdown } from './home';
import { languages } from '../../../utils/translation.util';

export const LocaleMenu = ({ currentLocale, onClick }) =>
  Object.keys(languages).length > 1 && (
    <NavDropdown
      icon="flag"
      name={currentLocale ? languages[currentLocale].name : undefined}
    >
      {Object.keys(languages)
        .sort()
        .map(lang => (
          <DropdownItem key={lang} value={lang} onClick={onClick}>
            {languages[lang].name}
          </DropdownItem>
        ))}
    </NavDropdown>
  );
