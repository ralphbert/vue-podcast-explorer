<template>
  <div class="container">
    <div class="toggle">
      <BurgerButton @click="visible = !visible" />
    </div>
    <div class="spacer">
      <aside :class="{ open: visible }">
        <div class="aside-inner" @click="visible = false">
          <slot name="aside"></slot>
        </div>
      </aside>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BurgerButton from "@/components/BurgerButton.vue";

@Component({
  components: { BurgerButton }
})
export default class BaseLayout extends Vue {
  visible = false;
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";

$gap: 20px;

aside {
  overflow: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  position: fixed;
  z-index: 10;
  @include inset();
  transition: transform 0.25s;
  background-color: #fff;

  &.open {
    transform: translateX(0);
  }
}

.toggle {
  display: inline-block;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5;
}

main {
  position: relative;
}

@include breakpoint($screen-size-md) {
  .toggle {
    display: none;
  }

  aside {
    position: sticky;
    transform: translateX(0);
    width: 300px;
    max-height: 100vh;
    background-color: transparent;
  }

  main {
    flex: 1;
  }

  .spacer {
    gap: $gap;
    display: flex;
    min-height: 100%;
    margin: 0 1rem;
  }

  .container {
    margin: 0 auto;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    min-height: 100%;
  }
}

@include breakpoint($screen-size-lg) {
  aside {
    width: 400px;
    flex-grow: 0;
  }

  .container {
    max-width: 1200px;
    width: 100%;
  }
}

</style>
