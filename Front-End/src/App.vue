<template>
    <TheNavbar />
    <RouterView />
</template>
  
<script>
import { TheNavbar } from './components';

export default {
    components: {
        TheNavbar
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    text-decoration: none;
    color: black;
}

body {
    margin: 0;
    padding: 0;
    background-color: #34495E;
    font-family: 'Roboto', sans-serif;
}
</style>