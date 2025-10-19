import { describe, it, expect, beforeEach, vi, type Mock } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import Input from './Input.vue';
import { ref } from 'vue';

describe('day input', () => {
  let wrapper: VueWrapper<InstanceType<typeof Input>>;
  let nextFocus: Mock;

  beforeEach(() => {
    nextFocus = vi.fn();
    wrapper = mount(Input, {
      //attachTo: document.body,
      props: {
        mode: 'day',
        idx: 0,
      },
      global: {
        provide: {
          'group-context': {
            idx: ref(0),
            nextFocus,
          },
        },
      },
    });
  });

  describe('when enter 0', () => {
    beforeEach(() => {
      wrapper.find('div').trigger('keydown', { key: '0' });
    });

    it('modelValue is empty string', () => {
      expect(wrapper.vm.modelValue).toBe(null);
    });

    describe('when focusout', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('focusout');
      });

      it('modelValue is 0', () => {
        expect(wrapper.vm.modelValue).toBe(1);
      });
    });

    describe('then enter 0', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('keydown', { key: '0' });
      });

      describe('when focusout', () => {
        beforeEach(() => {
          wrapper.find('div').trigger('focusout');
        });

        it('modelValue is 1', () => {
          expect(wrapper.vm.modelValue).toBe(1);
        });
      });
    });

    describe('then enter 01', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('keydown', { key: '0' });
        wrapper.find('div').trigger('keydown', { key: '1' });
      });

      describe('when focusout', () => {
        beforeEach(() => {
          wrapper.find('div').trigger('focusout');
        });

        it('modelValue is 01', () => {
          expect(wrapper.vm.modelValue).toBe(1);
        });
      });
    });

    describe('then enter 1', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('keydown', { key: '1' });
      });

      describe('when focusout', () => {
        beforeEach(() => {
          wrapper.find('div').trigger('focusout');
        });

        it('modelValue is 1', () => {
          expect(wrapper.vm.modelValue).toBe(1);
        });
      });
    });
  });

  describe('when enter 1', () => {
    beforeEach(() => {
      wrapper.find('div').trigger('keydown', { key: '1' });
    });

    describe('when focusout', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('focusout');
      });

      it('modelValue is 1', () => {
        expect(wrapper.vm.modelValue).toBe(1);
      });
    });

    it('nextFocus is not called', () => {
      expect(nextFocus).not.toHaveBeenCalled();
    });

    describe('then enter 2', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('keydown', { key: '2' });
      });

      describe('when focusout', () => {
        beforeEach(() => {
          wrapper.find('div').trigger('focusout');
        });

        it('modelValue is 12', () => {
          expect(wrapper.vm.modelValue).toBe(12);
        });

        it('nextFocus is called once', () => {
          expect(nextFocus).toHaveBeenCalledOnce();
        });
      });
    });

    describe('when enter backspace', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('keydown', { key: 'Backspace' });
      });

      describe('when focusout', () => {
        beforeEach(() => {
          wrapper.find('div').trigger('focusout');
        });

        it('modelValue is empty string', () => {
          expect(wrapper.vm.modelValue).toBe(null);
        });
      });
    });
  });

  describe('when enter 4', () => {
    beforeEach(() => {
      wrapper.find('div').trigger('keydown', { key: '4' });
    });

    describe('then focusout', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('focusout');
      });

      it('modelValue is 4', () => {
        expect(wrapper.vm.modelValue).toBe(4);
      });

      it('nextFocus is called once', () => {
        expect(nextFocus).toHaveBeenCalledOnce();
      });
    });
  });

  describe('when enter unsupported key', () => {
    beforeEach(() => {
      wrapper.find('div').trigger('keydown', { key: 'a' });
    });

    describe('when focusout', () => {
      beforeEach(() => {
        wrapper.find('div').trigger('focusout');
      });

      it('modelValue is empty string', () => {
        expect(wrapper.vm.modelValue).toBe(null);
      });

      it('nextFocus is not called', () => {
        expect(nextFocus).not.toHaveBeenCalled();
      });
    });
  });
});

// describe("input group with time", () => {
//   let wrapper: VueWrapper<InstanceType<typeof Input>>;
//   let nextFocus: Mock;

//   beforeEach(() => {
//     nextFocus = vi.fn();
//   });

//   it('render snapshot', () => {
//     expect(wrapper.html()).toMatchSnapshot();
//   });
// });
