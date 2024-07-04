import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { switchBankLogoSide, switchBankLogoMinimal, setBankLogoColors, setMirLogoColors } from '../store/templateSlice';
import { setStatus } from "../store/statusSlice";
import colors from "../tools/colors";
import prepareData from "../tools/prepareData";
import { sendDesignData } from '../tools/requests'
import CustomSelect from "./customSelect";

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
        console.log('mini');
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
        <div className="flex justify-center gap-5 bg-grey p-5 text-dark h-40">
            <div className="gap-3">
                <div>Положение логотипа</div>
                <CustomSelect 
                    type="text"
                    selected={bankLogoSideIndex}
                    options={['Слева', 'Cправа']}
                    onChange={onSideChange}
                />
            </div>
            <div className="gap-3">
                <div>Минимизация</div>
                <input type="checkbox" onClick={onMinimizationClick}/>
            </div>
            <div className="gap-3">
                <div>Логотип</div>
                <CustomSelect 
                    type="color"
                    selected={bankColorset}
                    options={bankLogoMinimal ? colors.minimal : colors.full} 
                    onSelect={onBankColorsChange}
                />
            </div>
            <div className="gap-3">
                <div>Банковская система</div>
                <CustomSelect
                    type="color"
                    selected={mirColorset}
                    options={colors.system}
                    onSelect={onMirColorsChange}
                />
            </div>
            <button className="text-white bg-pink p-1 pr-4 pl-4 my-auto rounded-full hover:bg-opacity-80"
                onClick={onReady}
            >
                Готово
            </button>
        </div>
    )
}

export default Panel;