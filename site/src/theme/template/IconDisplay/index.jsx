import Icon, * as AntdIcons from 'pf-icons-vue';
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons';
import Category from './Category';
import { Radio } from 'pf-ui-vue';
import { defineComponent } from 'vue';

const ThemeType = {
  Filled: 'Filled',
  Outlined: 'Outlined',
  TwoTone: 'TwoTone',
};

const allIcons = AntdIcons;

const IconDisplay = defineComponent({
  components: {
    ARadio: Radio,
    ARadioGroup: Radio.Group,
    ARadioButton: Radio.Button,
  },
  newIconNames: [],
  data() {
    return {
      theme: ThemeType.Outlined,
    };
  },
  methods: {

    renderCategories() {
      return Object.keys(allIcons)
        .filter(icons => allIcons[icons].displayName && allIcons[icons].displayName !== "Icon")
        .map((icons) => (
          <Category
            name={icons}
            icon={allIcons[icons]}
            newIcons={IconDisplay.newIconNames}
          />
        ));
    },
  },

  render() {
    return (
      <div>
        <h3 style="margin: 1.6em 0 .6em;">{this.$t('app.docs.components.icon.pick-theme')}</h3>
        <ul class={'anticons-list'}>
          {this.renderCategories()}
        </ul>
      </div>
    );
  },
});

export default IconDisplay;
