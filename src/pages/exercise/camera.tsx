import React, { useState } from 'react';

const CameraPage: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleCapture = async () => {
        try {
            const mediaDevices = navigator.mediaDevices as any;
            const stream = await mediaDevices.getUserMedia({ video: true });

            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();

            video.onloadedmetadata = () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                const context = canvas.getContext('2d');
                context?.drawImage(video, 0, 0, canvas.width, canvas.height);

                const dataUrl = canvas.toDataURL('image/jpeg');
                setImage(dataUrl);

                stream.getTracks().forEach((track: MediaStreamTrack) => {
                    track.stop();
                });
            };
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    return (
        <div>
            <button onClick={handleCapture}>Capture Image</button>
            {image && <img src={image} alt="Captured" />}
        </div>
    );
};

export default CameraPage;