<template>
  <div class="post-list">
    <PostItem
      :is-single="false"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
import type IPost from "@/types/IPost";
import PostItem from "./PostItem.vue";

interface Props {
  posts: IPost[];
}

defineProps<Props>();
</script>
