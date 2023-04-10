import React, { Component } from 'react'



export default class Userslist extends Component {

   
    componentDidMount (){
        document.title = "there is 10 users"
    };

    componentWillUnmount(){
       document.title = "there is no users"  
    };

  render() {
    
    const usersData = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }, { id: 4, name: "Samantha Lee" },
    { id: 5, name: "David Kim" }, { id: 6, name: "Maria Rodriguez" },
    { id: 7, name: "Chris Brown" }, { id: 8, name: "Emily Jones" },
    { id: 9, name: "Tom Smith" }, { id: 10, name: "Sarah Davis" }]

    const list = usersData.map((users) => {
        return (<h1 key={users.id}>users Name: {users.name} </h1>)
      })

    return (
    <>
     {list}
    </>
     
    )
  }
}
