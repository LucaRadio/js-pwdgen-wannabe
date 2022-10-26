const userName = prompt("Ciao, Qual è il tuo nome ?");

const firstName = document.getElementById("name");

firstName.innerHTML = userName;

const userSurname = prompt("E il tuo cognome ?");

const surname = document.getElementById("surname");

surname.innerHTML = userSurname

const userColor = prompt("Ultima domanda. Qual è il tuo colore preferito ?")

const color = document.getElementById("color")

color.innerHTML = userColor

const password = `${userName}${userSurname}${userColor}21`

const spanPassword = document.getElementById("password")

spanPassword.innerHTML = password

