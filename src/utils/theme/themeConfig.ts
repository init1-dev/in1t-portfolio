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
    stackBg: string;
    strongText: string;
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
    cardBg: '#e9e9e9',
    cardText: 'black',
    cardButtonBg: '#333886',
    cardButtonText: 'white',
    stackBg: '#e9e9e9',
    strongText: 'rgb(213 162 3)'
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
    cardButtonText: 'white',
    stackBg: '#2b3247',
    strongText: 'rgb(254 240 138 / 1)'
};

export const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
    :root {
        background-color: ${({ theme }) => theme.bg};
        font-family: Onest, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
`;