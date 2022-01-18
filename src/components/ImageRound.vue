<template>
  <div class="image" :style="{ width: size, height: size, flexBasis: size }">
    <img v-if="src" :src="src" alt="List item image" />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ImageRound extends Vue {
  @Prop() src: string | undefined;
  @Prop({ default: "5rem" }) size: string | undefined;
}
</script>

<style scoped lang="scss">
@import "../scss/mixins";

.image {
  overflow: hidden;
  flex: 0 0;
  position: relative;
  border-radius: var(--border-radius-full);
  background-color: var(--gray-500);
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    position: absolute;
    @include inset();
  }
}
</style>
