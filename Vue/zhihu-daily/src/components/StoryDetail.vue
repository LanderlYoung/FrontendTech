<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "StoryDetail",
        created() {
            this.storyId = this.$route.params.storyId
            console.log(this.storyId)
        }
    }
</script>

<style scoped>

</style>