import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        counterMin: 0,
        counterMax: 10,
        counterSum: 0
    };
    render() {  
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counterId)} className="btn btn-success m-2">Increment</button>
                <button onClick={ () => this.props.onDecrement(this.props.counterId)} className="btn btn-dark m-2">Decrement</button>
                <button onClick={ () => this.props.onMin(this.props.counterId)} className="btn btn-info m-2">Min</button>
                <button onClick={ () => this.props.onMax(this.props.counterId)} className="btn btn-info m-2">Max</button>
                <button onClick={ () => this.props.onDelete(this.props.counterId)} className="btn btn-danger m-2">Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counterValue === this.state.counterMin) ? "warning" : (this.props.counterValue === this.state.counterMax) ? "warning" : "secondary";        
        return classes;
    }
     formatCount(){
         return this.props.counterValue === this.state.counterMin ? "Zero" : this.props.counterValue === this.state.counterMax ? "Max" : this.props.counterValue
     }
}
 
export default Counter;