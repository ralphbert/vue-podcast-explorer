<template>
  <div>
    <FeedToggle />
    <FeedFilter />
    <div v-if="items">
      <section>
        <List>
          <ListItem
            :clickable="true"
            v-for="item of items"
            :key="item.guid"
            :image="item.image.url"
          >
            <ListTitle>{{ item.title }}</ListTitle>
            <ListSubTitle>{{ item.contentSnippet }}</ListSubTitle>
          </ListItem>
          <template v-if="items.length <= 0">
            <p class="text-center">Sorry, nothing found</p>
          </template>
        </List>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { FeedItem, PodcastSource } from "@/store/store";
import List from "@/components/List.vue";
import ListItem from "@/components/ListItem.vue";
import ListTitle from "@/components/ListTitle.vue";
import ListSubTitle from "@/components/ListSubTitle.vue";
import FeedToggle from "@/components/FeedToggle.vue";
import FeedFilter from "@/components/FeedFilter.vue";

/**
 * Mmmmmh Burger!
 */
@Component({
  components: {
    FeedFilter,
    FeedToggle,
    List,
    ListItem,
    ListTitle,
    ListSubTitle,
  },
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
