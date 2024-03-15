let player1 = Number(prompt("Iltimos raqamlardan birini tanlang. \n 0) Qog'oz \n 1) Qaychi \n 2) Quduq"))
let player2 =Math.floor( Math.random() *3);

if (player2 === 0) {
    alert("Kompiyuter qog'ozni tanladi");
}else if (player2 === 1) {
    alert("Kompiyuter qaychini tanladi...")
}else{
    alert("Komppiyuter quduqni tanladi");
}

if (player === player2) {
    alert("Durang!!!")
}else if (player1 === 0 && player2 === 1) {
    alert("Kompiyuter g'alaba qozondi");
}else if (player1 === 0 && player2 === 2) {
    alert("Siz g'alaba qozondingiz...")
}else if (player1 === 1 && player2 === 0) {
    alert("Siz g'alaba qozondingiz");
}else if (player1 === 1 && player2 === 2) {
    alert("Kompiyuter g'alaba qozondi");
}

