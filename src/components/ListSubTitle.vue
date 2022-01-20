<template>
  <div class="list-sub-title text-truncate"><slot></slot></div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class ListSubTitle extends Vue {}
</script>

<style scoped>
.list-sub-title {
  color: var(--gray-500);
  font-size: 0.75rem;
}
</style>
