import axios from 'axios'
import React, {Component} from 'react'


export default class Forgot extends Component{
    
   handleFormSubmit = e => {
       e.preventdefault()

       const data = {
           email: this.email
       }
       axios.post('forgot', data).then(
           res => {
               console.log(res)
           }
       )
   }

    render(){
        return(
            <div>
        <form onSubmit={this.handleFormSubmit} >
            <label>Email</label>
            <input type="text" placeholder="email" onChange={ e => this.email = e.target.value} />

            <button type="submit">Submit</button>
        </form>
      </div>
        )
    }
}