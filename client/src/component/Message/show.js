import React from 'react'
import axios from '../../config/axios'

class Show extends React.Component{
    constructor(){
        super()
        this.state = {
            messages : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/messages/${id}`)
        .then(response => {
            const messages = response.data
            this.setState({messages})
            console.log('messages',messages)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div style={{textAlign:"center" , margin:'60px 0px 0px 0px'}}>
                <p class="font-weight-bold">Message Info :</p>
                <ul class="list-inline">
                <li class="font-weight-normal" class="list-inline-item"> Name :-  {this.state.messages.name} </li><br/>
                <li  class="font-weight-normal" class="list-inline-item"> Mobile No. :-  {this.state.messages.mobile}</li><br />
                <li  class="font-weight-normal" class="list-inline-item"> Message :-  {this.state.messages.message}</li><br/>
                <li  class="font-weight-normal" class="list-inline-item"> Time :-  {this.state.messages.createdAt}</li>


                </ul>
                <a href="/messages" class="badge badge-warning">Back to Contacts</a>

            </div>
        )
    }
}

export default Show