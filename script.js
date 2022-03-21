const svg1 = document.getElementById("svg1");
const svg2 = document.getElementById("svg2");
const primaryNav = document.querySelector(".nav_links");
const navToggle = document.querySelector(".mobile_nav_toggle");


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility == "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.style.background = "url(img/menu-close.svg)";
    } else if(visibility == "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.style.background = "url(img/menu-icon.svg)";
    }
    console.log(visibility);
})

svg1.innerHTML = `<svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 400 479.6" style="enable-background:new 0 0 400 479.6;" xml:space="preserve">
<path class="path" d="M333.4,375c0,0-46.2-59.4-34.3-128.1"/>
<path class="path" d="M301,119.7c0,0,2.3-33.3-46.3-39.1c-16.8-2-37.4-33.6-37.4-33.6s-27.8-41.8-109.5-1.5
c-30.8,15.2-29,30.2-29,30.2s-0.5,2,13.5,1.5c10.7-0.4,19.5,3,27,9.9c6.3,5.8,7.4,6.2,7.4,6.2s0.8,2.7,10-3.8
c9.2-6.6,23.4-9,27.1-9.3c3.7-0.3,26.4,1.6,42.6,5.2c7,1.5,3.4,15,5.2,20.2c1.2,3.5,5.5,0.5,5.5,0.5c0-8.9-1.8-15.3,4.6-14.1
c6,1,18.1,4,18.1,4s-12.5,7.6-9.7,26.4c0.5,3.4,2.4,3.3,2.4,3.3s15-1.6,12.8-22.1c0,0-5,19.2-12.8,22.1"/>
<path class="path" d="M171.8,168.3c0,0-4.8,10.8-7.6,20.8c0,0-3.1-10.1-1.5-20.8c0.4-3,1.7-11.4,24.6-32.2c1-0.9,3.5-3.8,6-4.1
c2.5-0.3,4.8,2.6,5.7,4.9c0.9,2.3,1.6,3.3-1.8,6.4s-12.6,9-16,20.1c-2.8,8.9-3,24.5-0.2,32.9c0.4,1.3,28.9-14.8,30-39.7
c0-1.1-8.9,21.1-25.8,37.9"/>
<path class="path" d="M123.1,246.3c-2,3.6-5.4,33.7,18.6,35.3c34.7,2.3,44.7,8.7,58.7,18.4c10.6,7.3,32.3,32.7,15.2,70.4
c-3.1,6.9-19.4,32.5-64.2,27.8c-43.9-4.6-51.4-43.5-52.1-51.4c-0.6-6.5-1.9-30.6,18.2-50.1s30.7-12.7,39.7-14.5s16.2-13.2,16-14.5
c24.1-2.5,22.5,18.1,25.6,30.1c2.2,8.6,8.1,43.8-19.5,53.1c-28.6,9.7-48.1-15.5-44.3-37.2c3.9-22.4,25.2-27.5,30.3-27.5
c4.7,0,22.5,4.6,21.9,33.2c-0.7,28.6-23.5,58.8-32.5,79.2c-25.6,58.1-18.3,66.3-17.4,66.4c1.4,0.2,8.6-9.8,15-27
c28.6-77.1,60.3-71.5,86.7-67.9c40.3,5.4,44.2,36.6,43.1,92.3"/>
<path class="path" d="M274.1,149c0,0,0.1-3.8-0.3-4.5c-0.5-0.9-0.8-2.6-0.8-4c0-1.4,1-1.7,1.5-1.4s1.2,1.7,1.2,2.4
c0,0.7-0.5,4.1-0.6,4.5s-1.6,5.9-3.1,6.8s-5.1,5.9-6.2,7.5c-1.1,1.6-3.9,3.6-5.3,4.1c-1.4,0.5-1.4-1-1-2.7c0.2-1.1,3.8-6.9,7.3-8.1
c3.5-1.2,5.5,3.4,6.5,4.6c1,1.2,7,4.1,7.6,4.6c0.6,0.4,4,0.8,7.1,0.1s4.8-1.5,8.3-3.4c3.5-1.9,4.3-4.2,3.7-4.6
c-0.5-0.4-2.3-0.1-7,1.5c-4.7,1.6-5.7,4.4-6.6,6.4c-1,2.3-6.6,5.3-7.5,9.7c-2.9,14.2-1.9,27.7,2,22.7c20.5-26.4,23.2-38.3,22.2-37.4
c-14.7,12.8-25,41.5-23.6,41.7c1.4,0.3,21.2-5.6,27.5-10.9s1.1-27.4,1.1-27.4c-0.7-6.6,1-6.4,18.2,17.3c13.6,18.8,9.8,26.5,7.3,33.9
c-4.3,12.9-16.7,16.6-23.7,18.9c-7,2.2-32,12.8-53.9,21.1c-23.9,9.1-35.2,8.8-57.9,8.5s-46.6-21.8-49.9-27.7
c-3.3-5.8-9.6-43.8-10.1-47.5c-6.5-57.1-22-74.9-23.5-76.7c-2.2-2.7-10.2-10.5-12.8-10.6c-2.1-0.1-9.3,3.1-15.6,17.3
c-13,29.2-6.3,70.2-0.8,92.1c5.5,21.9,28.7,53.5,30.9,57c2.1,3.5,6.3,12.8,2.8,13.1c-3.6,0.3-8.2,1.8-36.6-14.6
c-28-16.1-42-61.3-43.6-87.8c-2.8-49.1,29.9-81.8,29.9-81.8c10.5-14.5,27.8-8.3,38.5-3.3s7.9,13,5.6,17.1
c-5.5,9.8-6.3,40.4-6.6,46.1c-1.1,17.3,2.5,41.3,3.2,44.6c1.6,7.3,20.5,38.9,20.5,45.2c0,1.3,0.8,19.8,1.2,21.2
c0.9,2.9,17.9,5,23.1,3.8c13.2-2.8,3.6-11.4,0.6-13c-17.6-9.4-30.6-10.9-31.5-9.2"/>
</svg>`

function wspMsje(){
    userName = document.getElementById("nails-name").value;
    userService = document.getElementById("nails-service").value;
    userDate = document.getElementById("nails-date").value;
    userTime = document.getElementById("nails-time").value;
    let text = "Hola, soy *" + userName + "*.%0aMe quiero hacer *" + userService +"*, y me gustaria hacerlo el día *" + userDate + "* a las *" + userTime + "*.%0aAvisame si estas disponible,%0a¡Saludos!";
    let url = "https://wa.me/5493425515339/?text=" + text;
    window.open(url);
    return false;
}

function selectService(option){
    document.location.pathname ='contact.html';
    document.getElementById("nails-service").value=option;
}