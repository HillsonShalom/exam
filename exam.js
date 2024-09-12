function Mission1(array = []){
    return array.filter(n => n % 2 === 0);
}

function Mission2(string = ''){
    let array = string.split(' ');
    return array.filter(w => w.length === 4);
}

function Mission3(matrix){
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            array.push(matrix[i][j])
        }
    }
    return array;
}


function Mission4(array){
  if (array[0] === array[1] || array.length < 2) return 0;
  let ans = array[0] < array[1] ? 1 : 2;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i-1] && ans === 1) ans = 1;
    else if (array[i] < array[i-1] && ans === 2) ans = 2;
    else return 0;
  }
  return ans;
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}