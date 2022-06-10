module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  } else {
    return matrix.map((i,ind) => {
      if (ind % 2 === 0) {
        return i
      } else {
        return i.reverse()
      }
    }).flat()
  }
}
