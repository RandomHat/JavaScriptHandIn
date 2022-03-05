const myArr = ["bo", "ib", "klaus", "torben", "børge"];

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  
function add(n1, n2){
    return n1 + n2;
};

const sub = function(n1, n2){
    return n1-n2;
};

const mul = (n1,n2) => {
    return n1*n2;
};

const numberError = (number) => {throw Error(number+" is not a valid number");}

const cb = function(n1, n2, callback){
    if (!(typeof n1 === "number")){
        numberError(n1);
    }
    if(!(typeof n2 === "number")){
        numberError(n2);
    }
    if (!(typeof callback === "function")){
        throw Error("callback was not a function")
    }
    return "result from the two numbers: "+n1+" and "+n2+"="+callback(n1,n2);
};

const toHtmlList = array => {
    let htmlString = array.map(item => "<li>"+item+"</li>").join("");
    return "<ul>"+htmlString+"</ul>";
}

const listOfObjectsToMysqlInsertScript = (array, tableName) => {
    return array.map(object =>{
        let columns = []
        let values = []
        for (const key in object) {
            columns.push(key)
            values.push(object[key])
        }
        return "INSERT INTO " + tableName + " (" + columns.join() + ") VALUES (" + values.join() + ");\n"
    } ).join("")
};

const myFilter = (array, callback) => {
    let newArray = []
    array.forEach(element => {
        if(callback(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

function myMap(array, callback){
    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element))
    });
    return newArray;
}
