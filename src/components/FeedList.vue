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
            :mark-unread="!isRead(item.guid)"
            :active="selected === item"
            @click="select(item)"
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
import List from "@/components/List.vue";
import ListItem from "@/components/ListItem.vue";
import ListTitle from "@/components/ListTitle.vue";
import ListSubTitle from "@/components/ListSubTitle.vue";
import FeedToggle from "@/components/FeedToggle.vue";
import FeedFilter from "@/components/FeedFilter.vue";
import { FeedItem, PodcastSource } from "@/types";

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
    return this.$store.getters.filteredFeedList;
  }

  get readItems(): string[] {
    return this.$store.getters.readItems;
  }

  get selected(): FeedItem | undefined {
    return this.$store.getters.selected;
  }

  isRead(id: string): boolean {
    return this.readItems.includes(id);
  }

  select(item: FeedItem): void {
    if (!this.selected || this.selected.guid !== item.guid) {
      this.$router.push({
        name: "details",
        params: {
          feedId: item.guid || "",
        },
      });
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
