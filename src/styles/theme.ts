import { Theme } from "@types"

export const lightTheme: Theme = {
  appBackground: '#fff',
  appColor: '#000',
  appDefaultStroke: '#E0E0E0',
  appLogo: 'dnc-logo-black.svg',
  appSkeletonFrom: '#EEE',
  appSkeletonTo: '#CCC',

  button: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disabled: '#CCC',
    primary: '#0C70F2',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
    background: '#FFF',
    border: '#E0E0E0',
    success: '#008000',
    warning: '#F7A300',
  },
  textInput: {
    active: '#FFF',
    activeColor: '#000',
    borderColor: '#E0E0E0',
    disabled: '#EEE',
    disabledBorderColor: '#E0E0E0',
    disabledColor: '#666',
    placeholderColor: '#666',
  },
  typographies: {
    error: '#FF0202',
    subtitle: '#666',
    success: '#008000',
  },
};


export const darkTheme: Theme = {
  appBackground: '#060b26',
  appColor: '#fff',
  appDefaultStroke: '#21497d',
  appLogo: 'dnc-logo-white.svg',
  appSkeletonFrom: '#060b26',
  appSkeletonTo: '#21497D',

  button: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disabled: '#313649',
    primary: '#6D7B8E',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },

  card: {
    alert: '#E80000',
    background: '#0F1535',
    border: '#21497D',
    success: '#008000',
    warning: '#F7A300',
  },

  textInput: {
    active: '#0F1535',
    activeColor: '#FFF',
    borderColor: '#21497F',
    disabled: '#282D49',
    disabledBorderColor: '#2E3F55',
    disabledColor: '#58677C',
    placeholderColor: '#89A7CE',
  },

  typographies: {
    error: '#FF0202',
    subtitle: '#89A7CE',
    success: '#008000',
  },
};