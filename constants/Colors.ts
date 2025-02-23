/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  fonts: DefaultTheme.fonts,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    background: '#F8F8F8',
    card: '#FFFFFF',
    text: '#4A4A4A',
    border: '#E0E0E0',
    notification: '#FF6B6B',
    surface: '#FFFFFF',
    accent: '#FFD93D',
  },
};

export const darkTheme = {
  ...DarkTheme,
  dark: true,
  fonts: DarkTheme.fonts,
  colors: {
    ...DarkTheme.colors,
    primary: '#FF6B6B',
    background: '#1A1A1A',
    card: '#2D2D2D',
    text: '#FFFFFF',
    border: '#404040',
    notification: '#FF6B6B',
    surface: '#2D2D2D',
    accent: '#FFD93D',
  },
};
