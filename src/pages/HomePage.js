import React, { Component } from "react";

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiAvatar,
  EuiFieldSearch,
  EuiHeaderSection,
  EuiSpacer
} from "@elastic/eui";
import { EuiHeaderSectionItem } from "@elastic/eui";
import HomeBody from "../components/HomeBody";

import { FiPlusCircle } from "react-icons/fi";
import { EuiSwitch } from "@elastic/eui";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      themeSwitch: localStorage.getItem("ThemeSwitch") === "true"
    };
  }

  changeTheme = e => {
  

    if (e.target.checked === false) {
      console.log("light here", localStorage.getItem("ThemeSwitch"));

      localStorage.setItem("ThemeSwitch", false);

      this.props.setTheme("light");
    } else {
      console.log("dark here", localStorage.getItem("ThemeSwitch"));

      localStorage.setItem("ThemeSwitch", true);

      this.props.setTheme("dark");
    }
  };

  searchValueChange = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    return (
      <EuiPage style={{ height: "100vh" }}>
        {/* <EuiPageSideBar>SideBar nav</EuiPageSideBar> */}
        <EuiPageBody>
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <EuiTitle size="l">
                <h1>Atris</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
            <EuiHeaderSection side="right">
              <EuiHeaderSectionItem>
                <EuiFieldSearch
                  placeholder="Search this"
                  value={this.state.searchValue}
                  onChange={this.searchValueChange}
                  aria-label="search field for notes"
                />
              </EuiHeaderSectionItem>

              <EuiHeaderSectionItem style={{ paddingLeft: "8px" }}>
                <EuiAvatar
                  size="l"
                  name="Cat"
                  imageUrl="https://source.unsplash.com/64x64/?cat"
                />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>My Home</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
              <EuiPageContentHeaderSection>
                <EuiSwitch
                  label="light/dark"
                  checked={this.state.themeSwitch}
                  onChange={this.changeTheme}
                />
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <HomeBody />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
