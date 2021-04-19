interface Human {
    name : string,
    age : number,
    gender : string
}

const person = {
    name: "doohyun",
    age : 28,
    gender : "man"
    
}

const Hi = (person: Human):string => {
return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(Hi(person));

export {};