<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <SignUp /> -->
  <router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue'

export default {
    name: 'App',
    // components: {
    //     SignUp
    // }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body{
    padding :0;
    margin: 0;
}
.logo{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 30px;
}
.signup input ,.login input , .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    border: 1px solid skyblue;
    border-radius: 20px
}
.signup button ,.login button , .add button{
    width: 100px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid skyblue;
    background-color: saddlebrown;
    color: lightgoldenrodyellow;
}
</style>
