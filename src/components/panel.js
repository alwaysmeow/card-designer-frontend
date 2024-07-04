import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { switchBankLogoSide, switchBankLogoMinimal, setBankLogoColors, setMirLogoColors } from '../store/templateSlice';
import { setStatus } from "../store/statusSlice";
import colors from "../tools/colors";
import prepareData from "../tools/prepareData";
import { sendDesignData } from '../tools/requests'
import CustomSelect from "./customSelect";
import CustomCheck from "./customCheck";

function Panel() {
    const dispatch = useDispatch();

    const bankLogoSide = useSelector((state) => state.template.bankLogoSide);
    const bankLogoMinimal = useSelector((state) => state.template.bankLogoMinimal);
    const bankLogoColors = useSelector((state) => state.template.bankLogoColors);
    const mirLogoColors = useSelector((state) => state.template.mirLogoColors);

    const cropData = useSelector((state) => state.crop.cropData)
    const image = useSelector((state) => state.crop.image)

    const [bankColorset, setBankColorset] = useState(0);
    const [mirColorset, setMirColorset] = useState(0);
    const [bankLogoSideIndex, setBankLogoSideIndex] = useState(0);

    const onSideChange = () => {
        dispatch(switchBankLogoSide());
        setBankLogoSideIndex(1 - bankLogoSideIndex);
    }

    const dispatchBankColors = (bankColorset) => {
        if (bankLogoMinimal)
            dispatch(setBankLogoColors(colors.minimal[bankColorset]));
        else
            dispatch(setBankLogoColors(colors.full[bankColorset]));
    }

    const onMinimizationClick = () => {
        dispatch(switchBankLogoMinimal());
        setBankColorset(0);
        dispatchBankColors(0);
    }

    const onBankColorsChange = (index) => {
        setBankColorset(index);
        dispatchBankColors(index);
    }

    const onMirColorsChange = (index) => {
        setMirColorset(index);
        dispatch(setMirLogoColors(colors.system[index]));
    }

    const onReady = () => {
        const data = prepareData(
            cropData, 
            bankLogoColors, 
            mirLogoColors, 
            bankLogoMinimal, 
            bankLogoSide
        );
        dispatch(setStatus("waiting"))
        sendDesignData(image, data)
        .then((response) => {
            if (response.status == 200)
                dispatch(setStatus('success'));
            else
                dispatch(setStatus('failure'));
            console.log(response);
        })
        .catch(() => {
            dispatch(setStatus('error'));
        })
    }

    return (
        <div className="flex justify-center gap-20 bg-grey p-8 text-dark rounded-xl">
            <div className="flex justify-center gap-10 my-auto">
                <div className="flex flex-col gap-2">
                    <div>Положение логотипа</div>
                    <CustomSelect 
                        type="text"
                        selected={bankLogoSideIndex}
                        options={['Слева', 'Cправа']}
                        onChange={onSideChange}
                    />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div>Минимизация</div>
                    <CustomCheck
                        value={bankLogoMinimal}
                        onSwitch={onMinimizationClick}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div>Цвета логотипов</div>
                    <CustomSelect 
                        type="color"
                        selected={bankColorset}
                        options={bankLogoMinimal ? colors.minimal : colors.full} 
                        onSelect={onBankColorsChange}
                    />
                    <CustomSelect
                        type="color"
                        selected={mirColorset}
                        options={colors.system}
                        onSelect={onMirColorsChange}
                    />
                </div>
            </div>
            <button className="text-white bg-pink py-1 px-6 my-auto rounded-full hover:bg-opacity-80"
                onClick={onReady}
            >
                Готово
            </button>
        </div>
    )
}

export default Panel;