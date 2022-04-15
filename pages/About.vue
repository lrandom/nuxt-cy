<template>
  <div>This is About Page</div>
</template>

<script>
export default {
  name: "About.vue",
  middleware: (ctx) => {
    console.log("About.vue middleware");
  }
}
</script>

<style scoped>

</style>
