import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CardsSection from './CardsSection.vue';

const props = {
    name: 'Test name',
    image: 'https://example.com/image.jpg',
    location: 'UK',
    phone: '1234567890',
    email: 'test@example.com',
    treatment: 'Mr'
}

describe('Card.vue', () => {
    it('renders the component', () => {
        const wrapper = shallowMount(CardsSection, { props })
        expect(wrapper.exists()).toBe(true)
    })

    it('displays the name, image and location correctly', () => {
        const wrapper = shallowMount(CardsSection, { props })
        expect(wrapper.find('.card__info-personal__name').text()).toBe(props.name)
        expect(wrapper.find('.card__img').attributes('src')).toBe(props.image)
        expect(wrapper.find('.card__info-personal__location').text()).toBe(props.location)
    })

    it('displays the phone and email links correctly', () => {
        const wrapper = shallowMount(CardsSection, { props })
        expect(wrapper.find('.card__info-buttons__phone').attributes('href')).toBe(`tel:${props.phone}`)
        expect(wrapper.find('.card__info-buttons__mail').attributes('href')).toBe(`mailto:${props.email}`)
    })

    it('displays the treatment correctly', () => {
        const wrapper = shallowMount(CardsSection, { props })
        expect(wrapper.find('.card__info-personal__treatment').text()).toBe(props.treatment)
    })
})
