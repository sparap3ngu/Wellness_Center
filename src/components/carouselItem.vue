<template>
    <div class="carouselItem" v-show="visibleItem === index">
        <slot></slot>
    </div>
</template>

<script>
export default  {
    props: [
        'visibleItem',
        'index'
    ],
    data: function() {
        return {

        }
    }
  }
</script>

<style scoped>
</style>
