const bouquet=document.getElementById("bouquet")
const card=document.getElementById("card")
const btn=document.getElementById("openBtn")
const message=document.getElementById("message")
const intro=document.getElementById("intro")

const yes=document.getElementById("yesBtn")
const no=document.getElementById("noBtn")

const song=document.getElementById("loveSong")

const spotify=
document.getElementById("spotifyBox")

const nextMessage=
document.getElementById("nextMessage")


spotify.style.display="none"


const stopBtn=
document.createElement("button")

stopBtn.innerHTML=
"For another surprise 🎵"

stopBtn.id=
"stopBtn"

stopBtn.style.display=
"none"

document
.getElementById(
"choiceButtons"
)
.appendChild(
stopBtn
)


// bouquet click

bouquet.onclick=()=>{

card.style.display=
"block"

}


// open click

btn.onclick=()=>{

intro.style.display=
"none"

message.style.display=
"block"

}


// yes click

yes.onclick=()=>{

song.play()

yes.innerHTML=
"YAYAYAYAYAYA BAHAHAHAHAHA love u ❤️"

no.style.display=
"none"

nextMessage.style.display=
"block"

stopBtn.style.display=
"inline-block"

}



// another surprise

stopBtn.onclick=()=>{

song.pause()

song.currentTime=0


// hide card smoothly

card.style.opacity="0"

card.style.transform=
"scale(.9)"

card.style.pointerEvents=
"none"


setTimeout(()=>{


card.style.display=
"none"


spotify.style.display=
"block"


// EXACT SAME POSITION AS CARD

spotify.style.position=
"absolute"

spotify.style.top=
"50%"

spotify.style.left=
"50%"

spotify.style.transform=
"translate(-50%,-50%)"

spotify.style.width=
"90%"

spotify.style.maxWidth=
"520px"

spotify.style.zIndex=
"999"


},500)

}



// NO BUTTON

function moveButton(){

const cardRect=
card.getBoundingClientRect()

const btnRect=
no.getBoundingClientRect()


const x=
Math.random()*
(cardRect.width-btnRect.width-70)

const y=
Math.random()*
(cardRect.height-btnRect.height-70)


no.style.position=
"absolute"

no.style.left=
x+"px"

no.style.top=
y+"px"

}



no.addEventListener(
"click",
(e)=>{

e.preventDefault()

moveButton()

}
)


no.addEventListener(
"touchstart",
(e)=>{

e.preventDefault()

moveButton()

}
)



// floating hearts

for(let i=0;i<30;i++){

let heart=
document.createElement(
"div"
)

heart.innerHTML=
"💖"

heart.className=
"heart"

heart.style.left=
Math.random()*100+"%"

heart.style.animationDuration=
(Math.random()*4+3)
+"s"

document
.getElementById(
"hearts"
)
.appendChild(
heart
)

}