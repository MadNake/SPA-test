import { linkComponent } from './Link.js';
import { setState } from '../data/indexData.js';

function langList() {
  return `
  ${linkComponent({
    text: 'RU',
    className: 'lang_ru',
    href: '#settings',
    onClick: () => { setState('lang', 'ru'); },
  })}
  ${linkComponent({
    text: 'ENG',
    className: 'lang_en',
    href: '#settings',
    onClick: () => { setState('lang', 'en'); },
  })}
  ${linkComponent({
    text: 'DE',
    className: 'lang_de',
    href: '#settings',
    onClick: () => { setState('lang', 'de'); },
  })}
  `;
};

export { langList };
