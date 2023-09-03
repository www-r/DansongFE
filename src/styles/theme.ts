import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      header: string;
      white: string;
      grey1: string;
      grey2: string;
      grey3: string;
      logoContainer: string;
      navy1: string;
      navy2: string;
      black: string;
      border: string;
    };
    viewport: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    backgroundColor: {
      header: string;
      footer: string;
      white: string;
      lightGrey: string;
      grey: string;
      black: string;
    };
    textColor: {
      white: string;
      grey: string;
      black: string;
    };
    width: {
      maxWidth: string;
    };
    border: {
      boxShadow: string;
    };
    // Add other properties as needed
  }
}

export const theme = {
  colors: {
    header: '#11161f',
    white: '#fff',
    grey1: '#F5F5F7',
    grey2: '#86868B',
    logoContainer: '#dee2e6',
    grey3: '#424245',
    navy1: '#1a212e',
    navy2: '#161a20',
    black: '#000',
    border: '#2c2c2c',
  },
  viewport: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },

  backgroundColor: {
    header: '#454545',
    footer: '#f5f5f7',
    white: '#fff',
    lightGrey: '#d0d1d0',
    grey: '#DCDCDE',
    black: '#000',
  },
  textColor: {
    white: '#f5f5f7',
    grey: '#a1a1a6',
    black: '#1d1d1f',
  },

  width: {
    maxWidth: '1200px',
  },

  border: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
};
