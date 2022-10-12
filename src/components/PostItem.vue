<template>
  <div class="post-item">
    <h2 class="h-link" v-if="!isSingle" @click="handleClick(post.id)">
      {{ post.title }}
    </h2>
    <h2 v-else>{{ post.title }}</h2>
    <img
      v-if="post.poster"
      class="post-poster"
      :src="post.poster"
      alt="poster"
    />
    <p v-if="!isSingle">{{ post.content.slice(0, 400) + "..." }}</p>
    <p v-else>{{ post.content }}</p>
    <small>Created at {{ post.createdAt }}</small>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type IPost from "@/types/IPost";

interface Props {
  post: IPost;
  isSingle: boolean;
}

defineProps<Props>();

const router = useRouter();

const handleClick = (id: number) => {
  router.push("/posts/" + id);
};
</script>

<style scoped>
.post-item {
  margin-bottom: 2rem;
}

.h-link {
  cursor: pointer;
}

.h-link:hover {
  color: #007eff;
}

.post-poster {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 6px;
  object-fit: cover;
  max-height: 400px;
}
</style>
