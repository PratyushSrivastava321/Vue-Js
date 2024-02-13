<template>
    <div class="nav">
    <router-link to="/">HomeSome</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
    </div>  
</template>

<script>

export default {
    name : "HeaDer",
    methods : {
        logout(){
            console.log("Logout")
            localStorage.clear()
            this.$router.push({name:'LogIn'})
        }
    }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
    margin: auto;
}
.nav a{
    float: left;
    color: #f2f2f2;
    padding: 16px 16px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-right:4px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>