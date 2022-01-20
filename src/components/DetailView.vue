<template>
  <div class="detail-view">
    <UserInfo class="meta" :user="post.user"></UserInfo>
    <header>
      <LazyImage :ratio="600 / 1024" :src="post.image"></LazyImage>
      <h1 class="text-center">{{ post.title }}</h1>
    </header>
    <section class="inner">
      <div class="body">
        <p>{{ post.body }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { Post } from "@/types";
import UserInfo from "@/components/UserInfo.vue";
import LazyImage from "@/components/LazyImage.vue";

@Component({
  components: { LazyImage, UserInfo },
})
export default class DetailView extends Vue {
  @Prop() post: Post | undefined;
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
