import VueRouter from 'vue-router'
import vModal from '@/components/form/v-modal.vue'
import vCarouselMain from '@/components/carousel/vCarousel-main.vue';
import vMain from '@/components/main/v-main.vue'

export default new VueRouter({
    routes:[   
        {
            path: '/',
            component: vMain,
        },    
        {
            path: '/vModal',
            component: vModal,
           
        },
        {
            path: '/vCarouselMain',
            component: vCarouselMain
        }
       
    ],
    mode: 'history',
    base:"/",
})
