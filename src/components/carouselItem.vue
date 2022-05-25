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
        'direction'
    ],
    data: function() {
        return {

        }
    }
  }
</script>

<style scoped>
    .carouselItem  {
        /*height: 500px;*/
        width: 100%;
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

