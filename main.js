let data = [
    {
        img:'https://images.unsplash.com/photo-1616832880699-8541b04005ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW58ZW58MHx8MHx8&w=1000&q=80',
        txt1: 'Capital Confidential: ‘Big Short’ author contemplates taking on Brexit',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET ',
        wikipedia:"https://www.wikipedia.org/"

    },
    {
        img:'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        txt1: 'U.K. assets are too hot to handle right now, top investors say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET ',
        wikipedia:"https://en.wikipedia.org/wiki/Australia"


    },
    {
        img:'https://images.unsplash.com/photo-1556474688-479399d655d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        txt1: 'Europe’s largest money manager warns of an investment industry liquidity crisis',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET',
        wikipedia:"https://en.wikipedia.org/wiki/Austin%2C_Texas"

    },
    {
        img:'https://thumbs.dreamstime.com/b/st-louis-united-states-america-14026911.jpg',
        txt1: 'Short-seller Muddy Waters attacks litigation fund Burford',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET ',
        wikipedia:"https://en.wikipedia.org/wiki/Berlin"

    },

    {
        img:'https://oec.world/api/image?slug=partner&memberSlug=usa&size=splash',
        txt1: 'Wall Street falls on stalling economic rebound, stimulus impasse',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET ',
        wikipedia:"https://en.wikipedia.org/wiki/Belgium"

    },
    {
        img:'https://www.voyanyc.com/viajar-a-estados-unidos/wp-content/uploads/2019/01/Visitar-Estados-Unidos-Nueva-York-@Voy-a-USA-e1546360282652.jpg',
        txt1: 'Exclusive: U.S. offers tariff truce if Airbus repays billions in aid, sources say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET ',
        wikipedia:"https://en.wikipedia.org/wiki/Georgia_(country)"

    },
    {
        img:'https://transporteca.de/wp-content/uploads/2018/03/USA-IMPORT.jpg',
        txt1: 'New York could emerge the winner from Brexit derivatives clash',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET',
        wikipedia:"https://en.wikipedia.org/wiki/Amsterdam"

    },
    {
        img:'https://media.istockphoto.com/photos/times-square-in-nyc-picture-id1070531042?k=20&m=1070531042&s=612x612&w=0&h=F4JVYzCuPFkIJ66iGCFC9imrLOY6CO5D42uqEltg75M=',
        txt1: 'Analysis: Imported tortillas? Big Mexican farmers fear cuts will hit harvests',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET ',
        wikipedia:"https://en.wikipedia.org/wiki/Netherlands"

    },


]

let movingCards=document.querySelector(".movingcards")
let divs=document.createElement("div")
    divs.classList.add("divs")
    movingCards.appendChild(divs)
    for(i=0; i<4; i++) {
        let card=document.createElement("div")
        card.classList.add("card")
        movingCards.appendChild(card)
        let img1=document.createElement("img")
        img1.src=data[i].img
        let h2=document.createElement("h2")
        h2.innerHTML=data[i].txt1
        let p=document.createElement("p")
        p.innerHTML=data[i].txt2
        card.append(img1, h2, p)
        divs.appendChild(card)  
    }

// account ის გამოჩენა კლიკის დროს 
let advantures=document.querySelector(".advantures")
let displayOn = false

let account=document.createElement("div")
account.classList.add('account')
let input1=document.createElement("input")
input1.classList.add("input1")
let input2=document.createElement("input")
input2.classList.add("input2")
let button1=document.createElement("button")
button1.classList.add("button1")
button1.innerHTML="SIGN UP"
account.append(input1, input2, button1)
advantures.appendChild(account)  
account.style.display="none"

function myFunction() {
    displayOn = !displayOn
    if (!displayOn) {
        account.style.display="none"
    } else {
        account.style.display="flex"          
    }
}

// slider
let left=document.querySelector(".left")
let right=document.querySelector(".right")
let readMore=document.querySelector(".readMore").querySelector("p")
let readButton=document.querySelector(".readMore").querySelector("a")
let background2=document.querySelector(".background2")
let count=0

right.addEventListener("click", function() {
    count++
    if (count==data.length) {
        count=0
    }
    readMore.innerHTML=data[count].txt1
    background2.style.backgroundImage=`url(${data[count].img})`
    readButton.href=data[count].wikipedia
})

left.addEventListener("click", function() {
    count--
    if (count==-1) {
        count=data.length-1
    }
    readMore.innerHTML=data[count].txt1
    background2.style.backgroundImage=`url(${data[count].img})`
    readButton.href=data[count].wikipedia
})


// scroll-ზე შემოსვლა
let four=document.querySelector(".fourCards")

document.addEventListener("scroll", ()=>{
    let topY=window.scrollY
    let bottomY=window.scrollY + window.innerHeight
    let fourTop=four.offsetTop;
    let fourBottom=fourTop+four.clientHeight
    if(topY>fourBottom) {
        four.classList.remove("opened")
    } else  if (bottomY>fourTop) {
        four.classList.add("opened")
    } else {
        four.classList.remove("opened")
    }
})

// მონაცემები ბექგრაუნდის შესაცვლელად
let data2=[
   {img: "img1.png", 
    txt1: "WHISTLER MOUNTAIN BIKING",
    txt2: "CYCLING"
    },
    {img: "img2.png", 
    txt1: "SURF CAMP IN COSTA RICA",
    txt2: "SURFING"
    },
    {img: "img3.png", 
    txt1: "SKI TOURING MONT BLANC",
    txt2: "SKIING"
    },
    {img: "img4.png", 
    txt1: "RIVERSIDE CAMPING",
    txt2: "CAMPING"}
]

// mail ვალიდაცია
let signUp=document.querySelector(".signUp")
let mailAdress=document.querySelector(".mailAdress")
let inputButton=document.querySelector(".inputButton")

let x=document.createElement("p")
    x.classList.add("x")
    inputButton.appendChild(x)
signUp.addEventListener("click", function(){
    
    if (mailAdress.value.includes("@")) {
        x.style.color="green"
        x.innerHTML="You have sucssesfully signed up!"
    } else{
        x.style.color="red"
        x.innerHTML="Try again"
    }

})
x.innerHTML=" "

//hover ზე გადატარებისას შეიცვალოს backgroundImage
let hover1=document.querySelector(".hover1")
let hover2=document.querySelector(".hover2")
let hover3=document.querySelector(".hover3")
let hover4=document.querySelector(".hover4")


let Climbing=document.querySelector(".Climbing")
let wkndAdvantures=document.querySelector(".wkndAdvantures")
let h2=document.querySelector(".titleChange")
let p=document.querySelector(".parChange")

hover1.addEventListener("mouseover", function(){
    Climbing.style.backgroundImage=`url(${data2[0].img})`
    Climbing.classList.add("newImg")
    h2.innerHTML=data2[0].txt1
    p.innerHTML=data2[0].txt2
})
hover2.addEventListener("mouseover", function(){
    Climbing.style.backgroundImage=`url(${data2[1].img})`
    Climbing.classList.add("newImg")
    h2.innerHTML=data2[1].txt1
    p.innerHTML=data2[1].txt2
})
hover3.addEventListener("mouseover", function(){
    Climbing.style.backgroundImage=`url(${data2[2].img})`
    Climbing.classList.add("newImg")
    h2.innerHTML=data2[2].txt1
    p.innerHTML=data2[2].txt2
})
hover4.addEventListener("mouseover", function(){
    Climbing.style.backgroundImage=`url(${data2[3].img})`
    Climbing.classList.add("newImg")
    h2.innerHTML=data2[3].txt1
    p.innerHTML=data2[3].txt2
})

