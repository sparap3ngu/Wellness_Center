<template>
<!--Impostazione del singolo elemento del carosello-->
        <transition :name="direction" mode="in-out" id="carouselItem">
            <div v-show="visibleItem === index" class="carouselItem">
                <slot> <!--Immagine "passata" dalla Home--> </slot>
            </div>
        </transition>
</template>

<script>
export default  {
    name: "carouselItem",
//Impostazione delle proprietà di carouselItem, che vengono poi utilizzate nella Home per
    props: [
        'visibleItem',
        'index',
        'direction',
    ],
  }
</script>

<style scoped>
/* Media query per gestire la responsiveness del carosello */
    /* 0 - 410px*/ 
@media only screen and (max-width: 410px) {
    .carouselItem{
        position: absolute;
        top:0;
        left:-80%;
    }
}
    /* 410 - 760px */
@media only screen and (min-width: 410px) {
    .carouselItem{
        position: absolute;
        top:0;
        left:0;
    }
}
    /* 760 - 1440px */
@media only screen and (min-width: 760px) {
     .carouselItem  {
        position: absolute;
        top:0;
        left:0;
    }
}
    /* 1440 - 2500px */
@media only screen and (min-width: 1440px) {
     .carouselItem  {
        position: relative;
        top:0;
        left:0;
    }
}
    /* 2500+ px */
@media only screen and (min-width: 2500px) {
     .carouselItem  {
        position: relative;
        top:-50%;
        left:0;
    }
}

/* Gestione delle animazioni del carosello */
    /* Da destra a sinistra */
    .left-enter-active {
        animation: leftInAnimation 0.4s ease-in-out
    }
    .left-leave-active {
        animation: leftOutAnimation 0.4s ease-in-out     
    }

    @keyframes leftInAnimation {
        from { transform: translateX(100%) }
        to  { transform: translateX(0%) }
    }

    @keyframes leftOutAnimation {
        from { transform: translateX(0%) }
        to  { transform: translateX(-100%) }        
    }

    /* Da destra a sinistra */
    .right-enter-active {
        animation: rightInAnimation 0.4s ease-in-out
    }
    .right-leave-active {
        animation: rightOutAnimation 0.4s ease-in-out     
    }

    @keyframes rightInAnimation {
        from { transform: translateX(-100%) }
        to  { transform: translateX(0%) }
    }

    @keyframes rightOutAnimation {
        from { transform: translateX(0%) }
        to  { transform: translateX(100%) }        
    }
</style>

