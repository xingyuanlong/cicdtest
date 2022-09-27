<template>
  <li
    v-clipboard:copy="text"
    v-clipboard:success="onCopied"
    :class="justCopied === type ? 'copied' : ''"
  >
    <component :is="allIcons[name]"></component>
    <span class="anticon-class">
      <a-badge :dot="isNew">
        {{ kebabCasedType }}
      </a-badge>
    </span>
  </li>
</template>
<script>
import * as AntdIcons from 'pf-icons-vue';
import { Badge } from 'pf-ui-vue';
import { defineComponent } from 'vue';

const allIcons = AntdIcons;

const kebabCase = function kebabCase(str) {
  return str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
};

export default defineComponent({
  components: {
    'a-badge': Badge,
  },
  props: ['name', 'type', 'isNew', 'justCopied'],
  data() {
    const kebabCasedName = this.name;
    const kebabCasedType = this.type;

    this.allIcons = allIcons;

    return {
      text: `<${kebabCasedName} />`,
      kebabCasedType,
    };
  },
  methods: {
    onCopied() {
      this.$emit('copied', this.type, this.text);
    },
  },
});
</script>
