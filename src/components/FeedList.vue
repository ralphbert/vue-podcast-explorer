<template>
  <div>
    <FeedToggle />
    <div v-if="items">
      <section>
        <List>
          <ListItem :clickable="true" v-for="item of items" :key="item.guid" :image="item.image.url">
            <ListTitle>{{ item.title }}</ListTitle>
            <ListSubTitle>{{ item.contentSnippet }}</ListSubTitle>
          </ListItem>
        </List>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Feed, FeedItem, PodcastSource } from "@/store/store";
import List from "@/components/List.vue";
import ListItem from "@/components/ListItem.vue";
import ListTitle from "@/components/ListTitle.vue";
import ListSubTitle from "@/components/ListSubTitle.vue";
import FeedToggle from "@/components/FeedToggle.vue";

/**
 * Mmmmmh Burger!
 */
@Component({
  components: {
    FeedToggle,
    List,
    ListItem,
    ListTitle,
    ListSubTitle
  }
})
export default class FeedList extends Vue {
  source: PodcastSource | null = null;

  get items(): FeedItem[] {
    return this.$store.getters.filteredFeedItems;
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
