import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import crop from '../tools/crop';


function DemoCard () {
    const image = useSelector((state) => state.crop.image)
    const cropData = useSelector((state) => state.crop.cropData)
    const [src, setSrc] = useState(null)
    
    useEffect(() => {
        crop(image, cropData)
        .then((url) => { setSrc(url) })
        .catch(() => { console.log('err'); })
    })

    return (
        <div className="flex-col aspect-card justify-between w-80 mx-auto p-5 border-2 border-black rounded-xl"
            style={src ? {
                backgroundImage: `url(${src})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
             } : {}}
        >
            <div className="h-1/2">

            </div>
            <div className="text-sm font-mono font-medium h-1/2">
                <div className="text-center text-lg tracking-widest mb-4">1234 5678 9012 3456</div>
                <div className="text-center">07/25</div>
                <div className="ml-2 mb-2">JOHN DOE</div>
            </div>
        </div>
    )
}

export default DemoCard;