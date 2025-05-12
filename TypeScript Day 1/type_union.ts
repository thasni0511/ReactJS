type animal1 = {
    name: "cat";
  };
  
  type animal2 = {
    name: "dog";
  };
  type animal3 = {
    name: "parrot";
  };
  
  type Pet = animal1 | animal2 | animal3;
  
  const pet1: Pet = { name: "cat" }; 
  const pet2: Pet = { name: "dog" }; 
  const pet3: Pet = { name: "parrot" };
  
  console.log("My first pet :", pet1.name);  
  console.log("My second pet:", pet2.name); 
  console.log("My third pet is",pet3.name)
  