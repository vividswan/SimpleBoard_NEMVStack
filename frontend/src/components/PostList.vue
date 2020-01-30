<template>
  <div>
    <div>
      <v-text-field color="blue" loading disabled v-if="loading"></v-text-field>
    </div>
    <v-container>
      <div>
        <p class="text-center display-3">Post List</p>
      </div>
      <v-data-table
        :headers="headers"
        :items="posts"
        :page.sync="page"
        :items-per-page="5"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      >
        <template v-slot:item.title="props">
          <a @click="read(props.item)">
            {{ props.item.title }}
          </a>
        </template>
      </v-data-table>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse">
            <v-btn class="ma-2" tile outlined color="black darken-3">
              <v-icon left>mdi-pencil</v-icon> Write Post
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PostList",

  data() {
    return {
      loading: false,
      headers: [
        {
          text: "  번호",
          align: "left",
          sortable: false,
          value: "number"
        },
        {
          text: "제목",
          value: "title",
          sortable: false,
          width: "50%"
        },
        { text: "작성자", value: "author", sortable: false },
        { text: "작성일", value: "created_date", width: "20%" }
      ]
    };
  }
};
</script>
