import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SearchBar from './SearchBar.vue';

describe('SearchBar', () => {
    it('renders the component', () => {
        const wrapper = shallowMount(SearchBar);
        expect(wrapper.exists()).toBe(true);
    });

    it('emits an "update:search" event when the input value changes', async () => {
        const wrapper = shallowMount(SearchBar);
        const input = wrapper.find('.searchbar__container-input');
        await input.setValue('Input test');
        expect(wrapper.emitted('update:search')).toBeTruthy();
        expect(wrapper.emitted('update:search')[0]).toEqual(['Input test']);
    });
});
