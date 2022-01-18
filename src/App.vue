<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:aside>
        <List>
          <ListItem
            v-for="post in posts"
            :key="post.id"
            :image="post.previewImage"
            :clickable="true"
            :active="post.id === selection.id"
            @click="selection = post"
          >
            <ListTitle>{{ post.title }}</ListTitle>
            <ListSubTitle>by {{ post.user.username }}</ListSubTitle>
          </ListItem>
        </List>
      </template>

      <DetailView :post="selection"></DetailView>
    </BaseLayout>
    <Tint :image="selection.previewImage" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLayout from "@/layouts/BaseLayout.vue";
import List from "@/components/List.vue";
import ListItem from "@/components/ListItem.vue";
import { dummyPosts } from "@/mock/dummy-posts";
import { Post } from "@/types";
import DetailView from "@/components/DetailView.vue";
import ListTitle from "@/components/ListTitle.vue";
import ListSubTitle from "@/components/ListSubTitle.vue";
import Tint from "@/components/Tint.vue";

@Component({
  components: {
    DetailView,
    ListItem,
    ListTitle,
    ListSubTitle,
    List,
    BaseLayout,
    Tint,
  }
})
export default class App extends Vue {
  posts: Post[] = dummyPosts;
  selection: Post | null = dummyPosts[0];
}
</script>

<style>
@import "./scss/base.scss";

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: auto;
  min-height: 100%;
}
</style>
