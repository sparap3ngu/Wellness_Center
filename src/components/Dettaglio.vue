<template>
  <div class="page-container">
    <div >
      <p>
        Nome:
      </p>
      <p>
        {{Servizio.nome}}
      </p>
    </div>
  </div>
</template>

<script>
import db from '../main'

export default  {
  data: function () {
    return{
      idServizio: this.$route.params.id,
      Servizio: {},
    }
  },

  /*firestore: function(){
    return{
      Servizio: db.collection('Servizi').where( "id", "==", this.idServizio)
    }
  },*/

  created: function () {
    db.collection ('Servizi')
      .get()
      .where( "id", "==", this.idServizio)
      .then(doc => {
        this.Servizio = doc.data()
      })
  }

}
</script>


<style scoped>
</style>
