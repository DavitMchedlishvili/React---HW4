import React, { Component } from 'react'
import Userslist from './Userslist';




export default class Classcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showUsersList: true,
        }
    }
    
    

    
      toggleValue = () => {
        this.setState({ showUsersList: !this.state.showUsersList })
        console.log(this.state.showUsersList)
        
      };
    
     
       
    
    
      render() {
        const { showUsersList } = this.state;
    
    
    
    
    
        return (
          <>
            
            {showUsersList ? <div>
              <button onClick={() => this.toggleValue()}>Hide</button>
              <Userslist list={this.state.showUsersList} />
            </div>
              : <div><button onClick={() => this.toggleValue()}>Show</button> </div>}
    
    
    
          </>
        )
    
      
    
        
    }

  }
