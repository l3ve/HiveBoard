import React from 'react';
import ReactDOM from 'react-dom';
let seed = 0;
let singleton = {}

export function getUuid() {
    const now = Date.now();
    return `uuid_${now}_${seed++}`;
}



export function Singleton(para) {
    const {instance, Component, inserTarget} = para;
    if (singleton[instance]) {
        return singleton[instance];
    }
    const div = document.createElement('div');
    if (inserTarget) {
        document.querySelector(inserTarget).appendChild(div);
    } else {
        document.body.appendChild(div);
    }
    singleton[instance] = ReactDOM.render(< Component />, div);
    return singleton[instance];
}