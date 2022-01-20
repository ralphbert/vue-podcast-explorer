<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:aside>
        <FeedList />
      </template>

      <DetailView :post="selection"></DetailView>
    </BaseLayout>
    <Tint :image="selection.previewImage" />
  </div>
</template>

<script lang="ts">
import { dummyPosts } from "@/mock/dummy-posts";
import { Component, Vue } from "vue-property-decorator";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { Post } from "@/types";
import DetailView from "@/components/DetailView.vue";
import FeedList from "@/components/FeedList.vue";
import FeedSelector from "@/components/FeedSelector.vue";
import Tint from "@/components/Tint.vue";
import { PodcastSource } from "@/store/store";

@Component({
  components: {
    FeedSelector,
    DetailView,
    BaseLayout,
    Tint,
    FeedList
  }
})
export default class App extends Vue {
  posts: Post[] = dummyPosts;
  selection: Post | null = dummyPosts[0];

  get sources(): PodcastSource[] {
    return this.$store.getters.sources;
  }

  mounted(): void {
    this.$store.dispatch("loadFeeds");
  }
}
</script>

<style lang="scss">
@import "./scss/base";

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
