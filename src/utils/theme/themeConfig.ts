import { createGlobalStyle } from "styled-components";

export interface Theme {
    bg: string;
    contentBg: string;
    text: string;
    menuActive: string;
    iconsColor: string;
    footerText: string;
    tabButtonColor: string;
    tableHover: string;
}

export const lightTheme: Theme = {
    bg: '#f3f3f3',
    contentBg: 'white',
    text: '#3b3b3b',
    menuActive: '#eab308',
    iconsColor: '',
    footerText: '#8c8c8c',
    tabButtonColor: '',
    tableHover: '',
};

export const darkTheme: Theme = {
    bg: '#212737',
    contentBg: '#202020',
    text: '#e9e9e9',
    menuActive: '#eab308',
    iconsColor: '',
    footerText: '#878788',
    tabButtonColor: '',
    tableHover: '',
};

export const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
    :root {
        background-color: ${({ theme }) => theme.bg};
        font-family: Onest, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
`;