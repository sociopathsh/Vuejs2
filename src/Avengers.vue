<template>
    <ul>
        <li v-for="avenger in avengers">{{ avenger }}</li>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
                avengers: ['Thor','Hulk','Iron Man']
            }
        }
    }
</script>

<style>

</style>
