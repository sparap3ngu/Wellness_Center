<template>
  <div class="dettaglioMassaggi">
    <div v-for="m in Massaggio" :key="m.id">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-xsmall-size-0 md-medium-size-25 md-large-size-25 md-xlarge-size-25">
        <div class="imgContainer">
          <img class="img" :src="m.immagine" alt="immagine servizio" />
        </div>
      </div>

      <div class="md-layout-item md-xsmall-size-100 md-medium-size-75 md-large-size-75 md-xlarge-size-75">
        <img class="img2" :src="m.immagine" alt="immagine servizio" />
        <h1>{{m.nome}}</h1>
        <h3>Informazioni utili:</h3>
        <p>Costo: {{m.costo}}</p>
        <p>Durata: {{m.durata}}</p>
        <p>Massaggiatrice: {{m.massaggiatrice}}</p>
        <h3>Benefici:</h3>
        <p>{{m.benefici}}</p>
        <h3>Descrizione:</h3>
        <p>{{m.descrizione}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import db from '../main'

export default  {
  name:"dettaglioMassaggi",
  data: function () {
    return{
      idMassaggio: this.$route.params.id,
      Massaggio: [],
    }
  },

created: function () {
    db.collection ('Massaggi')
    .doc(this.idMassaggio)
    .get()
    .then (doc => {
          const data =  {
            'id': doc.data().id,
            'immagine': doc.data().immagine,
            'nome': doc.data().nome,
            'costo': doc.data().costo,
            'descrizione': doc.data().descrizione,
            'benefici': doc.data().benefici,
            'durata': doc.data().durata,
            'massaggiatrice': doc.data().massaggiatrice,

          }
          this.Massaggio.push(data)
        })
    }
}
</script>


<style scoped>
  .imgContainer {
    height: 100%; 
    width: 100%; 
    position: relative;
    overflow: hidden;
    align-content: center;
}
.img {
    height: 100%;
    min-width: 1000px;
    position: absolute;
    top: 0;
    left:-50%;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
}

@media only screen and (min-width: 599px){
  .img2 {
    display: none;
  }
}

h1, p, h3  {
  margin: 20px;
}

h1{
  text-align: center;
}
</style>
