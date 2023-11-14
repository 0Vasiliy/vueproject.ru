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
import vCarouselItem from './vCarousel-item.vue';

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
</style>