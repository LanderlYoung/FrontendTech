<template>
    <div>
        <label>
            <input type="text" v-model="greetText">
        </label>
        <h1>{{greetText}}</h1>
        <p v-if="showName">{{user.firstName}}</p>
        <ul>
            <li v-for="user in users">
                {{user.firstName}} {{user.lastName}}
            </li>
        </ul>

        <input type="text" v-model="greetContent">
        <button v-on:click="sayGreet">say greet</button>
        <hr/>

        <p>{{newUserName}}</p>
        <label>FirstName:</label>
        <input type="text" v-model="newUser.firstName">
        <br/>
        <label>LastName:</label>
        <input type="text" v-model="newUser.lastName">
        <hr/>
        <p>{{propMessage}}</p>
    </div>
</template>

<script>
    export default {
        name: "Test",
        props: {
            propMessage: {
                type: String,
                default: "foo bar"
            }
        },
        data: function () {
            return {
                greetText: "Hello World",
                showName: true,
                greetContent: '',
                user: {
                    firstName: "taylor",
                    lastName: "Young"
                },
                users: [
                    {firstName: "taylor", lastName: "young"},
                    {firstName: "burno", lastName: "mars"},
                ],
                newUser: {},
            }
        },
        methods: {
            sayGreet: function () {
                alert(this.greetContent)
            }
        },
        computed: {
            newUserName: function () {
                return this.newUser.firstName + " " + this.newUser.lastName
            }
        }
    }
</script>

<style scoped>

</style>