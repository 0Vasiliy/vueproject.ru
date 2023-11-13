<template>
    <div class="vCarousel-item">
        <img :src="require('@/assets/img/' + item_data.img)" alt="">        
       
    </div>
</template>

<script>
export default {
    name: 'vCarouselItem',
    props:{
        item_data:{
            type: Object,
            default: () => {}
        }      
    },
   
}
</script>

<style scoped>
img{
  width: 600px;
  height: 400px;
}

</style>