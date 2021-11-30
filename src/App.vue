<template>
  <the-navbar></the-navbar>
  <router-view/>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "TheIndexApp",
  components: {
    TheNavbar
  }
}
</script>
<style>
</style>
