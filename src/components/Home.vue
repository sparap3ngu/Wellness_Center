<template>
  <div class="home">

<!--Inserzione del carosello-->
    <carousel @next="next" @prev="prev">
      <carouselItem 
      v-for="(carItem, index) in carItems" :key="carItem" 
      :index="index" 
      :visibleItem="visibleItem"
      :direction="direction">
        <img id="imgCarousel" :src="carItem" alt="immagine carosello" />      
      </carouselItem>
    </carousel>

<!--Iscrizione alla newsletter-->
    <div class="newsletter">
      <h3>Iscrivi alla newsletter</h3>
      <p>
        Resta sempre aggiornato sulle nostre promozioni e novità!
      </p>
      <md-field>
        <md-input placeholder="Inserisci la tua email"></md-input>
        <md-button> Invia </md-button>
      </md-field>
    </div>

<!--Corpo testuale della home-->
  <div>
    <div id="chiSiamo" class="md-layout md-gutter">
      <div class="md-layout-item md-large-size-33 md-medium-size-100 md-xsmall-size-100">
        <h1> Chi siamo </h1>
        <p>
          Wellness Center è un prestigioso Centro Benessere che sorge nel cuore della città di Trento.
          Da noi troverete un luogo ideale dove poter beneficiare di esclusivi rituali benessere personalizzati per restituire alla mente e al corpo ciò di cui ha realmente bisogno. 
          L’ambiente silenzioso ed accogliente favorirà il vostro relax, potrete approfittare delle pause durante i trattamenti per leggere un buon libro mentre sorseggiate una delle tisane naturali offerte dall’azienda Trentino Erbe con la quale collaboriamo da anni.
          Wellness Center è un centro olistico unico nella zona e nasce dal desiderio di proporre un metodo operativo altamente qualificato ed innovativo attraverso l’expertise del nostro team di professionisti altamente formati che puntano a valorizzare l’unicità di ogni singola persona.
        </p>
      </div>
      <div class="md-layout-item md-large-size-33  md-medium-size-50 md-xsmall-size-100">
        <h1> Cosa facciamo </h1>
        <p>
          L’educazione al benessere è il punto focale della nostra attività.
          Attraverso i nostri trattamenti ci proponiamo di favorire il mantenimento ottimale dell’omeostasi energetico-funzionale ed il ripristino armonico delle funzioni corporee e spirituali di ogni individuo.
          Accogliamo clienti di ogni età e condizione, infatti, in caso di situazioni particolari è possibile chiedere preventivamente una consulenza personalizzata direttamente al nostro team sanitario in modo tale che l’esperienza di soggiorno nel nostro centro possa incontrare al meglio ogni tipo di aspettativa.
          Allestito nella stanza adiacente la reception troverete inoltre un piccolo shop dove poter acquistare sia i prodotti utilizzati nel nostro centro che gli articoli proposti da Trentino Erbe.
        </p>
      </div>
      <div class="md-layout-item md-large-size-33  md-medium-size-50 md-xsmall-size-100">
        <h1> Dove siamo </h1>
        <p>
          Ci trovi qui: 
          <br>
          Via Calepina, 14 - I-38122 Trento
        </p>
        <iframe 
          id="mappa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2115161408547!2d11.120967615577749!3d46.06682347911273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714b3110dfaf%3A0xc206cbc5ae206dc6!2sVia%20Calepina%2C%2014%2C%2038122%20Trento%20TN!5e0!3m2!1sit!2sit!4v1653312492997!5m2!1sit!2sit" 
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>

<md-divider></md-divider>

