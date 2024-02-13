<template>
    <img class="logo" src="../assets/logo.webp" />
<h3>Fauget Restaurant</h3>
<div class="signup">
    <input type="text" v-model="name" placeholder="Name" />
    <input type="text" v-model="email" placeholder="E-Mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button v-on:click="signUp">SignUp</button>
    <p>
        <router-link to="/login">LogIn</router-link>
    </p>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data(){
        return {
            name : "",
            email : "",
            password : ""
        }
    },
    methods : {
        async signUp(){
            console.warn(this.email,this.name,this.password)
            let result = await axios.post("http://localhost:3000/user",{
                email:this.email,
                name : this.name,
                password : this.password
            });
            console.warn(result)
            if(result.status === 201){
                localStorage.setItem("user-info",JSON.stringify(result.data)),
                this.$router.push({name:"HomeSome"})
            }
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
