<template>
  <div />
</template>

<script>

export default {
  name: 'IndexPage',
  mounted () {
    this.$router.push({
      name: 'id',
      params: {
        // eslint-disable-next-line new-parens
        id: `f${(+new Date).toString(16)}`
      }
    })
  }
}
</script>
