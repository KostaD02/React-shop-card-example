import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { counters : [{id: 1, value: 0}, {id: 2, value: 0},{id: 3, value: 0},{id: 4, value: 0}],
    sum: 0
    }
    sumElements = () =>{
        let temp = 0;
        this.state.counters.forEach((item) => {temp+=item.value});
        return temp;
    }
    handleIncrement = (cId) => {
        const newCounters = this.state.counters;
        newCounters.forEach(function(item) {if(item.value<10)  if(item.id===cId) item.value++;});
        this.setState( {counters :newCounters});
        this.state.sum = this.sumElements();
    };
    handleMaxElement = (cId) => {
        const newCounters = this.state.counters;
        newCounters.forEach(function(item) {if(item.id===cId) item.value=10;});
        this.setState( {counters :newCounters});
        this.state.sum = this.sumElements();
    };
    handleMinElement = (cId) => {
        const newCounters = this.state.counters;
        newCounters.forEach(function(item) {if(item.id===cId) item.value=0;});
        this.setState( {counters :newCounters});
        this.state.sum = this.sumElements();
    };
    handleDecrement = (cId) => {
        const newCounters = this.state.counters;
        newCounters.forEach(function(item) { if(item.value>0) if(item.id===cId) item.value--;} );
        this.setState( {counters :newCounters});
        this.state.sum=this.sumElements(); 
    };
    handleDelete = (cId) => {
        const newCounters = this.state.counters.filter((ccc) => (ccc.id !== cId)? ccc : null);
        this.setState( {counters :newCounters});
        this.state.sum=this.sumElements(); 
    }
    handleDeleteAll = () => {
        const newCounters = [];
        this.setState({counters : newCounters});
        this.state.sum=this.sumElements(); 
    }
    handleReset = () =>{
        const newCounters = this.state.counters;
        if(newCounters.find((c) => (c.value > 0 ))){
            newCounters.forEach((c) => (c.value = 0));
            this.setState({newCounters});
            this.state.sum=this.sumElements(); 
        }else{
            const createCounters = [{id: 1, value: 0}, {id: 2, value: 0},{id: 3, value: 0},{id: 4, value: 0}];
            this.setState({counters : createCounters});
            this.state.sum=this.sumElements(); 
        }
    }
    handleMin = (min) =>{
        const newCounters = this.state.counters;
        newCounters.forEach((c) => (c.value = min));
        this.setState({newCounters});
        this.state.sum=this.sumElements(); 

    }
    handleMax = (max) =>{
        const newCounters = this.state.counters;
        newCounters.forEach((c) => (c.value = max) && (this.state.sum=this.sumElements()));
        this.setState({newCounters});
    }
    handleAddelement = () =>{
        let newCounters = this.state.counters;
        if(newCounters.length === 0) newCounters.push({id:1,value : 0}); 
        let maxId = newCounters.lenght !== 0 ? newCounters[0].id : 0;
        newCounters.forEach((c) => (c.id>maxId)? (maxId = c.id): null);
        newCounters.push({id:maxId+1,value : 0});
        this.setState({newCounters});
    }
    render() {
        const Min = 0;
        const Max = 10;
        return (
           <section>
                <div>
                   <span className="btn btn-dark">Sum:{this.state.sum}</span>
                   <button onClick={ () => this.handleReset()} className="btn btn-secondary m-2">Reset</button>
                   <button onClick={ () => this.handleAddelement()} className="btn btn-success m-2">Add</button>
                   <button onClick={ () => this.handleMin(Min)} className="btn btn-primary m-2">Min</button>
                   <button onClick={ () => this.handleMax(Max)} className="btn btn-primary m-2">Max</button>
                   <button onClick={ () => this.handleDeleteAll()} className="btn btn-danger m-2">DeleteAll</button>
                </div> 
            <div>
                {this.state.counters.map((c)=>
                    <Counter key={c.id} counterId = {c.id} counterValue={c.value} 
                    onDelete = {this.handleDelete}
                    onIncrement = {this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onMin = {this.handleMinElement}
                    onMax = {this.handleMaxElement}
                    />)}
            </div>
           </section>            
        );
    }
}
 
export default Counters;