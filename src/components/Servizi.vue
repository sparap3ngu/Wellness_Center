<template>
  <div class="page-container">
    <!--<md-card v-for="s in Servizi" :key="s.id">
      <md-card-media>
        <img :src="s.immagine" alt="People">
      </md-card-media>-->

    <md-card>
      <md-card-media>
        <img src="/vuematerial/assets/examples/card-image-1.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Titolo </div>
        <div class="md-subhead"> Sottotitolo</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="right">

            <md-button to="/dettaglio">Dettagli</md-button>
  
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default  {

    data: function () {
      Servizi: []
    },

created () {
  db.collection ('Servizi')
    .get()
    .then(function(res) {
        res.forEach(function(doc) {
            console.log(doc.id, " => ",  doc.data());
            const data = {
              'id': doc.id,
              'nome': doc.data().nome,
              'costo':doc.data().costo,
              'immagine': doc.data().immagine,
            }
            this.Servizi.push(data)

        });
    });
}
  }
</script>


<style scoped>
</style>
