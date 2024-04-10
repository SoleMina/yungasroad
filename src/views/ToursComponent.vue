<template>
  <div>
    <h1>Tours</h1>
    <p>Welcome to the home page!</p>
    <div>
      <ul>
        <li v-for="(item, index) in posts" :key="index">
          {{ item.id }} - {{ item.status }} - {{ item.title }} -
          {{ cleanTags(item.content) }} {{ item.date }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  status: string;
}

const posts = ref<Post[]>([]);

const getPosts = async () => {
  try {
    const response = await axios.get<Post[]>("wp/v2/posts");
    const postsDB = response.data.forEach((element: Post) => {
      let item: Post = {
        id: element.id,
        title: element.title.rendered,
        content: element.content.rendered,
        date: element.date,
        status: element.status,
      };
      posts.value.push(item);
    });
    console.log(postsDB);
  } catch (error) {
    console.log(error);
  }
};

//Render without html
const cleanTags = (value: any) => {
  return value.replace(/<\/?[^>]+(>|$)/g, "");
};

onMounted(getPosts);
</script>
