<template>
  <pf-form-item v-if="type === 'Captcha'">
    <pf-row :gutter="8">
      <pf-col :span="16">
        <pf-input v-decorator="[name, getFormItemOptions()]" v-bind="customprops" />
      </pf-col>
      <pf-col :span="8">
        <pf-button :disabled="!!count" class="getCaptcha" size="large" @click="handleClick">
          {{ count ? `${count} ${getCaptchaSecondText}` : getCaptchaButtonText }}
        </pf-button>
      </pf-col>
    </pf-row>
  </pf-form-item>
  <pf-form-item v-else>
    <pf-input v-decorator="[name, getFormItemOptions()]" v-bind="customprops" />
  </pf-form-item>
</template>
<script>
export default {
  props: {
    defaultValue: String,
    rules: Array,
    updateActive: Function,
    form: Object,
    customprops: Object,
    name: String,
    placeholder: String,
    type: String,
    getCaptchaButtonText: {
      type: String,
      default: 'captcha',
    },
    getCaptchaSecondText: {
      type: String,
      default: 'second',
    },
    getCaptcha: Function,
    countDown: Number,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    const { updateActive, name } = this.$props;
    if (updateActive) {
      updateActive(name);
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    getFormItemOptions() {
      const { defaultValue, customprops, rules } = this.$props;
      const options = {
        rules: rules || customprops.rules,
        onChange: this.handleChange,
      };
      if (defaultValue) {
        options.initialValue = defaultValue;
      }
      return options;
    },
    handleChange(...args) {
      this.$emit('change', ...args);
    },
    handleClick() {
      const { getCaptcha } = this.$props;
      const result = getCaptcha ? getCaptcha() : null;
      if (result === false) {
        return;
      }
      if (result instanceof Promise) {
        result.then(this.runGetCaptchaCountDown);
      } else {
        this.runGetCaptchaCountDown();
      }
    },
    runGetCaptchaCountDown() {
      const { countDown } = this.$props;
      this.count = countDown || 59;
      this.interval = setInterval(() => {
        this.count -= 1;
        if (this.count === 0) {
          clearInterval(this.interval);
        }
      }, 1000);
    },
  },
};
</script>
