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
.v-carousel-item{
    margin-top: 100px;
    margin-bottom: 100px;
    max-width: 120%;
    max-height: 400px;
    border-radius: 20px;
    background-size: cover auto 100%;
    background-repeat: no-repeat center;
}
img{
  width: 600px;
  height: 400px;  
  border-radius: 20px;
}


@media (max-width: 620px){

    img{
        width: 500px;
    }
}
@media (max-width: 587px){

img{
    max-width: 450px;
    height: auto;
}

}

@media (max-width: 535px){

img{
    max-width: 380px;
}
}

@media (max-width: 485px){

img{
    max-width: 350px;
}
}
@media (max-width: 440px){

img{
    max-width: 300px;
}
}
@media (max-width: 330px){

img{
    max-width: 250px;
}
}
@media (max-width: 275px){

img{
    max-width: 200px;
}
}



</style>