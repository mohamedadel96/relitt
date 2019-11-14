<template>
<section id="app">
    <nav-bar/>
    <router-view/>
</section>
</template>

<script>
import navBar from '../components/app/navbar'
export default {
    components: {
        navBar
    }

}
</script>

<style>
#app {
    background: #fafafa;
    height: 100vh;
}

</style>