let IS_PROD = true;

const server = IS_PROD ?
    "https://zoom-video-call-g69m.onrender.com" :

    "http://localhost:8000"
    
export default server;
