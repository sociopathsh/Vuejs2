<template>
    <div>
        <h1>Lists of Avengers</h1>
        <ul>
            <li v-for="avenger in avengers">{{ avenger }}</li>
        </ul>
    </div>
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

<style scoped>
h1 {
    color: green;
}
</style>
