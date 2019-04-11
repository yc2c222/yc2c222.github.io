<template>
	<div class="">
    <transition>
      <slot></slot>
    </transition>
	</div>
</template>

<script>
    export default {
        name: 'FadeAnimation',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  .v-enter,.v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
