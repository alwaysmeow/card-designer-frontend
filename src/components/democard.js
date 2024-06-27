import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import crop from '../tools/crop';
import BankMiniLogo from '../img/bank-letter.svg';
import BankName from '../img/bank-name.svg';

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
        <div className="flex-col aspect-card justify-between w-96 mx-auto border-2 border-black rounded-xl overflow-hidden"
            style={src ? {
                backgroundImage: `url(${src})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
             } : {}}
        >
            <div className="h-1/2">
                <div className='flex h-1/2 max-w-min bg-dark rounded-br-xl'>
                    <BankMiniLogo className='fill-current text-pink' height='100%'/>
                    <BankName className='fill-current text-white' height='100%'/>
                </div>
            </div>
            <div className="text-lg font-mono font-medium h-1/2 px-5">
                <div className="text-center text-2xl tracking-widest mb-4">1234 5678 9012 3456</div>
                <div className="text-center">07/25</div>
                <div className="ml-2 mb-2">JOHN DOE</div>
            </div>
        </div>
    )
}

export default DemoCard;