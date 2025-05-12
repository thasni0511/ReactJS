// merge possible in interface

interface  user{
    name:string;
}
interface user{
    age:number;
}

const userdetails:user={name:"Thanu",age:25};
console.log(userdetails);