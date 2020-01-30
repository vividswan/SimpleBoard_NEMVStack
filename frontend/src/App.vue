<template>
  <v-app>
    <v-app-bar app color="white">
      <v-icon left>mdi-post</v-icon>
      <span class="display-1"> Simple </span>
      <span class="display-1 font-weight-black">Board</span>
      <v-spacer></v-spacer>
      <v-icon left>mdi-radar</v-icon>
      <span class="subtitle-1 font-italic font-weight-medium">NEMV Stack </span>
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
