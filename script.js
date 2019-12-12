const  viewport = document.getElementById("viewport");
const finish = document.getElementById("viewportFinish");



//Create cardsgame function
function ImgCards(img, id) {
    this.imgProperty = img;
    this.id = id;

    this.getImage = function(){
        var element = document.createElement("img");
        element.src = this.imgProperty;
        return element;
    };
}

// create cards object

var img1 = new ImgCards("images/aceofpents.png", 0);
var img2 = new ImgCards("images/castle.png", 1);
var img3 = new ImgCards("images/chariot.png",2);
var img4 = new ImgCards("images/death.png",3);
var img5 = new ImgCards("images/eightofwands.png",4);
var img6 = new ImgCards("images/fourofpents.png",5);
var img7 = new ImgCards("images/fourofwands.png",6);
var img8 = new ImgCards("images/palms.png",7);
var imgDesk = new ImgCards("images/aceofswords.png",8);

//create cards tabs
var tabCards = [img1, img2, img3, img4, img5, img6, img7, img8];
var tabCards2 = [img1, img2, img3, img4, img5, img6, img7, img8];



// shuffle cards
function shuffle(elem) {
    // recuperer indice aleatoire
    // affecter la valeur a result => elem[indice]
    // supprimer indice dans tableau elem
    var result = [];
    var len = elem.length;
    for(let i = 0; i < len; i++){
        var index = Math.floor (Math.random() * elem.length);
        result.push(elem[index]);
        elem.splice(index,1);
    }

    return result;
}

var arrayC=[];

function imgviewing (param)
{
    // desk charging
    for (let i = 0; i < param.length; i++) {

        let image = imgDesk.getImage();

        viewport.appendChild(image);
    // cards image viewing
        image.onclick = function () {
            //console.log(param[i]);
            image.src = param[i].imgProperty;

            arrayC.push(param[i].id);
            console.log(arrayC);
            //image.src = this.imgProperty;
        };
    }

}
tabCards = shuffle(tabCards);
tabCards2 = shuffle(tabCards2);
imgviewing(tabCards);
imgviewing(tabCards2);



function comparer () {





}













// "/images/aceofpents.png",
//     "/images/castle.png",
//     "/images/chariot.png",
//     "/images/death.png",
//     "/images/eightofwands.png",
//     "/images/fourofpents.png",
//     "/images/fourofwands.png",
//     "/images/palms.png",);








