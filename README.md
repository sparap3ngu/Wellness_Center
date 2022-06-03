# Wellness Center
Informatica ed elementi di programmazione II  | Università degli studi di Trento | A.A. 2021/22



## Il progetto
Questo progetto ha l'obiettivo di creare un sito per un centro benessere e mostrare all'utente tutti i servizi erogati da questo centro. Inoltre, dà le informazioni necessarie per poterlo raggiungere e contattare anche per eventuali prenotazioni.

## Tecnologie utilizzate
* Vue 2
* Vue Material
* Vue Router
* Firebase firestore

## La struttura dei progetto
* App: è il component principale in cui è stata impostata la cornice dell'applicazione, ovvero la navigation bar, il footer, la navigation drawer ed è stato predisposto lo spazio per la visualizzazione delle diverse pagine (con router-view)

Le 4 sezioni principali del sito sono rappresentate da questi component:  
* Home
* massaggi e altro (per la sezione trattamenti)
* servizi 
* contatti 
Esiste poi una quinta sezione, ovvero quella di dettaglio, a cui vi si può arrivare tramite le sezioni di trattamenti e di servizi. In base al component di partenza (massaggi, altro, servizi) si arriva rispettivamente a dettagliMassaggi, dettagliAltro oppure dettagliServizi. Tutte le informazioni mostrate sono frutto di un'interazione con il database Firestore (sia in lettura che in scrittura).

I component carousel e carouselItem, invece, sono funzionali esclusivamente alla costituzione del carosello della Home.


## Alcuni problemi riscontrati
Durante il lavoro abbiamo incontrato diverse difficoltà, che però sono state poi risolte grazie ad uno studio più approfondito del problema. Tuttavia sono rimase irrisolte un paio di problematiche nonostante i vari tentativi di risoluzione:
* La visualizzazione dei dati provenienti dal db non avviene fino a che non c'è almeno una navigazione nel sito. Quindi ogni qualvolta il sito viene aperto per la prima volta o viene aggiornata la pagina, per visualizzare i dati su una pagina (recensioni, servizi, massaggi, trattamenti e contatti) è necessario navigare prima ad un'altra pagina e poi ritornare sulla precedente
* La posizione di scrolling viene sempre salvata, quindi ogni volta che si naviga da una pagina all'altra viene mantenuta e l'utente non viene riposizionato in cima alla schermata. Sono stati fatti vari tentativi con la seguente funzione, ma senza risultato
```javascript
  scrollBehavior(to, from, savedPosition) {
    return { }
  },
  ```

### Per visualizzare al meglio il progetto:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).


### Setup

```sh
npm install
npm install -g @vue/cli
npm install vue-material
npm install -g firebase-tools
npm i firebase
```

### Per aprire il progetto nel browser

```sh
npm run dev
```

### Creato da
Giulia Mussetti (matr. 221971)

Milena Paniz (matr. 203951)

Lorenzo Porta (matr. 223283)