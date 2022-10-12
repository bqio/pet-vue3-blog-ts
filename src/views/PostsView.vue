<template>
  <PostList v-if="!isLoading" :posts="posts" />
  <p v-else>Loading posts...</p>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post";
import { storeToRefs } from "pinia";
import PostList from "../components/PostList.vue";

const postStore = usePostStore();
const { posts, isLoading } = storeToRefs(postStore);

postStore.fetchPosts();
</script>
