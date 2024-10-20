<!-- <template>
    <form class="v-form-validate row g-3" @submit.prevent="handlerSubmit">
        <div class="container">
            <div class="v-form-group">
           
            <div class="v-form-input  col-md-8">
                <label for="login" class="form-label">Логин</label>
                <input 
                type="input" 
                class="form-control" 
                id="login" 
                placeholder="login"
                v-model.trim="form.login"
                :class="$v.form.login.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
                Обязательное поле
                </p>
                <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
                Здесь должно быть больше 5-и символов
                </p>
            </div>
           
            <div class="v-form-input  col-md-8">
            <label for="inputEmail4" class="form-label">Эл. адрес</label>
            <input 
            type="email" 
            class="form-control" 
            id="inputEmail4" 
            placeholder="email@mail.ru"
            v-model.trim="form.email"
            :class="$v.form.email.$error ? 'is-invalid' : ''"
            >
            <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">
            Email неккоректный
            </p>
            </div>
          
            <div class="v-form-input col-md-8">
                <label for="inputPassword4" class="form-label">Пароль</label>
                <input 
                type="password" 
                class="form-control" 
                id="inputPassword4" 
                placeholder="************"
                v-model.trim="form.password"
                :class="$v.form.password.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">
                Обязательное поле
                </p>
            </div>
        
            <div class="v-form-input col-md-8 form-selected">
                <label for="inputState" class="form-label">Город</label>
                <select id="inputState" 
                class="form-select" 
                v-model="form.city"
                >
                <option class="form-option-list"
                 selected
                 v-for="(city,index) in cityes"
                 :value="city.value"
                 :key="index"
                 >
                 {{ city.label }}</option>                
                </select>
            </div>
          
            <div class="v-form-input col-md-8 form-selected">
                <label for="inputState" class="form-label">Адрес</label>
                <select
                class="form-select" 
                id="inputState2" 
                multiple
                v-model="form.faforitAdres"
                >
                <option class="col-md-8"
                v-for="(adres,index) in adreses"
                 :value="adres.value"
                 :key="index"
                 >
                 {{ adres.label }}
                
            </option>
                </select> 
                            
                
            </div>
           
            <div class="v-form-input col-md-8">
                <label for="inputAddress2" class="form-label">ФИО</label>
                <input 
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="ФИО"
                v-model.trim="form.fio"
                :class="$v.form.fio.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.fio.$dirty && !$v.form.fio.required" class="invalid-feedback">
                Введите ФИО
                </p>
            </div> 
           
            <div class="v-form-input col-md-8">
                <label for="inputAddress3" class="form-label">Телефон</label>
                <input
                type="tel"
                class="form-control" 
                id="inputAddress3" 
                placeholder="+7(000)-000-00-00"
                v-model.trim="form.phone"
                v-mask="'##################'"
                :class="$v.form.phone.$error ? 'is-invalid' : ''"                
                maxlength="18"
                minlength="18" 
                v-phone           
                >
                <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="invalid-feedback">
                Введите номер телефона
                </p>
            </div>  
          
            <div class="v-form-input col-md-8">
                <label for="inputAddress4" class="form-label">Индекс</label>
                <input 
                type="text" 
                class="form-control" 
                id="inputAddress4" 
                placeholder="192158"
                v-model="form.indexPochta"
                :class="$v.form.indexPochta.$error ? 'is-invalid' : ''"
                v-mask="'######'"
                >
                <p v-if="$v.form.indexPochta.$dirty && !$v.form.indexPochta.required" class="invalid-feedback">
                Введите номер телефона
                </p>
            </div>
         
            <div class="v-form-radio col-md-8">
          
                <div class="v-form-input radio-maile col-md-8">
                <div class="form-check col-md-8">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    id="male"
                    value="male"
                    v-model="form.gendere"
                    >
                    <label class="form-check-label" for="male">
                        Мужчина
                    </label>
                    </div>
                </div>
            
                <div class="v-form-input radio-fimale col-md-8">
                    <div class="form-check col-md-8">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    id="female"
                    value="female"
                    v-model="form.gendere"
                    >
                    <label class="form-check-label" for="female">
                        Женщина
                    </label>
                    </div>
                </div>
            </div>
                    
                
            <div class="v-form-input col-md-8">
                <button type="submit"  
                class="v-form-btn btn btn-primary"
                >Войти в систему</button>
            </div>
        </div>
        </div>       
    </form>   
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, numeric} from 'vuelidate/lib/validators'

