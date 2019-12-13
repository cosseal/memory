const  viewport = document.getElementById("viewport");
const finish = document.getElementById("viewportFinish");


//Create cardsgame function
function ImgCards(img, id, element) {
    this.imgProperty = img;
    this.id = id;
    this.element = element;
    this.create = function()
    {
        this.element = document.createElement("img");
        this.element.src = this.imgProperty;
        viewport.appendChild(this.element);
    };
    this.get = function () {
        return this.element;
    };
}

// create cards object

var img1 = new ImgCards("images/aceofpents.png", 0,);
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



 function shuffle(array) {
     array.sort(() => Math.random() - 0.5); }

shuffle (tabCards);
shuffle(tabCards2);

var arrayC=[];

function imgviewing (param)
{
    // desk charging
    for (let i = 0; i < param.length; i++) {
    param[i].create();
     var view = param [i].get();



    // cards image viewing
        view.onclick = function () {
            //element.src = param[i].imgProperty;
            arrayC.push(param[i].id);
            console.log(arrayC);
            console.log(param[i]);
        }
    }
}
//imgviewing(tabCards);
//imgviewing(tabCards2);

function comparer () {


    if (arrayC.length === 2) {
        if (tabCards.element.id === tabCards2.element.id ){

        }
        else {
            aff;
        }

    }
}

    comparer(tabCards,tabCards2);








imgviewing(tabCards);
imgviewing(tabCards2);

















// "/images/aceofpents.png",
//     "/images/castle.png",
//     "/images/chariot.png",
//     "/images/death.png",
//     "/images/eightofwands.png",
//     "/images/fourofpents.png",
//     "/images/fourofwands.png",
//     "/images/palms.png",);








