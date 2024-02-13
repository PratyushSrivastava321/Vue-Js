import {createRouter,createWebHistory} from 'vue-router'
import HomeSome from './components/HomeSome.vue'
import SignUp from './components/SignUp.vue'
import LogIn from "./components/LogIn.vue"
import AddRestro from "./components/AddRestro.vue"
import UpDate from "./components/UpDate.vue"


const routes = [
    {
        name : "HomeSome",
        component:HomeSome,
        path : '/'
    },
    {
        name : "SignUp",
        component:SignUp,
        path : '/sign-up'
    },
    {
        name : "LogIn",
        component:LogIn,
        path : '/LogIn'
    },
    {
        name : "AddRestro",
        component:AddRestro,
        path : '/add'
    },
    {
        name : "UpDate",
        component:UpDate,
        path : '/update'
    },
]

const router  = createRouter({
    history : createWebHistory(),
    routes
})

export default router