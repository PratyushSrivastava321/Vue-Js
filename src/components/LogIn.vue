<template>
<h1>Login Page</h1>
<img class="logo" src="../assets/logo.webp" />
<div class="login">
    <input type="text" v-model="email" placeholder="E-Mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button v-on:click="login">Login</button>
    <p>
        <router-link to="/sign-up">SignUp</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name : "LogIn",
    data(){
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        async login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            if(result.status===200 && result.data.length > 0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({name:"HomeSome"});
            }
            console.warn(result)
        }
    },
    mounted(){
        console.warn("mount");
        let user = localStorage.getItem('user-info');
        if(user) { 
            this.$router.push({name:"HomeSome"})
        }
    }
}
</script>