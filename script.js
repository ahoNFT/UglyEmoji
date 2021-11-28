// these are the variables you can use as inputs to your algorithms
console.log(fxhash) // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
const container = document.createElement("p")
container.innerText = `
  random hash: ${fxhash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`
document.body.prepend(container)

                                                                                                                           
                                                                                                                           
//                   hhhhhhh                              NNNNNNNN        NNNNNNNNFFFFFFFFFFFFFFFFFFFFFFTTTTTTTTTTTTTTTTTTTTTTT
//                   h:::::h                              N:::::::N       N::::::NF::::::::::::::::::::FT:::::::::::::::::::::T
//                   h:::::h                              N::::::::N      N::::::NF::::::::::::::::::::FT:::::::::::::::::::::T
//                   h:::::h                              N:::::::::N     N::::::NFF::::::FFFFFFFFF::::FT:::::TT:::::::TT:::::T
//    aaaaaaaaaaaaa   h::::h hhhhh          ooooooooooo   N::::::::::N    N::::::N  F:::::F       FFFFFFTTTTTT  T:::::T  TTTTTT
//    a::::::::::::a  h::::hh:::::hhh     oo:::::::::::oo N:::::::::::N   N::::::N  F:::::F                     T:::::T        
//    aaaaaaaaa:::::a h::::::::::::::hh  o:::::::::::::::oN:::::::N::::N  N::::::N  F::::::FFFFFFFFFF           T:::::T        
//             a::::a h:::::::hhh::::::h o:::::ooooo:::::oN::::::N N::::N N::::::N  F:::::::::::::::F           T:::::T        
//      aaaaaaa:::::a h::::::h   h::::::ho::::o     o::::oN::::::N  N::::N:::::::N  F:::::::::::::::F           T:::::T        
//    aa::::::::::::a h:::::h     h:::::ho::::o     o::::oN::::::N   N:::::::::::N  F::::::FFFFFFFFFF           T:::::T        
//   a::::aaaa::::::a h:::::h     h:::::ho::::o     o::::oN::::::N    N::::::::::N  F:::::F                     T:::::T        
//  a::::a    a:::::a h:::::h     h:::::ho::::o     o::::oN::::::N     N:::::::::N  F:::::F                     T:::::T        
//  a::::a    a:::::a h:::::h     h:::::ho:::::ooooo:::::oN::::::N      N::::::::NFF:::::::FF                 TT:::::::TT      
//  a:::::aaaa::::::a h:::::h     h:::::ho:::::::::::::::oN::::::N       N:::::::NF::::::::FF                 T:::::::::T      
//   a::::::::::aa:::ah:::::h     h:::::h oo:::::::::::oo N::::::N        N::::::NF::::::::FF                 T:::::::::T      
//    aaaaaaaaaa  aaaahhhhhhh     hhhhhhh   ooooooooooo   NNNNNNNN         NNNNNNNFFFFFFFFFFF                 TTTTTTTTTTT      
                                                                                                                           
var ambilmata = ["eye1", "eye2", "eye3", "eye4"];

var mata = ambilmata[Math.floor(fxrand() * ambilmata.length)];

var mataa = './img/' + mata + '.png'

var ambilhidung = ["nose1", "nose2", "nose3", "nose4"];

var hidung = ambilhidung[Math.floor(fxrand() * ambilhidung.length)];

var hidungg = './img/' + hidung + '.png'

var ambilmulut = ["mouth1", "mouth2", "mouth3", "mouth4"];

var mulut = ambilmulut[Math.floor(fxrand() * ambilmulut.length)];

var mulutt = './img/' + mulut + '.png'

var ambilalis = ["eyebrow1", "eyebrow2", "eyebrow3", "eyebrow4"];

var alis = ambilalis[Math.floor(fxrand() * ambilalis.length)];

var aliss = './img/' + alis + '.png'

var ambilbackg = ["black", "white", "red", "green", "blue"];

var backg = ambilbackg[Math.floor(fxrand() * ambilbackg.length)];

var backgg = './img/' + backg + '.png'
   
    var img = new Image();
    img.src = './img/base.png';
    var img2 = new Image();
    img2.src = mataa;
    var img3 = new Image();
    img3.src = hidungg;
    var img4 = new Image();
    img4.src = mulutt;
    var img5 = new Image();
    img5.src = aliss;
    var img6 = new Image();
    img6.src = backgg;

    
    img.onload = function () {
        fill_canvas1(img);
    }
    img2.onload = function () {
        fill_canvas2(img2);
    }
    img3.onload = function () {
        fill_canvas3(img3);
    }
    img4.onload = function () {
        fill_canvas4(img4); 
    }
    img5.onload = function () {
        fill_canvas5(img5); 
    }
    img6.onload = function () {
        fill_canvas6(img6); 
    }

    function fill_canvas1(img1) {
  
        var canvas1 = document.getElementById('canvas1');
        var ctx1 = canvas1.getContext('2d');

        canvas1.width = img1.width;
        canvas1.height = img1.height;

        ctx1.drawImage(img1, 0, 0); 
    }

    function fill_canvas2(img2) {
       
        var canvas2 = document.getElementById('canvas2');
        var ctx2 = canvas2.getContext('2d');

        canvas2.width = img2.width;
        canvas2.height = img2.height;

        ctx2.drawImage(img2, 0, 0); 
    }

    function fill_canvas3(img3) {
       
        var canvas3 = document.getElementById('canvas3');
        var ctx3 = canvas3.getContext('2d');

        canvas3.width = img3.width;
        canvas3.height = img3.height;

        ctx3.drawImage(img3, 0, 0); 
    }

    function fill_canvas4(img4) {
      
        var canvas4 = document.getElementById('canvas4');
        var ctx4 = canvas4.getContext('2d');

        canvas4.width = img4.width;
        canvas4.height = img4.height;

        ctx4.drawImage(img4, 0, 0);
    }

    function fill_canvas5(img5) {
       
        var canvas5 = document.getElementById('canvas5');
        var ctx5 = canvas5.getContext('2d');

        canvas5.width = img5.width;
        canvas5.height = img5.height;

        ctx5.drawImage(img5, 0, 0);
    }

    function fill_canvas6(img6) {
       
        var canvas5 = document.getElementById('canvas6');
        var ctx6 = canvas6.getContext('2d');

        canvas6.width = img6.width;
        canvas6.height = img6.height;

        ctx6.drawImage(img6, 0, 0);
    }

window.$fxhashFeatures = {
    "Background": backg,
    "Eye": mata,
    "Nose": hidung,
    "Mouth": mulut,
    "Eyebrow": alis
}

