<template>
  <ul class="menu">
    <li><RouterLink to="/">About</RouterLink></li>
    <li><RouterLink to="/posts">Posts</RouterLink></li>
  </ul>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.menu {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.menu li {
  font-family: "Noto Sans", sans-serif;
  line-height: 1.6em;
  font-size: 16px;
}

.menu li a {
  color: #6a6969;
  text-decoration: none;
}

.menu li a:hover {
  text-decoration: underline;
}

.router-link-active {
  color: #000 !important;
}
</style>
