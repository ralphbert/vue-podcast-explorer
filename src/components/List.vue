<template>
  <div class="list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class List extends Vue {
}
</script>

<style scoped lang="scss">
.list {
  padding: 0 1rem;
}

.list-item {
  margin-bottom: 0.75rem;
  border-radius: var(--border-radius);

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
