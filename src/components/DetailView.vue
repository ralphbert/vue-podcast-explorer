<template>
  <div class="detail-view" v-if="feedItem">
    <UserInfo
      class="meta"
      :name="feedItem.itunes.author"
      :image="feedItem.image.url"
      title="Created by"
    ></UserInfo>
    <header>
      <LazyImage :ratio="600 / 1024" :src="feedItem.image.url"></LazyImage>
      <h1 class="text-center">{{ feedItem.title }}</h1>
    </header>
    <section class="inner">
      <div class="body">
        <p>{{ feedItem.content }}</p>
      </div>

      <audio controls :src="feedItem.enclosure.url">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </section>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import UserInfo from "@/components/UserInfo.vue";
import LazyImage from "@/components/LazyImage.vue";
import { FeedItem } from "@/store/store";

@Component({
  components: { LazyImage, UserInfo },
})
export default class DetailView extends Vue {
  @Prop() feedItem: FeedItem | undefined;
}
</script>

<style lang="scss" scoped>
.detail-view {
  position: relative;
  flex: 1;
  min-width: 0;
  background-color: #fff;
  min-height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
}

audio {
  width: 100%;
  display: block;
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
