<template>
<HeaDer />
<h1>Hello, Welcome on Add restro Page</h1>
<form action="" class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="addRestro">Add Restaurant</button>
</form>
</template>

<script>
import axios from 'axios';
import HeaDer from './HeaDer.vue'
export default {
    name: "AddRestro",
    components: {
        HeaDer
    },
    data() {
        return {
            restaurant :{
                name: "",
                address: "",
                contact: "",
            }
        }
    },
    methods: {
        async addRestro() {
            const result = await axios.post("http://localhost:3000/restaurant",{
                name : this.restaurant.name,
                address : this.restaurant.address,
                contact: this.restaurant.contact
            })
            if(result.status === 201){
                this.$router.push({name:"HomeSome"})
            }
            console.warn(result)
        }
    },
    mounted() {
        console.warn("mount");
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: "AddRestro" })
        }
    }
};
</script>

<style>
.add button {
    width: 200px;
}
</style>
