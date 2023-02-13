<template>
  <li
    v-clipboard:copy="text"
    v-clipboard:success="onCopied"
    :class="justCopied === type ? 'copied' : ''"
  >
    <component :is="allIcons[name]"></component>
    <span class="anticon-class">
      <pf-badge :dot="isNew">
        {{ kebabCasedType }}
      </pf-badge>
    </span>
  </li>
</template>
<script>
import * as AntdIcons from '@pf-ui/pf-icons-vue';
import { PfBadge } from '@pf-ui/pf-ui-vue';
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
    'pf-badge': PfBadge,
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
