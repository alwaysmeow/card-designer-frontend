import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CustomSelect({ options, onSelect })
{
    const [focus, setFocus] = useState(false);
    const [selected, setSelect] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target))
                setFocus(false);
        };

        if (focus)
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);
    }, [focus]);

    if (onSelect == null)
        onSelect = () => {};

    const handleSelect = (event) => {
        setSelect(Number(event.target.getAttribute('index')));
        setFocus(false);
        onSelect(event);
    }

    return (
        <div className="bg-white h-6 rounded-md text-dark overflow-visible" ref={containerRef}>
            {
                focus ?
                    <div 
                        className={`overflow-scroll h-18 rounded-md -translate-y-${selected === 0 ? 0 : selected + 1 === options.length ? 12 : 6}`}
                    >
                        <div className={`flex flex-col -translate-y-${selected > 1 ? 6 : 0}`}>
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
                                            {index + 1}
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
                                            {index + 1}
                                        </div>
                                    )
                            })
                        }
                        </div>
                    </div>
                :
                    <div className="relative flex flex-col overflow-hidden h-6" 
                        onClick={() => {
                            setFocus(true);
                        }}
                    >
                        <div className="px-2">
                            {selected + 1}
                        </div>
                        <FaChevronDown className="absolute top-0 right-0 h-3 my-1.5 mx-0.5" color="#323e48"/>
                    </div>
            }
        </div>
    )
}

export default CustomSelect;