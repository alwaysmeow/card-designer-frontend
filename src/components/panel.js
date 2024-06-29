import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { switchBankLogoSide, switchBankLogoMinimal, setBankLogoColors, setMirLogoColors } from '../store/templateSlice'

function Panel() {
    const dispatch = useDispatch();
    const bankLogoMinimal = useSelector((state) => state.template.bankLogoMinimal);
    const [colorset, setColorset] = useState(0);

    const colors = {
        full: [
            {
                bg: 'none',
                letter: 'pink',
                text: 'dark',
            },
            {
                bg: 'none',
                letter: 'pink',
                text: 'white',
            },
            {
                bg: 'white',
                letter: 'pink',
                text: 'dark',
            },
            {
                bg: 'dark',
                letter: 'pink',
                text: 'white',
            },
            {
                bg: 'pink',
                letter: 'white',
                text: 'white',
            },
        ],
        minimal: [
            {
                bg: 'none',
                letter: 'pink',
                text: 'none',
            },
            {
                bg: 'white',
                letter: 'pink',
                text: 'none',
            },
            {
                bg: 'dark',
                letter: 'pink',
                text: 'none',
            },
            {
                bg: 'pink',
                letter: 'white',
                text: 'none',
            },
        ],
        system: [
            {
                main: "default",
                bg: "none",
            },
            {
                main: "default",
                bg: "white",
            },
            {
                main: "dark",
                bg: "none",
            },
            {
                main: "white",
                bg: "none",
            },
            {
                main: "dark",
                bg: "white",
            },
            {
                main: "white",
                bg: "dark",
            },
        ]
    }

    const onSideChange = () => {
        dispatch(switchBankLogoSide());
    }

    const dispatchBankColors = (colorset) => {
        if (bankLogoMinimal)
            dispatch(setBankLogoColors(colors.minimal[colorset]));
        else
            dispatch(setBankLogoColors(colors.full[colorset]));
    }

    const onMinimizationClick = () => {
        dispatch(switchBankLogoMinimal());
        setColorset(0);
        dispatchBankColors(0);
    }

    const onBankColorsChange = (event) => {
        const newColorset = event.target.options[event.target.selectedIndex].index;
        setColorset(newColorset);
        dispatchBankColors(newColorset);
    }

    const onMirColorsChange = (event) => {
        const optionIndex = event.target.options[event.target.selectedIndex].index;
        dispatch(setMirLogoColors(colors.system[optionIndex]));
    }

    return (
        <div className="flex justify-center gap-5 bg-grey p-5">
            <div className="gap-3">
                <div>Положение логотипа</div>
                <select onChange={onSideChange}>
                    <option>Слева</option>
                    <option>Справа</option>
                </select>
            </div>
            <div className="gap-3">
                <div>Минимизация</div>
                <input type="checkbox" onClick={onMinimizationClick}/>
            </div>
            <div className="gap-3">
                <div>Логотип</div>
                <select onChange={onBankColorsChange} value={colorset + 1}>
                    { bankLogoMinimal ? 
                        colors.minimal.map((item, index) => {
                            return <option key={index} index={index}>{index + 1}</option>
                        })
                    : 
                        colors.full.map((item, index) => {
                            return <option key={index} index={index}>{index + 1}</option>
                        })
                    }
                </select>
            </div>
            <div className="gap-3">
                <div>Банковская система</div>
                <select onChange={onMirColorsChange}>
                    {
                        colors.system.map((item, index) => {
                            return <option key={index} index={index}>{index + 1}</option>
                        })
                    }
                </select>
            </div>
            <button className="min-w-max text-white bg-pink p-1 pr-4 pl-4 rounded-full hover:bg-opacity-80">
                Готово
            </button>
        </div>
    )
}

export default Panel;