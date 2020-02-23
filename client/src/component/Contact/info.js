import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

class Info extends React.Component{
    constructor(){
        super()
        this.state = {
            contacts : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`)
        .then(response => {
            const contacts = response.data
            this.setState({contacts})
            console.log('Contacts',contacts)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div style={{textAlign:"center" , margin:'60px 0px 0px 0px'}} >
                <p class="font-weight-bold">Contact Info :</p>
                <ul class="list-inline">
                <li class="font-weight-normal" class="list-inline-item"> Name :-  {this.state.contacts.firstName} {this.state.contacts.lastName}</li><br/>
                <li  class="font-weight-normal" class="list-inline-item"> Mobile No. :-  {this.state.contacts.mobile}</li>
                </ul>
                       
                <a href={`/contacts/${this.state.contacts._id}/send`} class="btn btn-primary btn-sm">Send Message</a>
               
                <br />
                <a href="/contacts" class="badge badge-warning">Back</a>
            </div>
        )    
    }
}

export default Info