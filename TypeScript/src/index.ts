// let name:string;
// name = 'Dave';

function sum(a:number, b:number) {
    return a + b;
}

let num = sum(2, 1)

let name = 'String';

let phone = "13134784512";

function isOdd(n:number): boolean{
    return n%2 === 0;
}

// let nums: [3, 4, 5];
// let nums: Array<number> = [3, 4, 5];

function printValues(obj:object){
    const vals = Object.values(obj)
    vals.forEach(v => console.log(v));
}
printValues({
    name: 'Dave',
    age: 21
})

let name: string | undefined = undefined;
