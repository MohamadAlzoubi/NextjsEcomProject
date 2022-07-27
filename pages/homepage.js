import Button from './components/button'
import React, { Component } from "react";
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('__next'));
const element = <Welcome name="Sara" />;
root.render(element);

export default Welcome;