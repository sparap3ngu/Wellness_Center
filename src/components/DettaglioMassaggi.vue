<template>
  <div class="page-container">
    <div v-for="m in Massaggio" :key="m.id">
    <div class="md-layout md-gutter">
      <div class="imgContainer md-layout-item md-xsmall-size-100 md-medium-size-50">
        <img class="img" :src="m.immagine" alt="immagine servizio" />
      </div>
      <div class="md-layout-item md-xsmall-size-100 md-medium-size-50">
        <h1>{{m.nome}}</h1>
        <h3>Informazioni utili:</h3>
        <p>Costo: {{m.costo}}</p>
        <p>Durata: {{m.durata}}</p>
        <p>Massaggiatrice: {{m.massaggiatrice}}</p>
      </div>
      <div class="md-layout-item md-xsmall-size-100 md-medium-size-100">
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
    height: 300px; 
    width: 300px; 
    position: relative;
}
.img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    margin:10px;
}

h1, p, h3  {
  margin: 20px;
}

h1{
  text-align: center;
}
</style>
