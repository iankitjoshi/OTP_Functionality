import React from 'react'
import {BrowserRouter , Link , Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './component/Home'
import List from './component/Contact/list'
import Info from './component/Contact/info'
import Compose from './component/Contact/compose'
import Add from './component/Contact/add'

import Message from './component/Message/message'
import Show from './component/Message/show'

function App() {
  return (

    <div>

      <BrowserRouter>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="/">Home</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
              </button>

           <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                 <li class="nav-item active">
                    <a class="nav-link" href="/contacts">Contact<span class="sr-only">(current)</span></a>
                  </li>

                  <li class="nav-item active">
                     <a class="nav-link" href="/messages">Message<span class="sr-only">(current)</span></a>
                  </li>
               </ul>
            </div>
      </nav>

      <Switch>

        <Route path="/" component={Home} exact={true} />
        <Route path="/contacts" component={List} exact={true} />
        <Route path="/contacts/add" component={Add} exact={true}/>
        <Route path="/contacts/:id" component={Info} exact={true}/>
        <Route path="/contacts/:id/send" component={Compose} />

        <Route path="/messages" component={Message} exact={true} />
        <Route path="/messages/:id" component={Show} exact={true}/>


      </Switch>

      </BrowserRouter>

    </div>

  )
}

export default App;
