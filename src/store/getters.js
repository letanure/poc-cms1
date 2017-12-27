export const evenOrOdd = state => {
  return state => state.count % 2 === 0 ? 'even' : 'odd'
}
