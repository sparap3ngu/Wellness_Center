<template>
  <div class="page-container">
   
<!--Lista Contatti-->
    <div>
      <md-list class="md-double-line">
        <md-subheader>Telefono</md-subheader>
  
        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>
  
          <div class="md-list-item-text">
            <span>Reception +39 0461 281111</span>
          </div>
        </md-list-item>
 
     
      <md-divider></md-divider>
 
      <md-subheader>E-mail</md-subheader>
 
      <md-list-item>
        <md-icon class="md-primary">email</md-icon>
 
        <div class="md-list-item-text">
          <span>info@wellnesscenter.it</span>
              </div>
      </md-list-item>
     
    </md-list>
  </div>
  <div class="md-layout" >
    <div class="md-layout-item md-large-size-33 md-medium-size-50 md-xsmall-size-100">
      <div>
 
      <md-list class="md-triple-line" v-for="s in Personale" :key="s.id">
        
          <md-list-item>
        
          <md-avatar>
            <img :src="s.immagine" alt="People">
          </md-avatar>
  
          <div class="md-list-item-text">
            <span>{{s.nome}}  {{s.cognome}}</span>
            <span>{{s.ruolo}}</span>
          </div>
      
        </md-list-item>
      </md-list>
 
 
    <img src="https://www.termevenezia.it/wp-content/uploads/2021/08/staff-medico-hotel-terme-venezia-2048x1156.jpg"
          alt="People">
  </div>
  
         
   
 
  </div>
  </div>
 
  </div>
 </template>
 
<script>
export default  {
      data: function () {
      return{
         Personale: []
      }
    },
 
 
 
created () {
  db.collection ('Personale')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach (doc => {
        const data =  {
          'immagine': doc.data().immagine,
          'nome': doc.data().nome,
          'costo': doc.data().costo,
        }
        this.Personale.push(data)
      })
    }) 

  }
 
}
 
</script>
 
 
<style scoped>
 
</style>
 
