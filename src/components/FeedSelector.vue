<template>
  <select @change="setSource" v-model="source">
    <option v-for="feed of sources" :value="feed" :key="feed.name">
      {{ feed.name }}
    </option>
  </select>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { PodcastSource } from "@/types";

/**
 * Mmmmmh Burger!
 */
@Component({})
export default class FeedSelector extends Vue {
  source: PodcastSource | null = null;

  get sources(): PodcastSource[] {
    return this.$store.getters.sources;
  }

  setSource(): void {
    if (this.source) {
      this.$store.dispatch("loadFeed", this.source);
    }
  }
}
</script>

<style scoped lang="scss">
select {
  padding: 0.5rem 1rem;
  width: 100%;
  display: block;
  border-radius: 0.25rem;
}
</style>
