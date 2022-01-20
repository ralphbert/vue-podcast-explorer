<template>
  <div id="app">
    <BaseLayout>
      <template v-slot:aside>
        <FeedList />
      </template>

      <router-view></router-view>
    </BaseLayout>
    <Tint v-if="selection && selection.image" :image="selection.image.url" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLayout from "@/layouts/BaseLayout.vue";
import DetailView from "@/components/DetailView.vue";
import FeedList from "@/components/FeedList.vue";
import Tint from "@/components/Tint.vue";
import { FeedItem } from "@/store/store";

@Component({
  components: {
    DetailView,
    BaseLayout,
    Tint,
    FeedList,
  },
})
export default class App extends Vue {
  mounted(): void {
    this.$store.dispatch("loadFeeds");
  }

  get selection(): FeedItem {
    return this.$store.getters.selected;
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
