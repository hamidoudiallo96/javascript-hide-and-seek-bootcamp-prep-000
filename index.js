const getFirstSelector = selector =>{
  return document.querySelector(selector)
}


const nestedTarget =() =>{
  return document.querySelector('.target')
}

const increaseRankBy = n =>{
  const rankedList = document.querySelector('.ranked-list')
  let incrementRanks = rankedList.forEach(item =>{
    parseInt(item)+=n
  });
  return incrementRanks
}

