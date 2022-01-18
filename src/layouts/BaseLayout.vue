<template>
  <div class="container">
    <div class="spacer">
      <aside class="col">
        <div class="aside-inner">
          <slot name="aside"></slot>
        </div>
      </aside>
      <main class="col">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class BaseLayout extends Vue {
  visible = false;
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";

$gap: 20px;

input {
  position: relative;
  z-index: 1000;
}

.container {
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  min-height: 100%;
}

.spacer {
  gap: $gap;
  display: flex;
  min-height: 100%;
  margin: 0 1rem;
}

.col {
  flex: 1;
  position: relative;
}

aside:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--gray-500);
  width: 1px;
  margin-right: -$gap / 2;
}

aside {
  max-height: calc(100vh - 2rem);
  overflow: hidden;
  overflow-y: auto;
  max-width: 400px;
}

</style>
