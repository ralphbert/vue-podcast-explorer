<template>
  <div class="user-info">
    <ImageRound :src="image" :size="'4rem'" />
    <div class="body">
      <div class="text-sm">{{ title }}</div>
      <div class="text-bold">{{ name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import ImageRound from "@/components/ImageRound.vue";

@Component({
  components: { ImageRound },
})
export default class UserInfo extends Vue {
  @Prop() name: string | undefined;
  @Prop() image: string | undefined;
  @Prop({ default: "Written by" }) title!: string;
}
</script>

<style scoped lang="scss">
@import "../scss/mixins";

.user-info {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  background-color: var(--gray-200);
  border-radius: var(--border-radius-full);

  .body {
    flex: 1;
  }
}
</style>
