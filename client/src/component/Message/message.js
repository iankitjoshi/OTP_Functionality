import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


class Message extends React.Component{
    constructor(){
        super()
        this.state = {
            messages : []
        }
    }

    componentDidMount(){
        axios.get('/messages')
            .then(response => {
                const messages = response.data.reverse()
                this.setState({messages})
                console.log('Message',messages)
            })
            .catch(err => {
                console.log(err)
            })
        }

        handleRemove = (id) => {
            axios.delete(`/messages/${id}`)
            .then(response => {
                this.setState(prevState => ({
                    messages: prevState.messages.filter(message => message._id != response.data._id)
                }))
                Swal.fire(
                    'Deleted',
                    '',
                    'sucess'
                  )
            })

        }


    render(){
        return(
            <div style={{margin:'40px 0px 0px 0px'}}>
                <h4><p class="font-weight-bolder">Message Sent List:- {this.state.messages.length}</p></h4>
                <table class="table table-sm" class="col-md-9" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>OTP</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.messages.map((message,i) => {
                        return (
                            <tr key={message._id}>
                                <td>{i + 1}. </td>
                                <td>{message.name}</td>
                                <td>{message.createdAt}</td>
                                <td>{message.message}</td>
                                <td><a href={`/messages/${message._id}`} class="btn btn-outline-primary"> Info </a></td>
                                <td>{<button onClick={() => {this.handleRemove(message._id)}} className="btn btn-outline-danger">Remove</button>}</td>
                            </tr>
                        )                                           
                    })
                } 
                    </tbody>
                    </table>              
            </div>
        )
    }
}

export default Message

