<template>
  <DetailView :feed-item="feedItem"></DetailView>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import UserInfo from "@/components/UserInfo.vue";
import LazyImage from "@/components/LazyImage.vue";
import DetailView from "@/components/DetailView.vue";
import { FeedItem } from "@/store/store";

@Component<DetailPage>({
  components: { DetailView, LazyImage, UserInfo },
  watch: {
    feedId() {
      this.update();
    },
  },
})
export default class DetailPage extends Vue {
  @Prop() feedId!: string;

  update(): void {
    console.log("update", this.feedId);
    this.$store.dispatch("select", this.feedId);
  }

  get feedItem(): FeedItem | undefined {
    return this.$store.getters.selected;
  }

  mounted(): void {
    this.update();
  }
}
</script>

<style lang="scss" scoped>
.detail-view {
  position: relative;
  flex: 1;
  background-color: #fff;
  min-height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
}

h1 {
  margin: 1.75em 3rem 1.25em;
  font-family: var(--font-serif);
}

.inner {
  padding: 0.5rem 4rem;
}

.body {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: justify;
}

.meta {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}
</style>
