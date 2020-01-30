<template>
  <v-app>
    <v-app-bar app color="white">
      <span class="display-1">Simple Board</span>
      <v-spacer></v-spacer>
      <span class="subtitle-1">NEMV Stack</span>
    </v-app-bar>
    <br />
    <v-content>
      <PostList />
    </v-content>
  </v-app>
</template>

<script>
import PostList from "./components/PostList";

export default {
  name: "App",

  components: {
    PostList
  },

  data: () => ({
    //
  })
};
</script>
