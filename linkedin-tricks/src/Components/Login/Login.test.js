import React from 'react'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Example', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4)
    })
})