<template>
    <div class="wrapper">
        <div class="vCarousel" :style="{'margin-left': '-' + (100 * currentSlideindex) + '%'}">
            <vCarouselItem
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
        />
        </div>
        <div class="btn_block">
            <button @click="nextSlide" class="btn">Назад</button>
            <button @click="prevSlide" class="btn">Вперёд</button>          
        </div>             
    </div>
</template>

<script>
import vCarouselItem from '@/components/carousel/vCarousel-item.vue';

export default {
    name: 'vCarousel',
    components:{
        vCarouselItem
    },
    props:{
        carousel_data:{
            type: Array,
            default: () => []
        },
        interval:{
            type:Number,
            default: 0
        }
    },
    data(){
        return{
            currentSlideindex: 0
        }
    },
    methods:{
        prevSlide(){
            if(this.currentSlideindex >= this.carousel_data.length - 1){
                this.currentSlideindex = 0
            }else{
                this.currentSlideindex++   
            }
                    
        },
        nextSlide(){          
            if(this.currentSlideindex > 0){
                this.currentSlideindex--
            }
            
        }
    },
    mounted(){
        if(this.interval > 0){
            let vn =this;
            setInterval(function(){
                vn.prevSlide()
            },vn.interval)
        }
    }

}

</script>

<style  scoped>
    .wrapper{
        max-width: 600px;
        overflow: hidden;
        margin: 0 auto;
    }
    .vCarousel{
        display: flex;
        transition: all ease-in-out .5s;
    }
    .btn_block{
        max-width: 600px;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .btn{
        width: 80px;
        height: 40px;
        background: teal;
        cursor: pointer;
        color: white;
        border: none;
    }
    .v-carousel{
        max-width: 600px;
        width: 100%;
        max-height: 900px;
        overflow: hidden;
        border-radius: 20px;
    }
    .v-carousel-slide{
        display: flex;
        transition: all ease-in-out .5s;
    }
   
    .v-carousel-slide img{         
            width: 600px;
            height: 400px;
            border-radius: 20px;
        }
  
    
    @media (max-width: 620px){
        .v-carousel{
            max-width: 500px;
        }
        .v-carousel-slide img{
            width: 500px;          
        }
        .wrapper{
            max-width: 500px;
            margin-left: 30px;
            margin-right: 30px;
        }
    }
    @media (max-width: 587px){
        .v-carousel{
            max-width: 450px;
            height: auto;
        }
        .v-carousel-slide img{
            max-width: 450px;
            height: auto;          
        }
        .wrapper{
            max-width: 450px;
        }
    }
    @media (max-width: 535px){
        .v-carousel{
            max-width: 380px;
        }
        .v-carousel-slide img{
            max-width: 380px;          
        }
        .wrapper{
            max-width: 380px;
            margin-left: auto;
            margin-right: auto;
        }
        .btn{
            width: 60px;
            height: 30px;  
            font-size: 12px;
        }
    }
    @media (max-width: 485px){
        .v-carousel{
            max-width: 350px;
        }
        .v-carousel-slide img{
            max-width: 350px;          
        }
        .wrapper{
            max-width: 350px;
        }
    }
    @media (max-width: 440px){
        .v-carousel{
            max-width: 300px;
        }
        .v-carousel-slide img{
            max-width: 300px;          
        }
        .wrapper{
            max-width: 300px;
        }
    }
    @media (max-width: 330px){
        .v-carousel{
            max-width: 250px;
        }
        .v-carousel-slide img{
            max-width: 250px;          
        }
        .wrapper{
            max-width: 250px;
        }
    }
    @media (max-width: 275px){
        .v-carousel{
            max-width: 200px;
        }
        .v-carousel-slide img{
            max-width: 200px;          
        }
        .wrapper{
            max-width: 200px;
        }
    }
</style>