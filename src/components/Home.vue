<template>
  <div class="page-container">
    <div class="home">
      <carousel @next="next" @prev="prev">
        <carouselItem 
        v-for="(carItem, index) in carItems" :key="carItem" 
        :index="index" 
        :visibleItem="visibleItem"
        :direction="direction">
          <img id="imgCarousel" :src="carItem" alt="immagine carosello" />      
        </carouselItem>
      </carousel>

      <div class="newsletter">
        <h3>Iscrivi alla newsletter</h3>
        <p>
          Resta sempre aggiornato sulle nostre promozioni e novità!
        </p>
        <md-field >
          <md-input placeholder="Inserisci la tua email"></md-input>
        </md-field>

        
      </div>
    </div>
  </div>
</template>

<script>
import carousel from './carousel.vue'
import carouselItem from './carouselItem.vue'


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
    }
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
    height: 150px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: grey;
  }

  .newsletter h3, p  {
    padding-top: 15px;
    margin: 0px;
    text-align: center;
  }


</style>
