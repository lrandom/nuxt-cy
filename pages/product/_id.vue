<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  head() {
    return {
      title: "This Product Detail " + this.id,
      meta: [
        {
          name: "description",
          content: "This is the product detail page " + this.id
        }
      ]
    }
  },
  data() {
    return {
      id: '',
    }
  },
  created() {
    this.id = this.$route.params.id
  },
}
</script>
