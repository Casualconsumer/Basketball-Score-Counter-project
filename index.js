let home = document.getElementById("hPoints")
let guest = document.getElementById("gPoints")
let homeCount = 0
let guestCount =0

function onePoint(){
    homeCount += 1
    home.textContent = homeCount
}

function twoPoint(){
    homeCount += 2
    home.textContent = homeCount
}

function threePoint(){
    homeCount += 3
    home.textContent = homeCount
}

function gonePoint(){
    guestCount += 1
    guest.textContent = guestCount
}

function gtwoPoint(){
    guestCount += 2
    guest.textContent = guestCount
}

function gthreePoint(){
    guestCount += 3
    guest.textContent = guestCount
}

function reset(){
    homeCount = 0
    guestCount = 0
    
    home.textContent = homeCount
    guest.textContent = guestCount
}