import React from 'react'
import axios from '../../config/axios'
import Swal from 'sweetalert2'
import validator from 'validator'


class Add extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName : '',
            mobile : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            mobile : this.state.mobile,
            message : `Hi, Your OTP is: ${Math.round(Math.random()*1000000)}`
        }
        this.setState({formData})
        console.log('formData',formData)
    
        axios.post('/contacts' , formData )
            .then(response => {
                if(response.data.hasOwnProperty('errors')){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text : response.data.message.toUpperCase()
                      })
                } else {
                    this.props.history.push('/contacts')
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }) 
    }
    
    

    handleChange = (e) => {
        const form = e.target.value
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log('form', form)
    }

    handleNumChange = (e) => {
        const mobileform = e.target.value
            if(validator.isNumeric(mobileform)){
                this.setState({mobile : mobileform})
            } else {
                this.setState({mobile : ''})
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text : 'Enter only Numeric Number'
                  })
            }
    }


    render(){
        return(
            <div style={{margin:'50px 0px 0px 0px'}}>
                <h4><p class="font-weight-bolder">Add new Contact: </p></h4>

                <form onSubmit={this.handleSubmit} >

                <div class="form-group" class="col-md-2" class="form-inline">
                <label htmlFor="firstName">  First Name:</label>
                <input type="text" id="firstName"  name="firstName" onChange={this.handleChange} class="form-control mx-sm-3"  /> </div><br/>
                
                <div class="form-group"  class="col-md-2" class="form-inline" >
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" onChange={this.handleChange} class="form-control mx-sm-3" /> </div><br/>
                
                <div class="form-group" class="col-md-2" class="form-inline">
                <label htmlFor="mobile">Mobile:</label>

                <input  type="search" class="no-arrow" id="mobile"  name="mobile" onChange={this.handleNumChange} maxLength="10" class="form-control mx-sm-3" /> 
                </div>
                <input type="submit" value="Add" class="btn btn-primary"  />

                </form>
            </div>
        )
    }
}

export default Add