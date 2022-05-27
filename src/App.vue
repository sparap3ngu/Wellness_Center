<template>
  <div id="App">
    <md-app md-mode="fixed" md-waterfall >
      <md-app-toolbar class="md-primary">

        <div class="md-toolbar-row">
          <md-button id="menu" class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <router-link to="/home">
            <h3 class="md-title">
            <img src="/logo2.png" id="logo" title="logo" alt="logo">
              Wellness Center
            </h3>
          </router-link>
                    
                    
        <!--div>
          <md-tabs class="md-primary" md-alignment="right">
            <md-tab id="tab-trattamenti" md-label="Trattamenti" to="/trattamenti"></md-tab>
            <md-tab id="tab-servizi" md-label="Servizi" to="/servizi"></md-tab>
            <md-tab id="tab-contatti" md-label="Contatti" to="/contatti"></md-tab>
          </md-tabs>
        </div--> 

          <div id="toolbar" class="md-toolbar-section-end">
              <md-button class="toolbarButton" to="/home">Home</md-button>
              <md-button class="toolbarButton" to="/trattamenti" >Trattamenti</md-button>
              <md-button class="toolbarButton" to="/servizi">Servizi</md-button>
              <md-button class="toolbarButton" to="contatti">Contatti</md-button>
          </div>
        </div>

       <div class="md-toolbar-row">
          <md-tabs class="md-primary md-toolbar-section-end" md-alignment="fixed">
            <md-tab id="tab-massaggi" md-label="Massaggi" to="/trattamenti/massaggi"> </md-tab>
            <md-tab id="tab-altro" md-label="Altro" to="/trattamenti/altro"> </md-tab>
          </md-tabs>

       </div>
         


    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-primary" md-elevation="0">
          <h3>Menù</h3>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon class="md-section-end">chevron_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list >
          <md-list-item to="/home">
            <span class="md-list-item-text">Home</span>
          </md-list-item>
          <md-list-item to="/trattamenti">
            <span class="md-list-item-text">Trattamenti</span>
          </md-list-item>
          <md-list-item to="/servizi">
            <span class="md-list-item-text">Servizi</span>
          </md-list-item>
          <md-list-item to="/Contatti">
            <span class="md-list-item-text">Contatti</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
   
    <md-app-content>
        <router-view />
    </md-app-content>
  </md-app>
  </div>
  
</template>

<script>
export default  {
  name: "App",
  data: function(){
    return{
      menuVisible: false,
    }
  },
}
</script>

<style>
 .md-app {
    height: 100vh;
  }
  .md-app-content{
    padding:0;
    border:0;
  }

  .md-drawer {
  width: 250px;
  }

  #logo {
    width:40px;
    height: auto
  }
  
  @media only screen and (min-width: 620px) {
    #menu {
      display: none;
    }
  }

    @media only screen and (max-width: 620px) {
    #toolbar {
      display: none;
    }
  }
</style>



