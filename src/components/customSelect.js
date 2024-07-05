import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CustomSelect({ type, selected, options, onSelect, onChange })
{
    const [focus, setFocus] = useState(false);
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target))
                setFocus(false);
        };

        if (focus)
        {
            document.addEventListener('mousedown', handleClickOutside);
            autoScroll();
        }
        else
            document.removeEventListener('mousedown', handleClickOutside);
    }, [focus]);

    if (onSelect == null)
        onSelect = () => {};

    if (onChange == null)
        onChange = () => {};

    const getTargetIndex = (target) => {
        let index = target.getAttribute('index');
        if (index)
            return Number(index)
        else
            return getTargetIndex(target.parentElement)
    }

    const handleSelect = (event) => {
        const newSelected = getTargetIndex(event.target);
        onSelect(newSelected);
        if (newSelected != selected)
            onChange(newSelected);
        setFocus(false);
    }

    const autoScroll = () => {
        const tranlate = selected < 2 ? 0 : selected + 1 === options.length ? selected : selected - 1
        const position = tranlate * 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollRef.current)
            scrollRef.current.scrollTop = position;
    }

    return (
        <div className={`bg-white h-6 rounded-md text-dark overflow-visible z-${focus ? 20 : 10}`} ref={containerRef}>
            {
                focus ?
                    <div 
                        className={`flex flex-col overflow-scroll h-${options.length > 2 ? 18 : 12 } rounded-md -translate-y-${selected == 0 ? 0 : 1 + Number(selected) === options.length && options.length > 2 ? 12 : 6}`}
                        ref={scrollRef}
                    >
                        {
                            options.map((item, index) => {
                                if (index == selected)
                                    return (
                                        <div 
                                            key={index} 
                                            value={item} 
                                            index={index}
                                            className="relative flex text-dark bg-grey hover:bg-dark hover:text-white h-6"
                                            onClick={handleSelect}
                                        >
                                            {
                                                type === "color" ?
                                                    Object.values(options[index]).map((item, index) => {
                                                        if (item !== "none")
                                                            return <div key={index} className={`bg-${item} h-3 w-3 my-1.5 ml-1.5 border-2`}/>
                                                    })
                                                : type === "text" ?
                                                    <div className="px-2">{ options[index] }</div>
                                                : 
                                                    <></>
                                            }
                                            <FaChevronUp className="absolute top-0 right-0 h-3 my-1.5 mx-0.5 fill-current"/>
                                        </div>
                                    )
                                else
                                    return (
                                        <div 
                                            key={index} 
                                            value={item} 
                                            index={index}
                                            className="flex bg-white h-6 hover:bg-dark hover:text-white"
                                            onClick={handleSelect}
                                        >
                                            {
                                                type === "color" ?
                                                    Object.values(options[index]).map((item, index) => {
                                                        if (item !== "none")
                                                            return <div key={index} className={`bg-${item} h-3 w-3 my-1.5 ml-1.5 border-2`}/>
                                                    })
                                                : type === "text" ?
                                                    <div className="px-2">{ options[index] }</div>
                                                : 
                                                    <></>
                                            }
                                        </div>
                                    )
                            })
                        }
                    </div>
                :
                    <div className="relative flex overflow-hidden h-6" 
                        onClick={() => {
                            setFocus(true);
                        }}
                    >
                        {
                            type === "color" ?
                                Object.values(options[selected]).map((item, index) => {
                                    if (item !== "none")
                                        return <div key={index} className={`bg-${item} h-3 w-3 my-1.5 ml-1.5 border-2`}/>
                                })
                            : type === "text" ?
                                <div className="px-2">{ options[selected] }</div>
                            : 
                                <></>
                        }
                        <FaChevronDown className="absolute top-0 right-0 h-3 my-1.5 mx-0.5" color="#323e48"/>
                    </div>
            }
        </div>
    )
}

export default CustomSelect;