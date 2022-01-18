<template>
  <div class="tint" v-if="image">
    <img :src="image" alt="Tint image" />
    <div class="cover"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class Tint extends Vue {
  @Prop() image: string | undefined;
}
</script>

<style scoped lang="scss">
@import "../scss/mixins";

.tint {
  position: fixed;
  @include inset();
  z-index: -1;
}

.cover {
  display: block;
  position: absolute;
  @include inset();
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
}

img {
  display: block;
  position: absolute;
  @include inset();
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
