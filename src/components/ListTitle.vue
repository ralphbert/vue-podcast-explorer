<template>
  <h4 class="list-title"><slot></slot></h4>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class ListTitle extends Vue {}
</script>

<style scoped>
h4 {
  margin: 0 0 0.25rem;
  word-break: break-word;
  hyphens: auto;
}
</style>
