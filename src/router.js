import VueRouter from 'vue-router'
import vFormValidate from '@/components/form/v-form-validate'
import vCarouselMain from '@/components/carousel/vCarousel-main.vue';
export default new VueRouter({
    routes:[        
        {
            path: '/vFormValidate',
            component: vFormValidate
        },
        {
            path: '/vCarouselMain',
            component: vCarouselMain
        },
       
    ],
    mode: 'history'
})

