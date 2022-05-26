<template>
  <div class="page-container">

    <div class="md-layout" >
      <div class="md-layout-item md-large-size-20 md-medium-size-33 md-xsmall-size-100" 
      v-for="s in Servizi" :key="s.id">
        <div >
      <md-card id="cards">
        <md-card-media>
          <img :src="s.immagine" alt="People">
        </md-card-media>

      <!--<md-card>
        <md-card-media>
          <img src="/vuematerial/assets/examples/card-image-1.jpg" alt="People">
        </md-card-media>-->

        <md-card-header>
          <div class="md-title">{{s.nome}} </div>
          <div class="md-subhead"> {{s.costo}}</div>
        </md-card-header>

          <md-card-actions md-alignment="right">
              <md-button to="/dettaglio">Dettagli</md-button>
          </md-card-actions>
      </md-card>
        </div>
      
      </div>
    </div>
    
  </div>
</template>

<script>
export default  {

    data: function () {
      return{
         Servizi: [
        {
          id: 1,
          nome: 'Acqua termale',
          costo: '70€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/a/3/csm__DSC4366_2af557342e.jpg',
        },

        {
          id:2,
          nome: 'bagno termale',
          costo: '70€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/5/csm__DSC4292_4c585c7410.jpg'
        },

        {
          id:3,
          nome: 'palestra',
          costo: '40€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/6/csm_terme_fitness_--11_f5d37ab9ad.jpg',
        },
        {
          id:3,
          nome: 'palestra',
          costo: '40€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/6/csm_terme_fitness_--11_f5d37ab9ad.jpg',
        },
                {
          id:3,
          nome: 'palestra',
          costo: '40€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/6/csm_terme_fitness_--11_f5d37ab9ad.jpg',
        },
                {
          id:3,
          nome: 'palestra',
          costo: '40€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/6/csm_terme_fitness_--11_f5d37ab9ad.jpg',
        },
                {
          id:3,
          nome: 'palestra',
          costo: '40€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/6/csm_terme_fitness_--11_f5d37ab9ad.jpg',
        },
                {
          id:3,
          nome: 'palestra',
          costo: '40€',
          immagine: 'https://www.termemerano.it/fileadmin/_processed_/0/6/csm_terme_fitness_--11_f5d37ab9ad.jpg',
        }
      ]
      }
     
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

#cards{
  margin-top:40px;
}
 .md-card-header {
  height:100px;
}  



</style>
