import { shallow } from 'vue-test-utils'
import AppCms from '@/AppCms'

describe('AppCms.vue', () => {
  it('is rendered', () => {
    const wrapper = shallow(AppCms)
    expect(wrapper.exists()).toBe(true)
  })
})
