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

    const [colorset, setColorset] = useState(0);

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
        const newColorset = event.target.getAttribute('index');
        setColorset(newColorset);
        dispatchBankColors(newColorset);
    }

    const onMirColorsChange = (event) => {
        const optionIndex = event.target.getAttribute('index');
        dispatch(setMirLogoColors(colors.system[optionIndex]));
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
                    options={bankLogoMinimal ? colors.minimal : colors.full} 
                    onSelect={onBankColorsChange}
                />
            </div>
            <div className="gap-3">
                <div>Банковская система</div>
                <CustomSelect 
                    options={colors.system} 
                    onSelect={onMirColorsChange}
                />
            </div>
            <button className="min-w-max text-white bg-pink p-1 pr-4 pl-4 rounded-full hover:bg-opacity-80"
                onClick={onReady}
            >
                Готово
            </button>
        </div>
    )
}

export default Panel;