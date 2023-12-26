import React, { Component } from 'react';
import '../App.css';
import FoodData from '../resources/FoodData';

export default class Foodbox extends Component {
  state = {
    val: 0,
    cal: 0
  };

  change_inp = (e) => {
    this.setState({
      val: e.target.value
    });
  };

  increase_calorie = (cal) => {
    this.setState({
      cal: this.state.val * cal
    });
  };

  resetBtn = () => {
    this.setState(() => {
        return {
            val: this.state.val = 0,
            cal: 0
        }
    })
}


  render() {
    let data = this.props.food;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={data.img} alt={data.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{data.name}</strong> <br />
                <small>{data.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={this.change_inp} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.increase_calorie(data.cal)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <div>
          {this.state.val} {data.name} = {this.state.cal} calories
          <button className='reset' onClick={this.resetBtn}>Reset</button>
        </div>
      </div>
    );
  }
}