import React, { Component } from "react";
import { EuiTreeView } from "@elastic/eui";
import { EuiIcon } from "@elastic/eui";
import CheckboxTree from 'react-checkbox-tree';
import "./TreeSelect.css"

const  ApiResEnt = {
  PERSON: ["Sebastian Thrun", "Thrun"],
  NORP: ["American"],
  ORG: ["Recode"],
  DATE: ["2007", "this week"]
};

const  ApiResEntRange = [
  { start: 0, end: 15, label: "PERSON" },
  { start: 84, end: 88, label: "DATE" },
  { start: 196, end: 204, label: "NORP" },
  { start: 16, end: 21, label: "PERSON" },
  { start: 344, end: 350, label: "ORG" },
  { start: 365, end: 374, label: "DATE" }
];

const nodes = [
  {
      value: '/app',
      label: 'app',
      children: [
          {
              value: '/app/Http',
              label: 'Http',
              children: [
                  {
                      value: '/app/Http/Controllers',
                      label: 'Controllers',
                      children: [{
                          value: '/app/Http/Controllers/WelcomeController.js',
                          label: 'WelcomeController.js',
                      }],
                  },
                  {
                      value: '/app/Http/routes.js',
                      label: 'routes.js',
                  },
              ],
          },
          {
              value: '/app/Providers',
              label: 'Providers',
              children: [{
                  value: '/app/Providers/EventServiceProvider.js',
                  label: 'EventServiceProvider.js',
              }],
          },
      ],
  },
  {
      value: '/config',
      label: 'config',
      children: [
          {
              value: '/config/app.js',
              label: 'app.js',
          },
          {
              value: '/config/database.js',
              label: 'database.js',
          },
      ],
  },
  {
      value: '/public',
      label: 'public',
      children: [
          {
              value: '/public/assets/',
              label: 'assets',
              children: [{
                  value: '/public/assets/style.css',
                  label: 'style.css',
              }],
          },
          {
              value: '/public/index.html',
              label: 'index.html',
          },
      ],
  },
  {
      value: '/.env',
      label: '.env',
  },
  {
      value: '/.gitignore',
      label: '.gitignore',
  },
  {
      value: '/README.md',
      label: 'README.md',
  },
];

export default class TreeSelect extends Component {
  state = {
    checked: [
         
    ],
    expanded: [
        '/app',
    ],
};

constructor(props) {
    super(props);

    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
}

onCheck(checked) {
    this.setState({ checked });
}

onExpand(expanded) {
    this.setState({ expanded });
}

render() {
    const { checked, expanded } = this.state;

    return (
        <CheckboxTree
            checked={checked}
            expanded={expanded}
            iconsClass="fa5"
            nodes={nodes}
            onCheck={this.onCheck}
            onExpand={this.onExpand}
            showNodeIcon={false}
            expandOnClick={true}
            onClick={()=>{console.log("click")}}
        />
    );
}
}