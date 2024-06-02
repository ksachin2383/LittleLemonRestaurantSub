import { initializeTimes, updateTimes } from "./Main";

describe('test functions', () => {
  process.env.test = true
  test('function initializeTimes', () => {
    expect(initializeTimes()).toMatchSnapshot()
  })

  test('function updateTimes when action type is UPDATE_TIME', () => {
    expect(updateTimes(initializeTimes(), { type: 'UPDATE_TIME', date: '2024-06-04' })).toMatchSnapshot()
  })

  test('function updateTimes when action type is default', () => {
    expect(updateTimes(initializeTimes(), { type: 'UPDATE_TIME'})).toMatchSnapshot()
  })
})