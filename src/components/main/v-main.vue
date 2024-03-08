<template >
    <div class="v-main">
        <div class="portfolio" id="portfolio_id2">
        <div class="container">
            <h2 class="title title_fz16 title__section-title">Портфолио</h2>
            <div class="title title_fz36 title__section-subtitle">Мои <span>VUE</span> работы</div>
            <div class="divider"></div>
            <div class="portfolio__wrapper">
                <router-link to="/vFormValidate" class="portfolio__item">
                    <img src="@/assets/img/works/vue2_form.png" alt="vue2_form">                                    
                </router-link>  
                <router-link to="/vCarouselMain" class="portfolio__item">
                    <img src="@/assets/img/works/vue-carusel.jpg" alt="vue2_carousel">                  
                </router-link>  
                <a v-bind:href="link" class="portfolio__item">
                    <img src="@/assets/img/works/liss.jpg" alt="vue2_carousel">                  
                </a>         
            </div>           
        </div>
    </div>
    </div>
</template>
<script>

export default {
    name: 'vMain',
    data(){
        return{
            link: 'http://www.vetlis.ru/'
        }
    }

}
</script>
<style scoped lang="scss">
    .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 60px;
    &_fz16 {
        font-size: 16px;
        line-height: 24px;
    }
    &_fz36 {
        font-size: 36px;
    }
    &__section-title {
        position: relative;
        text-align: center;
        &:before {
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &__section-subtitle {
        text-align: center;    
        span{
            color: teal;
        }
        }
}
.portfolio {
    padding-top: 120px;
    &__wrapper {
        margin-top: 60px;
        display: grid;
        grid-template: repeat(1, 280px) / repeat(4, 280px);
        grid-auto-rows: 280px;
        gap: 5px;
        .vertical {
            grid-row: 1 / 3;
            grid-column:  4/ 5;
        }
        .horizonal {
            grid-row: 2 / 3;
            grid-column: 2 / 4;
        }
    }
    &__item {
        transition: all 0.6s;
        border: 3px solid teal;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover{
            transform: scale(1.07);
        }
    }
}
</style>