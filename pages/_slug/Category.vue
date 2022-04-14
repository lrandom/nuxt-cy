<template>
  <div>Category. Slug is {{ slug }}</div>
</template>

<script>
export default {
  data() {
    return {
      slug: null
    }
  },
  mounted() {
    this.slug = this.$route.params.slug;
  }
}
</script>

