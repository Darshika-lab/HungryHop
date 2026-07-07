  import bcrypt from 'bcrypt'; 
  
  export async function passwordHashing(password) {
      const hashedpassword = await bcrypt.hash(password, 10);
      return hashedpassword;
  }

  export async function compareHashing(password, hashedpassword) {

     const compare = await bcrypt.compare(password, hashedpassword);
     console.log("password match => ", compare)
     return compare;
  }
