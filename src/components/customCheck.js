import React, { useState, useRef, useEffect } from "react";

function CustomCheck({ value, onSwitch }) {
    return (
        <div className={`flex h-6 w-12 rounded-full bg-${value ? 'pink' : 'dark'} bg-opacity-20 duration-300`}
            onClick={onSwitch}
        >
            <div className={`translate-x-${value ? '6' : '0'} h-6 w-6 rounded-full bg-${value ? 'pink' : 'dark'} duration-300`}/>
        </div>
    )
}

export default CustomCheck;