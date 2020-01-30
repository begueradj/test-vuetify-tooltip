import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import ComponentWithTooltip from '@/components/ComponentWithTooltip.vue'

const vuetify = new Vuetify()
let wrapper = null

beforeEach(() => {
  wrapper = mount(ComponentWithTooltip, {
    vuetify,
    propsData: {
      tooltipText: 'science'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('ComponentWithTooltip.vue:', () => {
  it('1. Mounts properly', () => {
    expect(wrapper.isVueInstance()).toBe(true) // Ok
  })

  it('2. User interface provides one help icon with tooltip text', async () => {
    const icons = wrapper.findAll('.v-icon')
    expect(icons.length).toBe(1) // Ok

    const helpIcon = icons.at(0)
    expect(helpIcon.text()).toEqual('help') // Ok

    helpIcon.trigger('mouseenter')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toEqual('science') // why this fails ?
  })
})
