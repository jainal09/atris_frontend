import React, { Component } from "react";
import { EuiTreeView } from "@elastic/eui";
import { EuiIcon } from "@elastic/eui";
import CheckboxTree from "react-checkbox-tree";
import "./TreeSelect.css";

const ApiResEnt = {
  PERSON: ["Sebastian Thrun", "Thrun"],
  NORP: ["American"],
  ORG: ["Recode"],
  DATE: ["2007", "this week"]
};

const ApiResEntRange = [
  { start: 0, end: 15, label: "PERSON" },
  { start: 84, end: 88, label: "DATE" },
  { start: 196, end: 204, label: "NORP" },
  { start: 16, end: 21, label: "PERSON" },
  { start: 344, end: 350, label: "ORG" },
  { start: 365, end: 374, label: "DATE" }
];

const modifiedRes = [
  {
    start: 5,
    end: 20,
    text: "Sebastian Thrun",
    tag: "PERSON",
    color: "#84d2ff"
  },
  {
    start: 454,
    end: 462,
    text: "startups",
    tag: "PERSON",
    color: "#84d2ff"
  },
  {
    start: 507,
    end: 519,
    text: "world clamor",
    tag: "PERSON",
    color: "#84d2ff"
  }
];

let nodes = [
  {
    value: "/ENTITIES",
    label: "ENTITIES",
    children: [
      {
        value: "/ENTITIES/PERSON",
        label: "PERSON",
        children: [
          {
            value: "/ENTITIES/PERSON/Sebastian Thrun",
            label: "Sebastian Thrun"
          },
          {
            value: "/ENTITIES/PERSON/Thrun",
            label: "Thrun"
          }
        ]
      },
      {
        value: "/ENTITIES/NORP",
        label: "NORP",
        children: [
          {
            value: "/ENTITIES/NORP/American",
            label: "American"
          }
        ]
      }
    ]
  }
];

export default class TreeSelect extends Component {
  state = {
    checked: [],
    expanded: ["/ENTITIES"],
    tree_node: []
  };

  constructor(props) {
    super(props);
  }

  onCheck = checked => {
    this.setState({ checked });
    // let selected_arr = checked.split("/");
    checked.forEach(check_elem => {});
    console.log(checked);
  };

  onExpand = expanded => {
    this.setState({ expanded });
  };

  componentDidMount = () => {
    let entities_node_children = [];

    let new_node = [
      {
        value: "/ENTITIES",
        label: "ENTITIES",
        children: entities_node_children
      }
    ];
    let entities_childrens = [];
    Object.keys(ApiResEnt).forEach(function(entity) {
      // entity is PERSON NORP ORG DATE
      let entity_array = ApiResEnt[entity]; // ["Sebastian Thrun", "Thrun"]
      let entity_children_array = [];
      let entity_obj = {
        value: `/ENTITIES/${entity}`,
        label: entity,
        children: entity_children_array
      };
      entity_array.forEach(entity_values => {
        // entity_values is "Sebastian Thrun", "Thrun" per iteration

        let child_obj = {
          value: `/ENTITIES/${entity}/${entity_values}`,
          label: entity_values
        };
        entity_children_array.push(child_obj);
      });
      entities_node_children.push(entity_obj);
    });

    this.setState({
      tree_node: new_node
    });
  };

  render() {
    const { checked, expanded } = this.state;

    return (
      <CheckboxTree
        checked={checked}
        expanded={expanded}
        iconsClass="fa5"
        nodes={this.state.tree_node}
        onCheck={this.onCheck}
        onExpand={this.onExpand}
        showNodeIcon={false}
        expandOnClick={true}
        onClick={() => {
          console.log("click");
        }}
      />
    );
  }
}
