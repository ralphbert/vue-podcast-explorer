<template>
  <div class="feed-filter">
    <input
      class="filter"
      @input="debouncedDispatch($event.target.value)"
      :value="term"
      placeholder="Filter..."
    />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

/**
 * Mmmmmh Burger!
 */
@Component({})
export default class FeedFilter extends Vue {
  debounce: number | null = null;

  get term(): string {
    return this.$store.getters.searchTerm;
  }

  debouncedDispatch(term: string): void {
    this.debounce && clearTimeout(this.debounce);
    this.debounce = null;

    this.debounce = setTimeout(() => {
      this.$store.dispatch("search", term.trim());
    }, 200);
  }
}
</script>

<style scoped lang="scss">
.feed-filter {
  margin: 1rem 1rem 0.5rem;

  .filter {
    padding: 0.5rem 1rem;
    display: block;
    width: 100%;
  }
}
</style>
