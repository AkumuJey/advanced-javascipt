
const getName = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(name => {
                arr.push(name);
            });
        }
        getName(dataObj[key], arr);
    });
    return arr;
}