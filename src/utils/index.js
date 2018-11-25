export const findObjIndex = (array, attr, value) => {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

export const groupBy = (arr, prop) => {
  const newArray = [];  
  const substrDay = (d) => { return d.substr(0, d.indexOf(' ')) };
  const createSubGroup = (day) => {
        if (! newArray[day] ) {
          newArray[day] = [];
        }
        
  };
  arr.forEach( (item, i) => {
        const day = substrDay(item[prop]);
        createSubGroup(day); 
        if (i === 0) {
                newArray[day].push(item);
        }
        if (arr[i-1]) {
                if (day === substrDay(arr[i-1][prop]) || day === substrDay(arr[i][prop])) {
                        newArray[day].push(item);
                }
        }
  });

  return newArray;
}

const generateRandomString = (lenght, characterSet) => {
  let text = '';
  for (var i = 0; i < lenght; i++) {
    text += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return text;
};

export const makeId = (lenght) => {
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return generateRandomString(lenght, possible);
};

export const unixToDate = (unix) => new Date(unix*1000);