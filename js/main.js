//scroll function fixed header
window.onscroll=function(){
    const docscrolltop=document.documentElement.scrollTop;

    if(window.innerWidth>300){
        if(docscrolltop>100){
            document.querySelector(".navbar").classList.add("fixed");
        }
        else{
            document.querySelector(".navbar").classList.remove("fixed");
        }
    }
}


//btn_click function
const btn = document.getElementById("show_btn");
const showDivs = document.getElementById("detalis-content");

function btnclick(){
    showDivs.style.display="block";
    btn.style.display= "none";
}

const showbtn1 = document.getElementById("show_btn1");
const showbtn2 = document.getElementById("show_btn2");
const showbtn3 = document.getElementById("show_btn3");
const showbtn4 = document.getElementById("show_btn4");
const showbtn5 = document.getElementById("show_btn5");
const newsbox1 = document.getElementById("newsbox1");
const newsbox2 = document.getElementById("newsbox2");
const newsbox3 = document.getElementById("newsbox3");
const newsbox4 = document.getElementById("newsbox4");
const newsbox5 = document.getElementById("newsbox5");

function btn_click1(){
    showbtn1.style.display="none";
    showbtn2.style.display="block";
    newsbox1.style.display="block";
}

function btn_click2(){
    showbtn2.style.display="none";
    showbtn3.style.display="block";
    newsbox2.style.display="block";
}

function btn_click3(){
    showbtn3.style.display="none";
    showbtn4.style.display="block";
    newsbox3.style.display="block";
}

function btn_click4(){
    showbtn4.style.display="none";
    showbtn5.style.display="block";
    newsbox4.style.display="block";
}
function btn_click5(){
    showbtn5.style.display="none";
    newsbox5.style.display="block";
}

//toggler
const toggler = document.getElementById("k2plicon");
toggler.style.backgroundImage = 'url("")';
const menubar = document.getElementById("menubar");
const menucross = document.getElementById("menucross");
const navcontainer = document.getElementById("navbar-container");
const navbar = document.getElementById("navbar");
// const fixednavlogo = document.getElementsByClassName("fixed");
// fixednavlogo.querySelector("menucross").addEventListener("click",function(){
//     document.getElementById("k2logo").src = "images/logo/k2.png";
// })


menubar.addEventListener("click", function(){
    navcontainer.classList.add("toggle-nav");
    // document.getElementById("k2logo").src = "images/logo/k2.png";
    menucross.style.display = "block";
    menubar.style.display = "none";
    navbar.classList.add("bg-black");
})

menucross.addEventListener("click",function(){
    navcontainer.classList.remove("toggle-nav");
    // document.getElementById("k2logo").src = "images/logo/K2_logo_2018.png";
    menucross.style.display = "none";
    menubar.style.display = "block";
    navbar.classList.remove("bg-black");
})
