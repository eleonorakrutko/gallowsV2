import getArrOfImgs from "./getArrOfImgs.js";

function renderStartPicture(){
    const [startPicture] = getArrOfImgs();
    startPicture.addPicture();
}

export default renderStartPicture