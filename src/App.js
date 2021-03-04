import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage.js';
import SignUpPage from './Auth/SignUpPage.js';
import LoginPage from './Auth/LoginPage.js';
import TodoListPage from './TodosList/TodosListPage.js';
import Header from './Components/Header.js';
import { getUserFromLocalStorage, setUserInLocalStorage } from './local-storage-utils.js';


export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
    }

  handleUserChange = (user) => {
    this.setState({ user });
    setUserInLocalStorage(user);
  }

    render() {
        return (
            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/todos" 
                            exact
                            render={(routerProps) => <TodoListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUpPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <LoginPage 
                              handleUserChange={this.handleUserChange}
                              {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}