import Button from '../index';
import { mount } from '@vue/test-utils';
import { asyncExpect, sleep } from '../../../tests/utils';

describe('click wave effect', () => {
  async function clickButton(wrapper) {
    await asyncExpect(() => {
      wrapper.find('.pf-btn').trigger('click');
    });
    wrapper.find('.pf-btn').element.dispatchEvent(new Event('transitionstart'));
    await sleep(20);
    wrapper.find('.pf-btn').element.dispatchEvent(new Event('animationend'));
    await sleep(20);
  }

  it('should have click wave effect for primary button', async () => {
    const wrapper = mount({
      render() {
        return <Button type="primary">button</Button>;
      },
    });
    await clickButton(wrapper);
    expect(wrapper.find('.pf-btn').attributes('ant-click-animating-without-extra-node')).toBe(
      'true',
    );
  });

  it('should have click wave effect for default button', async () => {
    const wrapper = mount({
      render() {
        return <Button>button</Button>;
      },
    });
    await clickButton(wrapper);
    expect(wrapper.find('.pf-btn').attributes('ant-click-animating-without-extra-node')).toBe(
      'true',
    );
  });

  it('should not have click wave effect for link type button', async () => {
    const wrapper = mount({
      render() {
        return <Button type="link">button</Button>;
      },
    });
    await clickButton(wrapper);
    expect(wrapper.find('.pf-btn').attributes('ant-click-animating-without-extra-node')).toBe(
      undefined,
    );
  });

  it('should not have click wave effect for text type button', async () => {
    const wrapper = mount({
      render() {
        return <Button type="text">button</Button>;
      },
    });
    await clickButton(wrapper);
    expect(wrapper.find('.pf-btn').attributes('ant-click-animating-without-extra-node')).toBe(
      undefined,
    );
  });

  it('should handle transitionstart', async () => {
    const wrapper = mount({
      render() {
        return <Button type="primary">button</Button>;
      },
    });
    await clickButton(wrapper);
    const buttonNode = wrapper.find('.pf-btn').element;
    buttonNode.dispatchEvent(new Event('transitionstart'));
    expect(wrapper.find('.pf-btn').attributes('ant-click-animating-without-extra-node')).toBe(
      'true',
    );
    wrapper.unmount();
    buttonNode.dispatchEvent(new Event('transitionstart'));
  });
});
