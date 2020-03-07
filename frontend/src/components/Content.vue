<template>
  <div>
    <div v-if="loading">
      <v-text-field color="blue" loading disabled></v-text-field>
    </div>
    <v-container v-else>
      {{ post }}
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
