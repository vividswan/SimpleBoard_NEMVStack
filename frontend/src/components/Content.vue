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
        <v-card-actions class="d-flex flex-row-reverse">
          <v-btn class="ma-2" tile outlined color="red" @click="clickDelete()">
            <v-icon left>mdi-delete-circle-outline</v-icon> Delete
          </v-btn>
          <v-btn
            class="ma-2"
            tile
            outlined
            color="success"
            @click="clickEdit()"
          >
            <v-icon left>mdi-pencil</v-icon> Edit
          </v-btn>
          <v-btn class="ma-2" tile outlined color="blue" @click="clickBack()">
            <v-icon left>mdi-backup-restore</v-icon> Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="subtitle-1"
          >게시물을 삭제하시겠습니까?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="deltePost()">
            네
          </v-btn>
          <v-btn color="green darken-1" text @click="deleteDialog = false">
            아니오
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
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
                  v-model="editAuthor"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Title*"
                  required
                  v-model="editTitle"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="editContent"
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
          <v-btn color="blue darken-1" text @click="editDialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="editSave()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    editSave() {
      axios
        .put("api" + this.$route.params.id, {
          title: this.editTitle,
          content: this.editContent,
          author: this.editAuthor
        })
        .then(() => {
          this.editDialog = false;
          this.fetchPost();
        })
        .catch(err => {
          /* eslint-disable no-console */
          console.log(err);
        });
      this.editDialog = false;
      this.fetchPost();
    },
    clickEdit() {
      this.editTitle = this.post.title;
      this.editAuthor = this.post.author;
      this.editContent = this.post.content;
      this.editDialog = true;
    },
    deltePost() {
      this.deleteDialog = false;
      axios
        .delete("api" + this.$route.params.id)
        .then(() => {
          this.$router.go(-1);
        })
        .catch(err => {
          /* eslint-disable no-console */
          console.log(err);
        });
    },
    clickDelete() {
      this.deleteDialog = true;
    },
    clickBack() {
      this.$router.go(-1);
    },
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
      editDialog: false,
      editTitle: "",
      editAuthor: "",
      editContent: "",
      deleteDialog: false,
      loading: true,
      post: []
    };
  }
};
</script>
