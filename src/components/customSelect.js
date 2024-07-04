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

    const handleSelect = (event) => {
        const newSelected = event.target.getAttribute('index');
        onSelect(event);
        if (newSelected != selected)
            onChange(event);
        setFocus(false);
    }

    const autoScroll = () => {
        const tranlate = selected < 2 ? 0 : selected + 1 === options.length ? selected : selected - 1
        const position = tranlate * 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollRef.current)
            scrollRef.current.scrollTop = position;
    }

    return (
        <div className="bg-white h-6 rounded-md text-dark overflow-visible" ref={containerRef}>
            {
                focus ?
                    <div 
                        className={`flex flex-col overflow-scroll h-${options.length > 2 ? 18 : 12 } rounded-md -translate-y-${selected === 0 ? 0 : Number(selected) + 1 === options.length && options.length > 2 ? 12 : 6}`}
                        ref={scrollRef}
                    >
                        {
                            options.map((item, index) => {
                                if (index === selected)
                                    return (
                                        <div 
                                            key={index} 
                                            value={item} 
                                            index={index}
                                            className="relative px-2 text-dark bg-grey hover:bg-dark hover:text-white h-6 -translate-y-${}"
                                            onClick={handleSelect}
                                        >
                                            { index + 1 }
                                            <FaChevronUp className="absolute top-0 right-0 h-3 my-1.5 mx-0.5 fill-current"/>
                                        </div>
                                    )
                                else
                                    return (
                                        <div 
                                            key={index} 
                                            value={item} 
                                            index={index}
                                            className="px-2 bg-white hover:bg-dark hover:text-white h-6"
                                            onClick={handleSelect}
                                        >
                                            {
                                                index + 1
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
                            :
                                <div className="px-2">{selected + 1}</div>
                        }
                        <FaChevronDown className="absolute top-0 right-0 h-3 my-1.5 mx-0.5" color="#323e48"/>
                    </div>
            }
        </div>
    )
}

export default CustomSelect;