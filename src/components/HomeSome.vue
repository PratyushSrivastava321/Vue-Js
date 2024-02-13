<template>
    <HeaDer />
    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <table border="1">
        <tr id="fr">
            <td>Name</td>
            <td>Id</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Update</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.id}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td><router-link to="'/update/'">Update</router-link></td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import HeaDer from './HeaDer.vue'
    export default {
        name : "HomeSome",
        data(){
            return {
                name : "",
                restaurants : []
            }
        },
        components:{
            HeaDer
        },
        async mounted(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if(!user){
                this.$router.push({name:"SignUp"})
            }
            let result = await axios.get("http://localhost:3000/restaurant")
            console.warn(result)
            this.restaurants = result.data
        }
    };
</script>

<style>
td{
    width: 150px;
    height: 40px;
}

</style>