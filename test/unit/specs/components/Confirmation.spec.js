import Confirmation from 'src/components/Confirmation'
import { vueTest } from '../../utils'

describe('Confirmation', () => {
  let vm
  let confirmation
  before(() => {
    vm = vueTest(Confirmation)
    console.log(vm)
    console.log('vm.$el ' + vm.$el)
    confirmation = vm.$el.querySelector('#confirmation')
    // confirmation = vm.$('#confirmation')
  })

  it('exists', () => {
    confirmation.should.exist
    confirmation.should.be.visible
  })
})
