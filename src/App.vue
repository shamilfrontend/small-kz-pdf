<script setup lang="ts">
import VuePdfApp from "vue3-pdf-app";

import "vue3-pdf-app/dist/icons/main.css";
</script>

<template>
  <div>
      <vue-pdf-app
          style="height: 100vh;"
          pdf="/catalog.pdf"
      />
  </div>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>
