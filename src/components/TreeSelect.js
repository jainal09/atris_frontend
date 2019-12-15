import React, { Component } from "react";
import { EuiTreeView } from "@elastic/eui";
import { EuiIcon } from "@elastic/eui";

const fakeApiResEnt = {
  PERSON: ["Sebastian Thrun", "Thrun"],
  NORP: ["American"],
  ORG: ["Recode"],
  DATE: ["2007", "this week"]
};

const fakeApiResEntRange = [
  { start: 0, end: 15, label: "PERSON" },
  { start: 84, end: 88, label: "DATE" },
  { start: 196, end: 204, label: "NORP" },
  { start: 16, end: 21, label: "PERSON" },
  { start: 344, end: 350, label: "ORG" },
  { start: 365, end: 374, label: "DATE" }
];

export default class TreeSelect extends Component {
  state = {};

  genAnnotateState = () => {};

  genEntitiesJson = () => {
    Object.keys(fakeApiResEnt).forEach(function(key) {
    var value = fakeApiResEnt[key]; // ["Sebastian Thrun", "Thrun"]
    let childArray = [];


    });
  };

  render() {
    // PERSON NORP FAC ORG GPE LOC PRODUCT EVENT WORK_OF_ART LAW LANGUAGE DATE TIME PERCENT MONEY
    // QUANTITY ORDINAL CARDINAL

    const items = [
      {
        label: "Entities",
        id: "entites",
        icon: <EuiIcon type="arrowRight" />,
        iconWhenExpanded: <EuiIcon type="arrowDown" />,
        isExpanded: true, // isExpanded means like isSelected in our use case
        children: [
          {
            label: "Person",
            id: "ent_person",
            icon: (
              <div>
                <EuiIcon type="arrowRight" /> <EuiIcon type="stop" />
              </div>
            ),
            iconWhenExpanded: (
              <div>
                <EuiIcon type="arrowDown" /> <EuiIcon type="stopFilled" />
              </div>
            ),
            callback: this.entitySelectCallback,
            children: [
              {
                label: "elon",
                id: "person1",
                icon: <EuiIcon type="stop" />,
                iconWhenExpanded: <EuiIcon type="stopFilled" />,
                callback: () => {
                  this.genAnnotateState("elon");
                }
              },
              {
                label: "jeff",
                id: "person2",
                icon: <EuiIcon type="stop" />,
                iconWhenExpanded: <EuiIcon type="stopFilled" />,
                callback: () => {
                  this.genAnnotateState("jeff");
                }
              }
            ]
          },
          {
            label: "ORG",
            id: "org",
            icon: <EuiIcon type="stop" />,
            iconWhenExpanded: <EuiIcon type="stopFilled" />,
            callback: this.entitySelectCallback
          }
        ]
      },
      {
        label: "Audio Classify",
        id: "item_two",
        icon: <EuiIcon type="arrowRight" />,
        iconWhenExpanded: <EuiIcon type="arrowDown" />
      }
    ];
    return (
      <div>
        <EuiTreeView
          items={items}
          aria-label="Select Entites"
          expandByDefault
        />
      </div>
    );
  }
}
