function reverse(str){
  
  let arr = str.split('');
  let result = [];

  for ( i =0 ; i < arr.length ; i++){
      result[i] = arr[(arr.length-1)-i];
  }
  return result.join('');
}

reverse('hello');
