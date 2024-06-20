import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function Сropper() {
    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState();
    const [croppedImageUrl, setCroppedImageUrl] = useState(null);

    const onCropComplete = (crop) => {
        // do smth
    };

    const onCropChange = (crop) => {
        setCrop(crop);
        console.log(crop);
    };

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setSrc(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="flex-col justify-center items-center w-3/4 mx-auto p-10 border-2 border-pink rounded-xl ">
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
            <input className="color-pink" type="file" accept="image/*" onChange={onSelectFile} />
            {croppedImageUrl && (
                <img alt="Cropped Image" src={croppedImageUrl} />
            )}
        </div>
    );
}

export default Сropper;