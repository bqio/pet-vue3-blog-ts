<template>
  <PostItem
    :is-single="true"
    v-if="!isLoading"
    :post="(currentPost as IPost)"
  />
  <p v-else>Loading post...</p>
</template>

<script setup lang="ts">
import { usePostStore } from "@/stores/post";
import type IPost from "@/types/IPost";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import PostItem from "../components/PostItem.vue";

const postStore = usePostStore();
const { currentPost, isLoading } = storeToRefs(postStore);

const route = useRoute();

postStore.fetchPost(Number(route.params.id));
</script>
