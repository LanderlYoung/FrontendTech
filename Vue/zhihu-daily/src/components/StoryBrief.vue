<template>
    <router-link v-bind:to="toPath">
        <div class="container">
            <img v-bind:src="imageUrl">
            <p>{{story.title}}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "StoryBrief",
        props: {
            story: {
                type: Object
            }
        },
        created() {
            console.log(this.params)
        },
        computed: {
            toPath() {
                return "/storyDetail/" + this.story.id
            },
            imageUrl() {
                return this.story.images[0].replace('https', 'http')
            }

        }

    }
</script>

<style scoped>
    .container {
        display: flex;
    }
</style>