import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonComponent from './ButtonComponent.vue';

describe('HelloWorld', () => {
    it('renders a button with the provided title', () => {
        const title = 'Click me!';
        const wrapper = mount(ButtonComponent, {
            props: { title },
        });

        const button = wrapper.find('button');
        expect(button.text()).toBe(title);
    });
})
