// src/styles/theme.d.ts
// willian
import 'styled-components';

// sua interface Theme
export interface Theme {
  appBackground: string;
  appColor: string;
  appDefaultStroke: string;
  appLogo: string;
  appSkeletonFrom: string;
  appSkeletonTo: string;

  button: {
    alert: string;
    alertColor: string;
    alertHover: string;
    disabled: string;
    primary: string;
    primaryColor: string;
    primaryHover: string;
  };

  card: {
    alert: string;
    background: string;
    border: string;
    success: string;
    warning: string;
  };

  textInput: {
    active: string;
    activeColor: string;
    borderColor: string;
    disabled: string;
    disabledBorderColor: string;
    disabledColor: string;
    placeholderColor: string;
  };

  typographies: {
    error: string;
    subtitle: string;
    success: string;
  };
}

// sobrescrevendo o DefaultTheme com sua interface Theme
declare module 'styled-components' {
    export type DefaultTheme = Theme;
}
