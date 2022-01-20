<template>
  <div class="pills">
    <button
      v-for="item in feedToggles"
      :key="item.id"
      class="pill cursor-pointer"
      :class="{ active: item.active }"
      @click="$store.dispatch('toggleFeed', item.id)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import List from "@/components/List.vue";
import ListItem from "@/components/ListItem.vue";
import ListTitle from "@/components/ListTitle.vue";
import ListSubTitle from "@/components/ListSubTitle.vue";
import { FeedToggleItem } from "@/store/store";

/**
 * Mmmmmh Burger!
 */
@Component({
  components: {
    List,
    ListItem,
    ListTitle,
    ListSubTitle
  }
})
export default class FeedToggle extends Vue {
  get feedToggles(): FeedToggleItem[] {
    return this.$store.getters.feedToggles;
  }
}
</script>

<style scoped lang="scss">
.pills {
  .pill {
    display: inline-block;
    padding: 0.25em 1em;
    border-radius: var(--border-radius-full);
    background-color: var(--gray-200);
    border: none;
    margin-bottom: 0.25em;
    margin-right: 0.25em;
    opacity: 0.7;
    transition: opacity 0.25s, background-color 0.15s, color 0.15s;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    background-color: var(--primary);
    color: #fff;
    opacity: 1;
  }
}
</style>
