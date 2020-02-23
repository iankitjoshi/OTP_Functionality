import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


class List extends React.Component{
    constructor(){
        super()
        this.state = {
            contacts : []
        }
    }

    componentDidMount(){
        axios.get('/contacts')
            .then(response => {
                const contacts = response.data
                this.setState({contacts})
                console.log('contact',contacts)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleRemove = (id) => {
        axios.delete(`/contacts/${id}`)
        .then(response => {
            this.setState(prevState => ({
                contacts: prevState.contacts.filter(contact => contact._id != response.data._id)
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
                <h4><p class="font-weight-bolder">Contact List:- {this.state.contacts.length}</p></h4>
                    <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map((contact , i) => {
                                return (
                                    <tr key={contact._id}>
                                        <td>{i + 1}.</td>
                                        <td>{contact.firstName}</td>
                                        <td>{contact.lastName}</td>
                                        <td><a href={`/contacts/${contact._id}`} class="btn btn-success"> Info </a></td>
                                        <td><button onClick={() => {
                                            this.handleRemove(contact._id)
                                            }} className="btn btn-danger">Remove</button></td>
                                </tr>
                                ) 
                            })                

                        }
                    </tbody>
                    </table>
                
                <a href="/contacts/add" class="btn btn-primary">Add New</a>

            </div>
        )
    }
}

export default List