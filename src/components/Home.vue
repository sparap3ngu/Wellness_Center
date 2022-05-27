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
      <div class="md-layout md-gutter ">

      <div class="md-layout-item  md-medium-size-50 md-xsmall-size-100">
         <md-field class="scriviRec">
            <label>Lascia una recensione</label>
            <md-textarea v-model="textarea">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse recusandae praesentium molestiae ex amet magni accusantium, deleniti quo non qui, eius, necessitatibus impedit dolore blanditiis ab dolorem. Exercitationem, blanditiis nam.</md-textarea>
          </md-field>
          <md-button> Invia </md-button>
      </div>
      <div class="md-layout-item  md-medium-size-50 md-xsmall-size-100">
        <div class="leggiRec">
          
          <!--PROBLEMA DI VISUALIZZAZIONE-->
        <!-- <div class="unaRec"  
          v-for="r in Recensioni" 
          :key="r.id"> 
              <h5 class="nomeUtente">Nome utente:</h5>
              <p class="nomeUtente"> {{r.utente}} </p>
              <hr>
              <p> {{r.descrizione}}</p>
            </div> 
-->
          <div class="unaRec" 
          > 
              <h5 class="nomeUtente">Nome utente:</h5>
              <p class="nomeUtente">  </p>
              <hr>
              <p> </p>
          </div>   
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
    }
  },

  created () {
    db.collection ('Recensioni')
    .get()
    .then(function(res) {
        res.forEach(function(doc) {
            const data = {
              'id': doc.id,
              'utente':doc.data().utente,
              'descrizione': doc.data().descrizione,
            }
            this.Recensioni.push(data)

        });
    });
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

  .scriviRec {
    margin-top:10px;
  }  
  .leggiRec {
    border: 1px solid;
    border-radius: 3px;
    border-color: rgba(0,0,0,0.42);
    overflow: scroll;
    height: 116px;
    margin-top:10px;
    text-align: left;
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

  .nomeUtente {
    display:inline;
  }
</style>
