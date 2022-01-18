<template>
  <button @click="$emit('click', $event)" class="burger">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

/**
 * Mmmmmh Burger!
 */
@Component({})
export default class BurgerButton extends Vue {
}
</script>

<style scoped lang="scss">
.burger {
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: gap 0.15s ease-out;

  &:hover {
    gap: 8px;
  }
}

span {
  position: relative;
  display: block;
  height: 4px;
  background-color: #fff;
  width: 100%;
}
</style>
