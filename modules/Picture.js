export default class Picture{
    #wrapperImgs = document.getElementById('wrapperImgs');

    constructor(url){
        this.url = url;
    }
 
    addPicture(){
        const picture = document.createElement('img');
        picture.src = this.url;
        this.#wrapperImgs.appendChild(picture);
    }

    deletePicture(){
        this.#wrapperImgs.removeChild(this.#wrapperImgs.firstChild)
    }
}
