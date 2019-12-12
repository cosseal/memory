const  viewport = document.getElementById("viewport");
const finish = document.getElementById("viewportFinish");
let i;


//Create cardsgame function
function ImgCards(img) {
    this.imgProperty = img;

    this.getImage = function(){
        var element = document.createElement("img");
        element.src = this.imgProperty;
        return element;
    };
}

// create cards object

var img1 = new ImgCards("images/aceofpents.png");
var img2 = new ImgCards("images/castle.png");
var img3 = new ImgCards("images/chariot.png");
var img4 = new ImgCards("images/death.png");
var img5 = new ImgCards("images/eightofwands.png");
var img6 = new ImgCards("images/fourofpents.png");
var img7 = new ImgCards("images/fourofwands.png");
var img8 = new ImgCards("images/palms.png");
var imgDesk = new ImgCards("aceofswords.png");

//create cards tabs
var tabCards = [img1, img2, img3, img4, img5, img6, img7, img8];
var tabCards2 = [img1, img2, img3, img4, img5, img6, img7, img8];


// random cards
function random(elem) {
    Math.floor(Math.random(elem));
}


for (i=0; i <tabCards.length; i++){
    random(tabCards);
    var image = tabCards[i].getImage();
    viewport.appendChild(image);

    // if (tabCards [i].onclick) {
    //     var image = tabCards[i].getImage();
    //     viewport.appendChild(image);
    // }



}
for (i=0; i <tabCards2.length; i++){
    image = tabCards2[i].getImage();
    viewport.appendChild(image);
}









// "/images/aceofpents.png",
//     "/images/castle.png",
//     "/images/chariot.png",
//     "/images/death.png",
//     "/images/eightofwands.png",
//     "/images/fourofpents.png",
//     "/images/fourofwands.png",
//     "/images/palms.png",);








