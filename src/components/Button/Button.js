import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles
export default class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button">测试</div>;
  }
}
