<template>
    <div v-carousel-main>
        <vCarousel
        :carousel_data="sliderItems"
        :interval="2000"
        />
        <vCarouselItem/> 
    </div>
</template>
<script>
import vCarouselItem from './vCarousel-item.vue';
import vCarousel from './vCarousel.vue';
export default {
    name: 'VcarouselMain',
    components:{
        vCarouselItem,
        vCarousel
    },
    data(){
    return{
      sliderItems:[
        {id:1, name: 'img1', img:'1.jpg'},
        {id:2, name: 'img2', img:'2.jpg'},
        {id:3, name: 'img3', img:'3.jpg'},
        {id:4, name: 'img4', img:'4.jpg'},
        {id:5, name: 'img5', img:'5.jpg'},
      ]
    }
  }
}
</script>
<style scoped>
    
</style>