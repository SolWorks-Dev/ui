export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#121212',
      },
    ],
  },
  darkMode: {
    // dark: { ...themes.dark, appBg: 'black' },
    current: 'dark',
  },
};
