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
        mirLogoColor: "default"
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
        setMirLogoColor: (state, action) => {
            state.mirLogoColor = action.payload;
        }
    },
});

export const { switchBankLogoSide, switchBankLogoMinimal, setBankLogoColors, setMirLogoColor } = templateSlice.actions;

export default templateSlice.reducer;