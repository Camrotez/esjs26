function sum(...rest) {
    let result = 0
    rest.forEach(i => result + i);
    return result;
}
// non capisco perchè non mi funzioni il programma, cosa sto sbagliando?

console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14));