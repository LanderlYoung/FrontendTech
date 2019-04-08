<template>
    <div>
        <ul>
            <li v-bind:class="{checked: user.checked}" v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.checked">
                {{user.name}} {{user.email}}
                <button v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Users",
        data: function () {
            return {
                users: [
                    {
                        name: "young",
                        checked: false,
                    },
                    {
                        name: "young",
                        checked: false,
                    },
                ]
            }
        },
        methods: {
            deleteUser: function (user) {
                this.users.splice(this.users.indexOf(user), 1)
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(function (rsp) {
                    this.users = rsp.body
                })
        }
    }
</script>

<style scoped>

    .checked {
        text-decoration: line-through;
    }

</style>