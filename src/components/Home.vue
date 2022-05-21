<template>
  <div class="page-container">
    <div class="home">
      <carousel @next="next" @prev="prev">
        <carouselItem v-for="(carItem, index) in carItems" :key="carItem" :index="index" :visibleItem="visibleItem">
          <img :src="carItem" alt="immagine carosello" />
        </carouselItem>
      </carousel>
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
        'https://cms-eu.qcterme.com/sites/default/files/styles/page_social_image_crop_1_1/public/seo/2021-05/Massages%2001.jpg?itok=tNtIqU7h',
        'https://cms-eu.qcterme.com/sites/default/files/styles/slider_desktop_crop_16_9/public/slider/2021-09/SAN%20PELLEGRINO_VASCA%20ESTERNA_IDROMASSAGGI%20%281%29.jpg?h=c9b2a93d&itok=5dbozpAd',
        'https://cms-eu.qcterme.com/sites/default/files/styles/page_social_image_crop_1_1/public/seo/2021-12/SAN%20PELLEGRINO_SAUNA_CLOROFILLA.jpg?itok=3mLFtbbp',
        'https://cms-eu.qcterme.com/sites/default/files/styles/tbi_images_desktop_crop_4_3/public/text-block-images/2021-12/SAN%20PELLEGRINO_VASCA%20ESTERNA_IDROMASSAGGI_1.jpg?itok=DIofFduz',
      ],
      visibleItem: 0,
    }
  },

  methods:  {
    next(){
      if (this.visibleItem == this.carItems.length - 1) {
        this.visibleItem = 0;
      } else {
        this.visibleItem ++;
      }
    },
    prev (){
      if (this.visibleItem == 0) {
        this.visibleItem = this.carItems.length - 1
      } else {
        this.visibleItem --;
      }

    },
  },

  components:{
    carousel,
    carouselItem,
  }

  }
</script>



<style scoped>

</style>
