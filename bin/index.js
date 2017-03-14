/**
 * Created by timur on 3/13/17.
 */

const { path } = process.argv.slice(2)

console.log(path)

function logArgs() {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  })
}
