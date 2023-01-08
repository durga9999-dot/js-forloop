const users = [
  {id:1, name: 'Alice'},
  {id:2, name: 'Bob'},
  {id:3, name: 'Charlie'}
],

const orders = [
  {  userId:1, product: 'Apples'},
  {  userId:2, product: 'Oranges'},
  {  userId:3, product: 'Banana'},
  {  userId:4, product: 'Mangoes'}
]

const result = users.map((user) =>{
  const order = orders.find(order =>
    order.userId === user.id);
    if(order){
      return{
        ...user,
        ...order
      }
      
    }
    
  }
  ) 
  console.log(result);
  
