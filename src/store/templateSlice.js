import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
    name: 'template',
    initialState: {
        bankLogoSide: 'left',
        bankLogoMinimal: false,
        bankLogoColors: {
            bg: 'none',
            letter: 'pink',
            text: 'dark',
        },
        mirLogoColors: {
            main: "default",
            bg: "none",
        },
    },
    reducers: {
        switchBankLogoSide: (state) => {
            if (state.bankLogoSide === 'left') {
                state.bankLogoSide = 'right';
            } else {
                state.bankLogoSide = 'left';
            }
        },
        switchBankLogoMinimal: (state) => {
            state.bankLogoMinimal = !state.bankLogoMinimal;
        },
        setBankLogoColors: (state, action) => {
            state.bankLogoColors = action.payload;
        },
        setMirLogoColors: (state, action) => {
            state.mirLogoColors = action.payload;
        }
    },
});

export const { switchBankLogoSide, switchBankLogoMinimal, setBankLogoColors, setMirLogoColors } = templateSlice.actions;

export default templateSlice.reducer;