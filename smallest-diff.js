const smallest = (arr1, arr2) => {

    let answer = Math.abs(arr1[0] - arr2[0])
  
    for (i = 0; i < arr1.length; i++) {
      for (j = 0; j < arr2.length; j++) {
        let diff = Math.abs(arr1[i] - arr2[j])
        if (diff < answer){
          answer = diff
        }
      }
    }
    return answer
  }
  
  console.log(smallest([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))