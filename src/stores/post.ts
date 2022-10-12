import { ref } from "vue";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import type IPost from "@/types/IPost";

const fakePosts: IPost[] = [
  {
    id: 1,
    title: "Simple Post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus nibh, suscipit vel imperdiet sit amet, iaculis ut arcu. Phasellus vulputate, neque id porttitor suscipit, libero lorem accumsan massa, in sagittis velit diam a dolor. Phasellus lacinia leo eu aliquam ultrices. Mauris non mauris arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam finibus lorem, elementum malesuada neque condimentum rutrum. Maecenas semper bibendum nunc, non cursus lorem maximus vitae. Aliquam vel velit eget diam commodo gravida non ut augue.",
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    title: "Simple Post with poster",
    content:
      "Nulla tincidunt, dolor mollis tincidunt interdum, arcu arcu posuere orci, eget ornare metus augue nec ante. Phasellus tempor egestas metus quis ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque condimentum nibh sapien, a varius elit sodales eu. Donec at mi ac urna vehicula venenatis at vitae metus. Integer sit amet iaculis felis. Aenean tincidunt sodales velit, id semper tortor aliquam quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lectus dui, lacinia a ligula vitae, accumsan posuere purus.",
    createdAt: new Date().toDateString(),
    poster: "/poster.jpg",
  },
  {
    id: 3,
    title: "Simple Post 2",
    content:
      "Duis sit amet neque pulvinar, semper elit feugiat, dictum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eget risus nec enim gravida vehicula non sit amet arcu. Donec interdum elit eget risus auctor sollicitudin dignissim et nulla. Maecenas sed ultrices dui. Suspendisse lacus mauris, tempor a porttitor id, mollis ultrices turpis. Quisque faucibus posuere consectetur. Morbi justo purus, dictum dignissim ultricies nec, blandit ac lorem. Duis eget aliquam nisi, aliquet vestibulum elit. Nam commodo euismod magna sit amet volutpat. Aliquam in turpis non lectus pulvinar aliquam nec et tortor. Curabitur condimentum lorem et sem ornare fermentum sed vel eros. Mauris eu posuere nunc. Sed consectetur eros ex, tincidunt egestas augue congue a. Sed ultricies egestas erat vel pharetra. Aenean non vestibulum nisl, eget aliquet sapien.",
    createdAt: new Date().toDateString(),
  },
];

export const usePostStore = defineStore("post", () => {
  const posts: Ref<IPost[]> = ref([]);
  const currentPost: Ref<IPost | undefined> = ref(undefined);
  const isLoading: Ref<boolean> = ref(false);

  const fetchPosts = () => {
    isLoading.value = true;
    setTimeout(() => {
      posts.value = fakePosts;
      isLoading.value = false;
    }, 100);
  };

  const fetchPost = (id: number) => {
    isLoading.value = true;
    setTimeout(() => {
      currentPost.value = fakePosts.find((post: IPost) => post.id === id);
      isLoading.value = false;
    }, 100);
  };

  return { posts, isLoading, currentPost, fetchPosts, fetchPost };
});
