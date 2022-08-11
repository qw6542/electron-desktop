const {deserialize, serialize} = require('v8');

let e = ['a','b','b']
let objA = {
    a: 1,
    b: {
        c: 2,
        d: {
            e
        },
        date: new Date(),
        undef: undefined,  // lost
        inf: Infinity,  // 'null'
        re: /.*/,  // lost
    }
};

console.log(objA.b.d.e);

let objB = deserialize(serialize(objA));



console.log(objB.b);
