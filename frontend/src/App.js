import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import BookList from "./UserList";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={"/login"}>
                        <Login />
                    </Route>
                    <Route path={"/user-list"}>
                        <BookList />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}