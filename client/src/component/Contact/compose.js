import React from 'react'
import axios from '../../config/axios'
import Swal from 'sweetalert2'

class Compose extends React.Component{
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
    
    handleClick = (e) => {
        const formDatas = e.target.value
        const formData = {
            name : `${this.state.contacts.firstName} ${this.state.contacts.lastName}`,
            mobile : this.state.contacts.mobile,
            message : this.state.contacts.message,
            createdAt : Date()
        }
        this.setState({formData})
        console.log('Form',formData ,'2' ,formDatas)
        
        axios.post('/messages' , formData )
            .then(response => {
                const formData = response.data
                this.setState({formData})
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Send',
                showConfirmButton: false,
                timer: 1500
              })
            
    }

    render(){
        return(
            <div style={{textAlign:"center" , margin:'60px 0px 0px 0px'}}>
                <p class="font-weight-bold">Message : </p>
                <ul class="list-inline">
                <li class="font-weight-normal" class="list-inline-item"> Name :-  {this.state.contacts.firstName} {this.state.contacts.lastName}</li><br/>
                <li  class="font-weight-normal" class="list-inline-item"> Message :-  {this.state.contacts.message}</li>
                </ul>

                <button type="button" onClick={this.handleClick} class="btn btn-primary btn-sm">Send</button> <br/><br/>
                
                <a href="/contacts" class="badge badge-warning">Back to Contacts</a>
            </div>
        )
    }
}

export default Compose