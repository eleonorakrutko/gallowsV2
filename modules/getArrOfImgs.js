import Picture from "./Picture.js";

function getArrOfImgs(){
    const p1 = new Picture('./imgs/1.png');
    const p2 = new Picture('./imgs/2.png');
    const p3 = new Picture('./imgs/3.png');
    const p4 = new Picture('./imgs/4.png');
    return [p1,p2,p3,p4]
}

export default getArrOfImgs