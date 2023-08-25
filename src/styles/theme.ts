import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      header: string;
      white: string;
      grey1: string;
      grey2: string;
      grey3: string;
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
      lightGrey: string;
      grey: string;
      black: string;
    };
    textColor: {
      header: string;
      grey: string;
    };
    width: {
      maxWidth: string;
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
    lightGrey: '#f5f5f7',
    grey: '#DCDCDE',
    black: '#000',
  },
  textColor: {
    header: '#f5f5f7',
    grey: '#6E6E73',
  },

  width: {
    maxWidth: '1200px',
  },
};
