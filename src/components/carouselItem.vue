<template>
    <transition :name="direction" mode="in-out">
        <div v-show="visibleItem === index" class="carouselItem">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default  {
    props: [
        'visibleItem',
        'index',
        'direction',
    ],
    data: function() {
        return {

        }
    }
  }
</script>

<style scoped>

@media only screen and (max-width: 410px) {
    .carouselItem{
        position: absolute;
        top:0;
        left:-80%;
    }
}

@media only screen and (min-width: 410px) {
    .carouselItem{
        position: absolute;
        top:0;
        left:0;
    }
}

@media only screen and (min-width: 760px) {
     .carouselItem  {
        position: absolute;
        top:0;
        left:0;
    }
}

@media only screen and (min-width: 1440px) {
     .carouselItem  {
        position: relative;
        top:0;
        left:0;
    }
}

@media only screen and (min-width: 2500px) {
     .carouselItem  {
        position: relative;
        top:-50%;
        left:0;
    }
}
   
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

