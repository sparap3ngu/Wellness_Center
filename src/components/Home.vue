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
          WellnessCenter è il luogo ideale per chi vuole ritrovare, coltivare e nutrire il proprio benessere psicofisico. 
          È un ambiente accogliente, rilassante e silenzioso dove potrai gustare anche delle ottime tisane e leggere un buon libro. 
          WellnessCenter è uno studio olistico unico e professionale: qui imparerai a conoscere te stesso per ritrovare calma e serenità.
        </p>
      </div>
      <div class="md-layout-item md-large-size-33  md-medium-size-50 md-xsmall-size-100">
        <h1> Cosa facciamo </h1>
        <p>
          L’educazione al benessere favorisce il mantenimento ottimale dell’omeostasi energetico-funzionale e il ripristino armonico dell’essere umano.
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2115161408547!2d11.120967615577749!3d46.06682347911273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714b3110dfaf%3A0xc206cbc5ae206dc6!2sVia%20Calepina%2C%2014%2C%2038122%20Trento%20TN!5e0!3m2!1sit!2sit!4v1653312492997!5m2!1sit!2sit" 
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </div>

<!--Sezione recensioni-->
      
    <h3>Il tuo parere per noi è importante!</h3>
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
import db from '../main.js'


export default  {
  name: "home",
  data: function () {
    return{
      carItems:[
        'https://cms-eu.qcterme.com/sites/default/files/styles/slider_desktop_crop_16_9/public/slider/2022-03/SAN%20PELLEGRINO_VASCA%20ESTERNA_IDROMASSAGGI.jpg?itok=d0L9HCx7',
        'https://cms-eu.qcterme.com/sites/default/files/styles/slider_desktop_crop_16_9/public/slider/2021-09/SAN%20PELLEGRINO_VASCA%20ESTERNA_IDROMASSAGGI%20%281%29.jpg?h=c9b2a93d&itok=5dbozpAd',
        'https://cms-eu.qcterme.com/sites/default/files/styles/page_social_image_crop_1_1/public/seo/2021-12/SAN%20PELLEGRINO_SAUNA_CLOROFILLA.jpg?itok=3mLFtbbp',
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
    })
    .then(() => {
      alert ("La tua recensione è stata salvata correttamente. Aggiorna la pagina per visualizzarla correttamente");
      this.readData();
      this.reset();
    })
    .catch ((err) => {
      consol.log(err);
      alert ("Ops! Non ha funzionato, riprova");
    })
    },

    reset (){
      Object.assign(this.data, this.$options.data.apply(this));
    }

  },

  components:{
    carousel,
    carouselItem,
  }

  }
</script>

<style scoped>
  #imgCarousel {
    min-height: 350px;
    min-width: 700px;
    vertical-align: middle;
  }

  .newsletter  {
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 1px;
    background-color: grey;
  }

  .newsletter h3, p  {
    padding-top: 15px;
    margin: 0px;
    text-align: center;
  }

  #chiSiamo{
    text-align: center;
    padding: 10px;
  }

  iframe  {
    width:600;
    height:450;
    border:0; 
  }

  h3{
    text-align: left;
    margin: 10px 50px;
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
  }

  .nomeUtente {
    display:inline;
  }
</style>
