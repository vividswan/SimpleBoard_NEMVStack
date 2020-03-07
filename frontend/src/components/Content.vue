<template>
  <div>
    <div v-if="loading">
      <v-text-field color="green" loading disabled></v-text-field>
    </div>
    <v-container v-else>
      <v-card max-width="500" class="mx-auto">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{
              post.title
            }}</v-list-item-title>
            <v-list-item-subtitle class="d-flex justify-end">
              <span class="font-weight-black">작성자 : </span>{{ post.author
              }}<v-divider class="mx-4" vertical></v-divider
              ><span class="font-weight-black">작성일 : </span
              >{{ post.created_date }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-sheet
            max-width="800"
            height="300"
            class="mx-auto blue lighten-5"
            >{{ post.content }}</v-sheet
          >
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Content",
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      axios.get("/api" + this.$route.params.id).then(ans => {
        /* eslint-disable no-console */
        console.log(ans.data);
        this.post = ans.data.post;
        this.post.created_date = moment(this.post.created_date).format(
          "YYYY/MM/DD HH:mm"
        );
        this.loading = false;
      });
    }
  },
  data() {
    return {
      loading: true,
      post: []
    };
  }
};
</script>
