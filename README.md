# Wellness Center
Informatica ed elementi di programmazione II  | Università degli studi di Trento | A.A. 2021/22



## Il progetto
Questo progetto nasce dall’idea di realizzare un sito internet per un centro benessere.
Il proposito è quello di mostrare all’utente tutti i servizi erogati dalla struttura e dare le informazioni necessarie per poterla raggiungere o contattare anche per eventuali prenotazioni.

## Tecnologie utilizzate
* Vue 2
* Vue Material
* Vue Router
* Firebase firestore

## La struttura del progetto
La parte più consistente del progetto è sviluppata all’interno dei component che verranno di seguito illustrati brevemente.

* App: questo è il component principale attraverso il quale è stata impostata la struttura base dell’applicazione.
Al suo interno troviamo la “Navigation Bar” (con i quattro buttons che conducono alle varie sezioni del sito), la “Navigation Drawer” (impostata per comparire nel caso di finestre di dimensioni ridotte) ed il “Footer” (contenente sia i riferimenti principali del centro benessere che i collegamenti funzionanti verso l’account Instagram dei creatori).
È stato inoltre predisposto lo spazio per la visualizzazione delle diverse pagine attraverso “Router-View”.

Il sito è composto da quattro sezioni principali, che sono sempre raggiungibili attraverso le barre di navigazione.
È presente inoltre una quinta sezione che risulta secondaria rispetto alle precedenti:  essa è costituita dalla pagina di dettaglio dei vari servizi e vi si accede direttamente cliccando sulla card interessata.

* Home: come di consuetudine è la prima pagina che si incontra durante la navigazione.
Il primo elemento che la caratterizza è il carosello (a sua volta composto da ulteriori due component esclusivamente funzionali a quest’ultimo: i component "carousel” e “carouselItem”). Nella parte centrale sono presenti tre blocchi che descrivono la mission della struttura e mostrano come poterla raggiungere. La parte in basso invece è dedicata alle recensioni che ogni utente può inviare dopo aver indicato il proprio username; queste ultime compariranno in ordine cronologico nella parte sottostante. Segue poi la piccola sezione dedicata alle FAQ nella quale l’utente può sceglierne la modalità di visualizzazione attraverso l’apposito Toggle Button.

* Trattamenti: la particolarità di questa sezione è la presenza di due TAB che permettono di scegliere se accedere alla parte dei massaggi oppure a quella di tutti gli altri trattamenti proposti dalla struttura. I trattamenti sono mostrati attraverso delle card che contengono un'immagine rappresentativa, il nome ed il costo di ogni singola prestazione.
Da qui sarà poi possibile accedere alle varie pagine di dettaglio.

* Servizi: oltre ai trattamenti estetici la struttura propone anche tutta una serie di servizi che vengono riepilogati attraverso delle card.
Questa sezione che ha una logica simile alla precedente ad esclusione dei TAB.

* Contatti: le prime informazioni che restituisce questa pagina sono i contatti attraverso i quali l’utente può mettersi in collegamento con la struttura.
Per agevolare eventuali comunicazioni si è stato pensato di includere anche la parte relativa alla composizione del team che opera presso il centro benessere includendo foto, nome e qualifica di ogni persona.

* Dettaglio: questa è la quinta sezione precedente citata. Vi si accede esclusivamente cliccando su una delle varie card presenti all’interno del sito. A seconda del component di partenza si accede rispettivamento alle pagine di “dettaglioMassaggi”, “dettaglioAltro” o “dettaglioServizi”, ovviamente viene estratto solo il dettaglio della prestazione precedentemente selezionata.

Il sito interagisce con un database (Firestore) sia in lettura che in scrittura: è stato adottata questo tipo di soluzione non avendo a disposizione un API dedicato.

## Alcuni problemi riscontrati
Durante il lavoro abbiamo incontrato diverse difficoltà, che però sono state poi risolte grazie ad uno studio più approfondito della questione. Tuttavia sono rimase irrisolte alcune problematiche nonostante i vari tentativi di risoluzione:

* La visualizzazione dei dati provenienti dal db non avviene fino a che non c'è almeno una navigazione nel sito. Quindi ogni qualvolta il sito viene aperto per la prima volta o viene aggiornata la pagina, per visualizzare i dati su una pagina (recensioni, servizi, massaggi, trattamenti e contatti) è necessario navigare prima ad un'altra pagina e poi ritornare sulla precedente

* La posizione di scrolling viene sempre salvata, quindi ogni volta che si naviga da una pagina all'altra viene mantenuta e l'utente non viene riposizionato in cima alla schermata. Sono stati fatti vari tentativi infruttuosi con la seguente funzione:
```javascript
  scrollBehavior(to, from, savedPosition) {
    return { }
  },
  ```

### Per visualizzare al meglio il progetto:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).


### Setup
Abbiamo utilizzato NODE come package manager e tramite quello abbiamo installato le tecnologie a noi necessarie per lo sviluppo del progetto:

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