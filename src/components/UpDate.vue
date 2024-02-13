<template>
    <HeaDer />
    <h1>Hello, Welcome on Update restro Page</h1>
    <form action="" class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" placeholder="Enter Address" v-model="restaurant.address"/>
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact"/>
        <button type="button" v-on:click="addRestro">Add Restaurant</button>
    </form>
</template>

<script>
import HeaDer from './HeaDer.vue'
export default {
    name : "UpDate",
    components:{
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
    mounted(){
    console.warn("mount");
    let user = localStorage.getItem('user-info');
    if(user) { 
        this.$router.push({name:"UpDate"})
    }
}
};
</script>