export default {
    name: 'vFormValidate',
    mixins: [validationMixin],    
    data(){
        return{
            form:{
                login: '',
                fio: '',
                phone: '',
                email: '',
                password: '',
                indexPochta: '',
                checkbocks: false,
                city: 'Moskva',
                faforitAdres: ['Mockovskii pr'],
                gendere: 'male'
            },          
            cityes: [
                {
                    label: 'Москва',
                    value: 'Moskva',
                },
                {
                    label: 'Тула',
                    value: 'Tula'
                },
                {
                    label: 'Орёл',
                    value: 'Orel'
                }               
            ],
            adreses:[
            {
                    label: 'Московский пр',
                    value: 'Mockovskii pr',
                },
                {
                    label: 'Ленинский пр',
                    value: 'Leninskii pr'
                },
                {
                    label: 'Центральная ул',
                    value: 'Centralnay ul'
                } 
            ],
       
        }
    },
    validations: {
      form: {
        login: { required, minLength: minLength(5)},
        email: { required, email },
        password: { required },
        fio: {required},
        phone: {required, numeric},
        indexPochta:{required, numeric},
        checkbocks:{required}
      }
    },
    methods:{
        handlerSubmit(){
            this.$v.form.$touch()
        if (!this.$v.form.$error) {
          console.log('Валидация прошла успешно')
        }
    }
   
    }
}
</script>
<style scoped>
    .v-form-validate{
        max-width: 600px;
        margin: 0 auto;
        
    }
    .v-form-group{
        margin-left: 50px;
        margin-right: 50px;
        padding: 50px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       border: 4px solid #2f4f4f;
    }
    .v-form-input{
        margin-top: 15px;
    }
    .v-form-btn{
        margin-left: 0;
    }
    .v-form-btn{
        background-color: #778899;
        color: white;
        border: none;
    }
    .v-form-btn:hover{
        transition: all ease-in .3s;
        background-color: #2f4f4f;
    }
    .v-form-radio{
        display: flex;
    }
    .radio-fimale {
        margin-left: 20px;
    }
    .form-option-list{
        width: 100px;
        font-size: 10px;
    }
    label{
        display: flex;
        color: #2f4f4f;  
    }
    input{
        border: 3px solid teal;;
    }
    select{
        border: 3px solid teal;;
    }
    option{
        color: #2f4f4f;
        max-width: 200px;
        font-size: 14px;
    }
    @media(max-width: 1200px){
        .v-form-input{
        margin-top: 10px;
        }
        .v-form-group{
            padding: 10px;
        }
    }
    @media(max-width: 767px){
        .form-selected {
        flex: 0 0 50%;
        width: 50%;
        }
    }
    @media(max-width: 585px){
        .form-selected {
        flex: 0 0 55%;
        width: 55%;
        }
    }
    @media(max-width: 555px){
        .form-selected {
        flex: 0 0 57%;
        width: 57%;
        }
    }
    @media(max-width: 540px){
        .form-selected {
        flex: 0 0 60%;
        width: 60%;
        }
    }
    @media(max-width: 510px){
        .form-selected {
        flex: 0 0 62%;
        width: 62%;
        }
    }
    @media(max-width: 500px){
        .form-selected {
        flex: 0 0 65%;
        width: 65%;
        }
    }
    @media(max-width: 490px){
        .form-selected {
        flex: 0 0 67%;
        width: 67%;
        }
    }
    @media(max-width: 470px){
        .form-selected {
        flex: 0 0 71%;
        width: 71%;
        }
    }
    @media(max-width: 460px){
        .form-selected {
        flex: 0 0 73%;
        width: 73%;
        }
    }
    @media(max-width: 450px){
        .form-selected {
        flex: 0 0 80%;
        width: 80%;
        }
    }
    @media(max-width: 430px){
        .form-selected {
        flex: 0 0 82%;
        width: 82%;
        }
    }
    @media(max-width: 411px){
        .form-selected {
        flex: 0 0 85%;
        width: 85%;
        }
    }
    @media(max-width: 400px){
        .form-selected {
        flex: 0 0 75%;
        width: 75%;
        }
        label,input,select,option{
            font-size: 12px;
        }
    }
    @media(max-width: 380px){
        .form-selected {
        flex: 0 0 78%;
        width: 78%;
        }
    }
    @media(max-width: 370px){
        .form-selected {
        flex: 0 0 84%;
        width: 84%;
        }
    }
    @media(max-width: 350px){
        .form-selected {
        flex: 0 0 90%;
        width: 90%;
        }
        .v-form-radio{
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
        }
        .radio-fimale {
        margin-left: 4px;
        }
       
    }
    @media(max-width: 340px){
        .form-selected {
        flex: 0 0 100%;
        width: 100%;
        }
    }
    @media(max-width: 300px){
    
        label,input,select,option{
            font-size: 10px;
        }
        .v-form-btn{
            max-width: 120px;
            font-size: 10px;
        }
    }
    @media(max-width: 260px){
        
        label,input,select,option{
            font-size: 8px;
        }
        .v-form-btn{
            max-width: 100px;
            font-size: 8px;
        }
    }
</style> -->