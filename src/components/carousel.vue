carousel:
<template>
    <div class="carousel">
        <slot></slot>

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
    data: function() {
        return {

        }
    },
    methods: {
        next(){
            this.$emit('next');
        },
        prev (){
            this.$emit('prev');
        }
    },

  }
</script>

<style scoped>
    .carousel {
        position: relative;
        width:100%;
        /*height: 500px;
        overflow: hidden;*/
    }

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
