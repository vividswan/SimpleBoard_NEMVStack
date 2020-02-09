<template>
  <div>
    <div>
      <v-text-field color="blue" loading disabled v-if="loading"></v-text-field>
    </div>
    <v-container>
      <div>
        <p class="text-center display-3">Post List</p>
      </div>
      <v-card outlined>
        <v-data-table
          :headers="headers"
          :items="posts"
          :page.sync="page"
          :items-per-page="5"
          hide-default-footer
          :mobile-breakpoint="NaN"
          class="elevation-1 blue-grey lighten-5"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.title="props">
            <a @click="read(props.item)">
              {{ props.item.title }}
            </a>
          </template>
        </v-data-table>
      </v-card>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse">
            <v-btn
              class="ma-2"
              tile
              outlined
              color="black darken-3"
              @click="clickWrite()"
            >
              <v-icon left>mdi-pencil</v-icon> Write Post
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
    <div>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Write Post</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="User Name*"
                    required
                    v-model="userName"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    v-model="content"
                    background-color="grey lighten-2"
                    color="blue darken-2"
                    label="Content"
                    counter
                    maxlength="2000"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostList",
  mounted() {
    axios.get("/api/posts").then(res => {
      this.posts = res.data;
    });
  },
  methods: {
    clickWrite() {
      this.dialog = true;
    }
  },
  data() {
    return {
      posts: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      userName: "",
      content: "",
      dialog: false,
      loading: false,
      headers: [
        {
          text: "제목",
          value: "title",
          sortable: false,
          width: "50%"
        },
        { text: "작성자", value: "author", sortable: false },
        { text: "작성일", value: "created_date", width: "20%", sortable: true }
      ]
    };
  }
};
</script>
