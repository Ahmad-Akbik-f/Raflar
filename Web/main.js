// Start Setting box
let settingBOX = document.querySelector(".setting");
let gear = document.querySelector(".setting .fix-setting i")
document.querySelector(".setting .fix-setting").onclick = function(){
    settingBOX.classList.toggle("open-setting")
    gear.classList.toggle("fa-spin")
}
//src
let setColors = document.querySelectorAll(".setting .setting-box .colors span")  
if(window.localStorage.getItem("color") != null){
    document.documentElement.style.setProperty('--main-color',window.localStorage.getItem("color"))
}
setColors.forEach(el => {
    if(el.dataset.color == window.localStorage.getItem("color")){
        el.classList.add("active")
    }else if(window.localStorage.getItem("color") != null){
        el.classList.remove("active")
    }
    el.onclick = function(){
        setColors.forEach(ele => {
            ele.classList.remove("active");
        });
        el.classList.add("active");
        let userColor = el.dataset.color;
        document.documentElement.style.setProperty('--main-color',userColor)
        window.localStorage.setItem("color",userColor)
    }
});
//
let randBackgroundOption = document.querySelectorAll(".setting .setting-box  .background-option span");
let randBackgroundOptionYesNo;
if(window.localStorage.getItem("randBackground") != null){
    randBackgroundOptionYesNo = window.localStorage.getItem("randBackground");
}else{
    randBackgroundOptionYesNo = 'yes';
}
randBackgroundOption.forEach(el => {
    if(randBackgroundOptionYesNo== el.classList[0]){
        el.classList.add("active");
    }else{
        el.classList.remove("active");
    }
    el.onclick = function(){
        randBackgroundOption.forEach(ele => {
            ele.classList.remove("active");
        });
        el.classList.add("active");
        randBackgroundOptionYesNo = el.classList[0];
        window.localStorage.setItem("randBackground",el.classList[0]);
        randImgChanger();
    }
});
//Start landing page random images
let landPage = document.querySelector(".landing")
let imgArray = ["./Pics/Landing-1.jpg","./Pics/Landing-2.jpg","./Pics/Landing-3.jpg"]
let genNum;
let imginter;
function randImgChanger(){
    if(randBackgroundOptionYesNo == 'yes'){
        imginter = setInterval(()=>{
            let radLandNum = Math.floor(Math.random() * imgArray.length);
            if(genNum == radLandNum){
                radLandNum == 0?radLandNum++:radLandNum--;
            }
            landPage.style.backgroundImage = `url(${imgArray[radLandNum]})`;
            genNum = radLandNum;
        },10000)
    }else{
        clearInterval(imginter)
    }
}
randImgChanger();
// End Setting box
//End landing page random images
// Start heading
let landMenu = document.querySelector(".landing .heading .land-menu");
let menuLinksRes = document.querySelector(".landing .heading ul");
let menuLinks = document.querySelectorAll(".landing .heading ul a");
let closeMenu = document.querySelector(".landing .heading ul span");
landMenu.onclick = function(el){
    el.stopPropagation();
    menuLinksRes.classList.add("links");
    closeMenu.onclick = function(){
        menuLinksRes.classList.remove("links");
    }
}
menuLinksRes.onclick = function(el){
    el.stopPropagation()
}
document.onclick = function(el){
    if(menuLinksRes.classList.contains("links")){
        if(el.target != menuLinks && el.target != menuLinksRes){
            menuLinksRes.classList.remove("links");
        }
    }
}
window.oncontextmenu = function(){
    menuLinksRes.classList.add("links");
    closeMenu.onclick = function(){
        menuLinksRes.classList.remove("links");
    }
}
//
menuLinks.forEach(ele =>{
    ele.addEventListener('click',()=>{
        menuLinks.forEach(el=> {
            el.classList.remove("active")
        });
        ele.classList.add("active")
    })
})
// End heading
// Start our skills
//Arrow button
let arrowBut = document.createElement("div");
let about = document.querySelector(".about")
arrowBut.className = "arrow-button"
document.body.appendChild(arrowBut)
//Arrow button
let skills = document.querySelector(".skills")
let skillsProg = document.querySelectorAll(".skills .sk > span .prog");
window.onscroll = function(){
    if(scrollY >= skills.offsetTop - 80){
        skillsProg.forEach((el)=>{
            el.style.width = el.dataset.prog;
        })
    }
    //Arrow button
    if(scrollY > 600){
        arrowBut.style.opacity = "1"
    }else{
        arrowBut.style.opacity = "0"
    }
    //Arrow button
}
//Arrow button
arrowBut.onclick = function(){
    landPage.scrollIntoView({
        behavior:'smooth'
    })
}
//Arrow button
// End our skills
// Start our Gallery
let ourGalleryImgs = document.querySelectorAll(".gallery .gallery-imgs img")
ourGalleryImgs.forEach(el => {
    el.onclick = function(){
        let overLay = document.createElement("div")
        overLay.classList.add("over-lay-gallery")
        document.body.appendChild(overLay);
        let popUpImgBox = document.createElement("div")
        popUpImgBox.className = "pop-up-box"
        overLay.appendChild(popUpImgBox);
        let imgText = document.createElement("h3")
        imgText.textContent = el.alt
        popUpImgBox.appendChild(imgText)
        let popUpImg = document.createElement("img")
        popUpImg.src = el.src
        popUpImg.className = "pop-up-img"
        popUpImgBox.appendChild(popUpImg);
        let closeImgButton = document.createElement("span")
        closeImgButton.textContent = "X"
        closeImgButton.className = "img-close-x"
        popUpImgBox.appendChild(closeImgButton)
        closeImgButton.onclick = function(){
            document.body.removeChild(overLay)
        }
    }
});
// End our Gallery
// Start nav bullets
let navBullets = document.querySelectorAll(".nav-bullets .bul")
let navBulletCont = document.querySelector(".nav-bullets")
navBullets.forEach(el=>{
    el.onclick = (e) => {
        document.querySelector(`${e.target.dataset.bul}`).scrollIntoView({
            behavior:'smooth'
        })
    }
})
//Show bullets
let bulletsOption = document.querySelectorAll(".setting .setting-box .bullets-option span");
let bulletsOptionYesNO;
if(window.localStorage.getItem("showBullets") != null){
    bulletsOptionYesNO = window.localStorage.getItem("showBullets");
}else{
    bulletsOptionYesNO = 'yes';
}
bulletsOption.forEach(el => {
    if(bulletsOptionYesNO == el.classList[0]){
        el.classList.add("active");
    }else{
        el.classList.remove("active");
    }
    el.onclick = function(){
        bulletsOption.forEach(ele => {
            ele.classList.remove("active");
        });
        el.classList.add("active");
        bulletsOptionYesNO = el.classList[0];
        window.localStorage.setItem("showBullets",el.classList[0]);
        showBul()
    }
});
function showBul(){
    if(bulletsOptionYesNO =='yes'){
       navBulletCont.style.display = "block" 
    }else{
        navBulletCont.style.display = "none" 
    }
}
showBul()
// End nav bullets
//Reset options
let resetOptions = document.querySelector(".rest-option")
resetOptions.onclick = () =>{
    let resetConfirm = confirm("Are you sure you want to reset The options")
    if(resetConfirm){
        window.localStorage.clear();
        window.location.reload();
    }
}
//Reset options
//headroom
let heading = document.querySelector(".heading");
let headroom  = new Headroom(heading);
headroom.init();
//headroom