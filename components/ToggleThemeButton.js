import {
  setState, getState, linkComponent, translate,
} from '../index.js';

const toggleThemeButtonsComponent = () => {
  const isLightTheme = getState('theme') === 'light';

  function onClickFunc() {
    return isLightTheme ? setState('theme', 'dark') : setState('theme', 'light');
  }

  // Little trick that could make your code look a bit nicer:
  // Instead of using `currentTheme` variable consider making `isLightTheme` variable
  // and use instead of repeating `currentTheme === 'light'` condition multiple times.
  // Done
  return linkComponent({
    text: isLightTheme ? `${translate('toggleTheme.toggle__dark')}` : `${translate('toggleTheme.toggle__light')}`,
    className: `button ${isLightTheme ? 'theme-light__button' : 'theme-dark__button'}`,
    href: '#settings',

    // eslint-disable-next-line max-len
    // Also, a good habit is to create named functions for things like this (and move them to the top),
    // so that `onClick: () => { .... }` becomes `onClick: onClickFunc`.
    // Done
    onClick: onClickFunc,
  });
};

export { toggleThemeButtonsComponent };
