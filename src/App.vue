<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
<!-- //AN app hét đờ// -->
<template>
  <div>
    <AppHeader v-if="$route.name !== 'login'" />

    <router-view />
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
