exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }
    }
    return - 1;
  },

  sum : function(arr) {
    var result = 0;

    arr.forEach( function(val) {
      result += val;
    });

    return result;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
       var removed = arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var result = arr1.slice();

    arr2.forEach(function(x){
      result.push(x);
    })

    return result;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count : function(arr, item) {
    var occurences = 0;
    for(var i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        occurences++;
      }
    }

    return occurences;
  },

  duplicates : function(arr) {
    var result = [];
    dupes = [];
    for(var i = 0; i < arr.length; i++){
      var found = false;
      if(result.length){
        for(var j = 0; j < result.length; j++){
          if(result[j][0] === arr[i]){
            found = true;
            result[j][1]++
            if(result[j][1] > 1 && dupes.indexOf(arr[i]) === -1) {
              dupes.push(arr[i]);
            }
          }
        }
      }
      if(!found){
          result.push([arr[i], 1]);
        }
    }

    return dupes;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }

    return arr;
  },

  findAllOccurrences : function(arr, target) {
    //I am not sure what the test is asking
  }
};
