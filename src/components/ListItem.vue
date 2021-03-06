<template>
  <div
    class="list-item"
    :class="{ 'cursor-pointer clickable': clickable, active: active }"
    @click="clickable && $emit('click', $event)"
  >
    <ImageRound size="4rem" :src="image"></ImageRound>
    <div class="body">
      <slot></slot>
    </div>
    <div v-if="markUnread" class="unread-marker"></div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import ListTitle from "@/components/ListTitle.vue";
import ImageRound from "@/components/ImageRound.vue";

@Component({
  components: { ImageRound, ListTitle },
})
export default class ListItem extends Vue {
  @Prop() image: string | undefined;
  @Prop({
    default: false,
  })
  clickable: boolean | undefined;

  @Prop({
    default: false,
  })
  active: boolean | undefined;

  @Prop({
    default: false,
  })
  markUnread: boolean | undefined;
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/mixins";

.list-item {
  background-color: var(--gray-100);
  padding: 0.5rem 1rem;
  display: flex;
  max-width: 100%;
  gap: 1rem;
  align-items: center;
  transition: transform 0.25s;

  &.clickable {
    &:hover {
      background-color: var(--gray-200);
    }
  }

  &.clickable.active,
  &.active {
    background-color: var(--primary);

    .list-title,
    .list-sub-title {
      color: #fff;
    }

    @include breakpoint($screen-size-md) {
      transform: translateX(10px);
    }
  }
}

.body {
  flex: 1;
  min-width: 0;
}

.unread-marker {
  display: block;
  width: 0.75em;
  height: 0.75em;
  border-radius: var(--border-radius-full);
  background-color: var(--primary);
}
</style>
