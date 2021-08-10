// const add = (n1,n2) => console.log(n1+n2);
// const sub = (n1,n2) => {
// if(n1>n2){
// console.log(n1-n2);
// }else{
// console.log(n2-n1);
// }

// }
// module.exports = {add,sub, mul: (n1,n2) => console.log(n1*n2)};

//------------------------------------------------------------------------------------

// const calculate = {
// add: (n1,n2) => console.log(n1+n2),
// sub: (n1,n2) => {
//     if(n1>n2)
//         console.log(n1-n2);
//     else   
//         console.log(n2-n1);

// }
// }
// module.exports = {calculate};
//----------------------------------------------------------

const calculate = {}
calculate.add = (n1,n2) => console.log(n1+n2),
calculate.sub = (n1,n2) => {
        if(n1>n2)
            console.log(n1-n2);
        else   
            console.log(n2-n1);
    
    }
    
    module.exports = {calculate};
