<template>
  <b-modal
    id="userModal"
    hide-footer
  >
    <template #modal-title>
      Введите ваше имя!
    </template>
    <div class="d-block">
      <input
        v-model="username"
        type="text"
        placeholder="Enter..."
      >
    </div>
    <b-button
      class="mt-3"
      block
      @click="enterHandler"
    >Войти</b-button>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalWindow',
  data () {
    return {
      username: ''
    }
  },
  mounted () {
    this.$bvModal.show('userModal')
  },
  methods: {
    enterHandler () {
      this.$emit('input', this.username)
      this.$bvModal.hide('userModal')
    }
  }
}
</script>
