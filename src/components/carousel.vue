<template>

<!--Impostazione della struttura del carosello-->
    <div class="carousel">
        <slot> <!--carouselItem passato dalla Home--> </slot>
<!--Buttons per il cambio item-->
        <md-button class="next md-icon-button md-raised" @click="next">
            <md-icon>chevron_right</md-icon>
        </md-button>
        <md-button class="prev md-icon-button md-raised" @click="prev">
            <md-icon>chevron_left</md-icon>
        </md-button>
    </div>
</template>

<script>
export default  {
    name:"carousel",
    methods: {
//Dichiaro la funzione next e la passo al parent (Home) dove potrà essere settata e triggerata
        next(){
            this.$emit('next');
        },
//Dichiaro la funzione prev e la passo al parent (Home) dove potrà essere settata e triggerata
        prev (){
            this.$emit('prev');
        }
    },

  }
</script>

<style scoped>
/* Media query per gestire la responsiveness del carosello */
@media only screen and (max-width: 1150px) {
    .carousel {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 350px;
    }
}

@media only screen and (min-width: 1150px) {
    .carousel {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 500px;
    }
}

@media only screen and (min-width: 1440px) {
    .carousel {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 750px;
    }
}

/* CSS per i buttons del carosello */
    button{
        position: absolute;
        top: calc(50% - 20px);
        opacity:0.6;
    }

    .next {
        right: 0;
        margin: 6px;
    }

    .prev{
        left: 0px;
        margin: 6px;
    }

</style>
