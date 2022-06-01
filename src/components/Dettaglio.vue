<template>
  <div class="page-container">
    <p>
      Nome:
    </p>
    <p>
       {{Servizio.nome}}
    </p>
  </div>
</template>

<script>
import db from '../main'

export default  {
  data: function () {
    return{
      idServizio: this.$route.params.id,
      Servizio: [],
    }
  },

  firestore: function(){
    return{
      Servizio: db.collection('Servizi').where( "id", "==", this.idServizio)
    }
  },

  created: function () {

    /*db.collection ('Servizi')
      .get()
      .then(dbjson => {
        this.Servizio = dbjson.data.filter( Servizio => {
          return Servizio.id == this.idServizio
        })[0]
      })*/
  }

}
</script>


<style scoped>
</style>
