<template>
  <div class="lazy-image" :style="styles">
    <img :src="src" :alt="alt" @load="onLoad" :class="{ loading: !loaded }" />
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

const DEFAULT_RATIO = 0.3;

@Component<LazyImage>({
  watch: {
    src() {
      this.loaded = false;
    },
  },
})
export default class LazyImage extends Vue {
  @Prop() src: string | undefined;
  @Prop() alt: string | undefined;
  @Prop({ default: DEFAULT_RATIO }) ratio: number | undefined;

  loaded = false;

  get styles(): { [key: string]: string } {
    return {
      paddingTop: `${(this.ratio || DEFAULT_RATIO) * 100}%`,
    };
  }

  onLoad(): void {
    this.loaded = true;
  }
}
</script>

<style scoped lang="scss">
@import "../scss/mixins";

.lazy-image {
  line-height: 0;
  width: 100%;
  position: relative;
  background-color: var(--gray-200);

  img {
    position: absolute;
    @include inset();
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.5s;

    &.loading {
      opacity: 0;
    }
  }
}
</style>
