<template>
  <div class="page-container">
    <md-tabs class="md-primary" md-alignment="fixed" md-sync-route>
      <md-tab id="tab-massaggi" md-label="Massaggi" md-active-tab> <massaggi /> </md-tab>
      <md-tab id="tab-altro" md-label="Altro"> <altro />  </md-tab>
    </md-tabs>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import massaggi from './massaggi.vue'
import altro from './altro.vue'

export default  {

  components:{
    massaggi,
    altro,
  }
  
  }
</script>


<style scoped>

</style>
