import { createGlobalStyle } from "styled-components";

export interface Theme {
    bg: string;
    contentBg: string;
    headerBg: string;
    text: string;
    menuActive: string;
    iconsColor: string;
    footerText: string;
    spanBg: string;
    spanText: string;
    cardBg: string;
    cardText: string;
    cardButtonBg: string;
    cardButtonText: string;
}

export const lightTheme: Theme = {
    bg: '#f3f3f3',
    contentBg: 'white',
    headerBg: '#f7f7f7',
    text: '#3b3b3b',
    menuActive: '#eab308',
    iconsColor: '',
    footerText: '#8c8c8c',
    spanBg: '#bec0c5',
    spanText: 'black',
    cardBg: '#e3e3e3',
    cardText: 'black',
    cardButtonBg: '#333886',
    cardButtonText: 'white'
};

export const darkTheme: Theme = {
    bg: '#212737',
    contentBg: '#202020',
    headerBg: '#293044',
    text: '#e9e9e9',
    menuActive: '#eab308',
    iconsColor: '',
    footerText: '#878788',
    spanBg: '#1f2534',
    spanText: 'white',
    cardBg: '#272e41',
    cardText: 'white',
    cardButtonBg: '#333886',
    cardButtonText: 'white'
};

export const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
    :root {
        background-color: ${({ theme }) => theme.bg};
        font-family: Onest, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
`;