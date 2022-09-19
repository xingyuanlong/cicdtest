import { message } from 'pf-ui-vue';
import { defineComponent } from 'vue';
import CopyableIcon from './CopyableIcon.vue';

const Category = defineComponent({
  props: ['icon', 'title', 'newIcons', 'name'],
  data() {
    return {
      justCopied: null,
    };
  },
  methods: {
    onCopied(type, text) {
      message.success(
        <span>
          <code class="copied-code">{text}</code> copied 🎉
        </span>,
      );
      this.justCopied = type;
      setTimeout(() => {
        this.justCopied = null;
      }, 2000);
    },
  },
  render() {
    const { icon, title, newIcons, name } = this.$props;
    const items = (
      <CopyableIcon
        key={name}
        name={name}
        type={name}
        isNew={newIcons.indexOf(name) >= 0}
        justCopied={this.justCopied}
        onCopied={this.onCopied}
      />
    );
    return (
      <>
        {items}
      </>
    );
  },
});

export default Category;
