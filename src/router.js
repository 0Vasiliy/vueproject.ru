import VueRouter from 'vue-router'
import vCarousel from './components/carousel/vCarousel'
import vFormValidate from './components/form/v-form-validate'

export default new VueRouter({
    routes:[
        {
            path: '',
            component: vCarousel
        },
        {
            path: '/vFormValidate',
            component: vFormValidate
        }
    ],
    mode: 'history'
})

