/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21  */

/* chiedo il nome */

let nome =prompt("inserisci il tuo nome");

/* chiedo il cognome */
let cognome =prompt("inserisci il tuo cognome");

/* chiedo il colore preferito */

let colre =prompt("inserisci il tuo colore preferito");

/* faccio concatenare i tre risultati  */

document.getElementById("myid").innerHTML = `${nome}${cognome}${colre}21`

    /* aggiungo il numero 21 e  */

    /* faccio generare una pasword "sicurissima" stampata  a schermo  */

