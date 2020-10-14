import React, {Component} from 'react'
import axios from "axios";

export default class weather extends Component {
    constructor(){
        super();
        this.state={
            weather:"Not gotten"
        }
    }
    componentDidMount = ()=>{
        axios.get("/getPokemon").then(response=>{
            this.setState({
                weather:response.data.name
            });
        });
    };
    render(){
        return(
            <div>
                <button>Get Weather in toronto</button>
                <h1>WEATHER IN TORONTO IS : {this.state.weather}</h1>
            </div>
        )
    }
}