function enough(cap, on, wait) {
    let people = on + wait
    if (people <= cap) {
      return 0
    } else {
      return people - cap
    }
  }