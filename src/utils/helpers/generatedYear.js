export function generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 9
    var years = []
  
    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }