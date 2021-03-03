import React from 'react'
import {Provider} from 'react-redux';
import store from '../Store/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from '../Components/Layout/Layout'
import ItemsList from './ItemList/ItemsList';
import './globals.scss';
import Item from './Item/Item';
import Login from '../Components/User/Login/Login';
import Register from '../Components/User/Register/Register';

const Root = () => {

    return (
        <Provider store={store}>
            <Router>
                <div className="body_container">
                    <Layout>
                        <Route
                            path="/login"
                            component={Login}/>
                        <Route
                            path="/register"
                            component={Register}/>
                        <Route 
                            path="/handgun" 
                            render={(props) => <ItemsList category='handgun'/>}/>
                        <Route 
                            path="/rifle" 
                            render={(props) => <ItemsList category='rifle'/>}/>
                        <Route 
                            path="/shotgun" 
                            render={(props) => <ItemsList category='shotgun'/>}/>
                        <Route 
                            path='/products/:id'
                            render={(props) => <Item id={props.match.params.id}/>}/>
                    </Layout>
                </div>
            </Router>
        </Provider>
    )
}

export default Root;