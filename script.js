const  viewport = document.getElementById("viewport");
const finish = document.getElementById("viewportFinish");
var tbl = [];
var tbl2 = [];

//Create cardsgame function
function ImgCards(img, id) {

    this.imgProperty = img;
    this.deskbacground = "images/aceofswords.png";
    this.id = id;
    this.element = null;
    this.create = function()
    {
        this.element = document.createElement("img");
        this.element.src = this.deskbacground;
        viewport.appendChild(this.element);
        let that = this;
        this.element.onclick = function() {
            this.src = that.imgProperty;
            tbl.push(that);
            tbl2.push(this);
            that.comparer();
        }
    };
    this.get = function ()
    {
        return this.element;
    };
     // this.clickCards = function ()
     // {
     //    this.element.src = this.imgProperty;
     // };
    this.comparer = function () {
        //alert(tbl);
        if (tbl.length === 2) {

            if (tbl[0].id === tbl[1].id) {
                alert("gagné");

            } else {
                console.log(tbl[0]);

                setTimeout(function () {
                        tbl2[0].src = tbl[0].deskbacground;
                        tbl2[1].src = tbl[1].deskbacground;
                    }
                    , 10000);
                tbl = [];
                tbl2 = [];
            }
        }}

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

var tabs = [tabCards,tabCards2];



 function shuffle(array) {
     array.sort(() => Math.random() - 0.5); }

shuffle (tabCards);
shuffle(tabCards2);



function imgviewing (param)
    {
        for (let i = 0; i < param.length; i++) {
            // desk charging
            param[i].create();
            param [i].get();
        }
    }

imgviewing(tabCards);
imgviewing(tabCards2);







