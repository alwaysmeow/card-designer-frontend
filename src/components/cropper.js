import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import { useDispatch } from 'react-redux';

import 'react-image-crop/dist/ReactCrop.css';
import { setImage, setCropData } from '../store/cropSlice';

function Сropper() {
    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState();
    
    const dispatch = useDispatch();

    const onCropComplete = (crop) => {
        dispatch(setCropData(crop));
    };

    const onCropChange = (crop) => {
        setCrop(crop);
    };

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setSrc(reader.result);
                dispatch(setImage(reader.result));
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="flex-col justify-center items-center gap-1 w-96 mx-auto p-5 border-2 border-pink rounded-xl">
            <div className="flex justify-center items-center aspect-card border-2 border-black mb-5">
                {src && (
                <ReactCrop
                    src={src}
                    crop={crop}
                    aspect={85.6/54}
                    onComplete={onCropComplete}
                    onChange={onCropChange}
                >
                    <img src = {src}/>
                </ReactCrop>
                )}
            </div>
            <input className="color-pink" type="file" accept="image/*" onChange={onSelectFile} />
        </div>
    );
}

export default Сropper;