<!--Sezione recensioni-->
    <h3>Abbiamo molto a cuore l’opinione dei nostri clienti, se ti fa piacere lasciaci una recensione!</h3>
    <div class="recensioni md-layout md-gutter">
        <div class="md-layout-item  md-xlarge-size-25 md-large-size-25 md-medium-size-25 md-xsmall-size-100">
          <md-field>
            <label> Utente </label>
            <md-input
            class="utente"
            type="text"
            v-model="dati.utente"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item  md-xlarge-size-75 md-large-size-75 md-medium-size-75 md-xsmall-size-100"> 
          <md-field>
            <label>Lascia una recensione</label>
            <md-input 
            type="text"
            v-model="dati.descrizione"></md-input>  
          <div>
            <md-button @click="saveData"> Invia </md-button>
          </div>         
          </md-field>
        </div>
    </div>

    <h3>Dicono di noi</h3>
    <div>
      <div class="leggiRec">          
        <div class="unaRec"  
        v-for="r in Recensioni" 
        :key="r.id"> 
            <h5 class="nomeUtente">Nome utente:</h5>
            <p class="nomeUtente"> {{r.utente}} </p>
            <hr>
            <p> {{r.descrizione}}</p>  
          </div>
        </div>  
      </div> 
  </div>
</template>

<script>
import carousel from './carousel.vue'
import carouselItem from './carouselItem.vue'

import img1 from './icons/img1.png'
import img2 from './icons/img2.png'
import img3 from './icons/img3.png'


import db from '../main.js'

export default  {
  name: "home",
  data: function () {
    return{
      carItems:[
        img1,
        img2,
        img3,
      ],
      visibleItem: 0,
      direction: 'left',
      Recensioni: [],
      dati:  {
        utente: null,
        descrizione: null,
      }
    }
  },

  created () {
    this.readData();

  },


  methods:  {
    next(){
      if (this.visibleItem == this.carItems.length - 1) {
        this.visibleItem = 0;
      } else {
        this.visibleItem ++;
      };
      this.direction = 'left'
    },

    prev (){
      if (this.visibleItem == 0) {
        this.visibleItem = this.carItems.length - 1
      } else {
        this.visibleItem --;
      }
      this.direction = 'right'
    },

    readData(){
      db.collection ('Recensioni')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc =>  {
        const data =  {
          'utente': doc.data().utente,
          'descrizione': doc.data().descrizione,
          'createdAt': doc.data().createdAt,
        }
        this.Recensioni.push(data)      
      })
    }) 
    },

    saveData(){
    db.collection("Recensioni")
    .doc()
    .set({
      utente: this.dati.utente,
      descrizione: this.dati.descrizione,
      createdAt: new Date (),
    })
    .then(() => {
      alert ("La tua recensione è stata salvata correttamente");
      this.readData();
      this.reset();
    })
    .catch ((err) => {
      consol.log(err);
      alert ("Ops! Non ha funzionato, riprova");
    })
    },

    reset (){
      Object.assign(this.$data, this.$options.data.apply(this));
    },
  },

  components:{
    carousel,
    carouselItem,
  }

  }
</script>

<style scoped>

@media only screen and (max-width: 760px) {
  #imgCarousel {
    min-height: 350px;
    min-width: 760px;
    height: 350px;
    width:auto;
  }
}

@media only screen and (min-width: 1440px) {
    #imgCarousel {
        min-height: 350px;
        min-width: 1700px;
        height: auto;
        width: 100%;
    }
}

  .newsletter  {
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 1px;
    background-color: #cccccc;
    text-align: center;
  }

  .newsletter h3  {
    text-align: center;
    padding-top: 20px;
    margin: 0;

  }

  #chiSiamo{
    text-align: center;
    padding: 20px 20px 50px;
  }

  .md-layout {
    margin:10px;
  }

  #mappa  {
    border:0; 
  }

  h3{
    text-align: left;
    margin: 30px 50px 5px;
  }
  .recensioni {
     margin: 0px;
  }
  .utente{
    margin:8px 0px;
  }

  .unaRec {
    background-color: #cccccc;
    height: auto;
    border-radius: 3px;
    margin: 7px;
  }

  .unaRec h5 {
    margin:0 10px;
  }

  .unaRec p {
    padding:10px 0px;
    text-align: center;

  }

  .nomeUtente {
    display:inline;
  }
</style>
