let minBtn = document.getElementsByClassName("minBtn");
let showBtn = document.getElementsByClassName("showBtn");
let showBtnIcn = document.getElementsByClassName("showBtnIcn");
let minBtnIcn = document.getElementsByClassName("minBtnIcn");
let listInner = document.getElementsByClassName("listInner");
let infoShow = document.getElementsByClassName("infoShow");
let infoDiv = document.getElementsByClassName("infoDiv");

for(i = 0; i < showBtn.length; i++){
    sb = showBtn[i];
    mB = minBtn[i];
    sbi = showBtnIcn[i];
    mbi = minBtnIcn[i];
    lI = listInner[i];
    iS = infoShow[i];
    iD = infoDiv[i];
    sb.setAttribute('data-id', i);
    sbi.setAttribute('data-id', i);
    mbi.setAttribute('data-id', i);
    mB.setAttribute('data-id', i);
    lI.setAttribute('data-id', i);
    iS.setAttribute('data-id', i);
    iD.setAttribute('data-id', i);
}

//showing innerDiv

for(i = 0; i < showBtn.length; i++){
    showBtn[i].addEventListener("click", (e)=>{
        var elmt = e.target;
        var id = elmt.getAttribute('data-id')
        document.querySelectorAll(`[data-id="${id}"]`)[6].style.maxHeight = 'unset';
        document.querySelectorAll(`[data-id="${id}"]`)[1].classList.remove("active");
        document.querySelectorAll(`[data-id="${id}"]`)[3].classList.add("active");
    })
}
for(i = 0; i < showBtn.length; i++){
    minBtn[i].addEventListener("click", (e)=>{
        var elmt = e.target;
        var id = elmt.getAttribute('data-id')
        document.querySelectorAll(`[data-id="${id}"]`)[6].style.maxHeight = '0px';
        document.querySelectorAll(`[data-id="${id}"]`)[3].classList.remove("active");
        document.querySelectorAll(`[data-id="${id}"]`)[1].classList.add("active");
    })
}
for(i = 0; i < showBtn.length; i++){
    infoShow[i].addEventListener("click", (e)=>{
        var elmt = e.target;
        var id = elmt.getAttribute('data-id')
        document.querySelectorAll(`[data-id="${id}"]`)[5].classList.toggle("infoDivActive");
    })
}

/*
0-ques-icon
1-div.showBtn
2-i.showBtnIcn
3-div.minBtn
4-i.minBtnIcn
5-div.infoDiv
6-div.listInner
*/

// for(i = 0; i < showBtn.length; i++){
//     mB = minBtn[i]
//     showBtn[i].addEventListener('click', (e)=>{
//         var elmt = e.target;
//         elmt.classList.toggle("active");
//         var id = elmt.getAttribute("data-id");
//         for(p = 0; p < minBtn.length; p++){
//             var mId = minBtn[p].getAttribute('data-id');
//             if(id == mId){
//                 minBtn[p].classList.toggle("active")
//             }
//         }
//     })
// }

/*for(i = 0; i < showBtn.length;i++){
    // var infoHid = minBtn[i];
    showBtn[i].addEventListener("click", function(){
        this.style.display = 'none';
        // infoHid.style.display = 'block';
        minBtn[(i-1)].style.display = 'block';
        var par = this.parentNode;
        var sib = par.nextElementSibling;
        var fsib = sib.nextElementSibling;
        // if(fsib.style.display == '0px'){
        //     fsib.style.maxHeight = '85px';
        // } else{
        //     fsib.style.maxHeight = '85px';
        // }
        fsib.style.display = 'block';
        
    })
};
for(i = 0; i < minBtn.length;i++){
    // var infoDis = showBtn[i];
    minBtn[i].addEventListener("click",function(){
        this.style.display = 'none';
        // infoDis.style.display = 'block';
        showBtn[(i-1)].style.display = 'block';
        var par = this.parentNode;
        var sib = par.nextElementSibling;
        var fsib = sib.nextElementSibling;
        // if(fsib.style.maxHeight == '85px'){
        //     fsib.style.maxHeight = '0px';
        // } else{
        //     fsib.style.maxHeight = '0px';
        // }
        fsib.style.display = 'block';
    })
};*/
// console.log(window.screen.availWidth)

const sideIconLeft = document.getElementById("sideIconLeft");
const sideIconRight = document.getElementById("sideIconRight");
const leftSec = document.getElementsByClassName("leftSec")[0];
let leftSecStyle = getComputedStyle(leftSec);

sideIconLeft.addEventListener('click', ()=>{
    sideIconLeft.style.display = 'none',
    sideIconRight.style.display = 'block',
    document.body.classList.toggle("collupsed");
    if(leftSecStyle.position == 'absolute'){
        leftSec.classList.toggle("sideColl")
    }
});
sideIconRight.addEventListener('click', ()=>{
    sideIconLeft.style.display = 'block',
    sideIconRight.style.display = 'none',
    document.body.classList.toggle("collupsed");
    if(leftSecStyle.position == 'absolute'){
        leftSec.classList.toggle("sideColl")
    }
});

// top btn functions

const topLeftBtn = document.querySelector(".topLeft");
const topRightBtn = document.querySelector(".topRight");

topLeftBtn.addEventListener('click', ()=>{
    topLeftBtn.classList.add("topBtnSelected");
    topRightBtn.classList.remove("topBtnSelected");
})
topRightBtn.addEventListener('click', ()=>{
    topRightBtn.classList.add("topBtnSelected");
    topLeftBtn.classList.remove("topBtnSelected");
})

// changing iframes

var vdoIframe = document.getElementById("vdoIframe");
var vdoPlayerDiv = document.getElementsByClassName("vdoPlayer");

for(k = 0; k < vdoPlayerDiv.length; k++){
    vdoPlayerDiv[k].addEventListener("click", (e)=>{
        var elmnt = e.target;
        var link = elmnt.getAttribute("data-link");
        vdoIframe.setAttribute("src", link)
    });
}

// for(let i = 0; i < vdoPlayerDiv; i++){
//     vdoPlayerDiv[i].addEventListener("click", ()=>{
        
//     })
// }
