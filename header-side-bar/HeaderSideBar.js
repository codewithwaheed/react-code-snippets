import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HeaderSideBar extends Component {
  render() {
    const { activeSideBar } = this.props;
    return (
      <div
        className={
          activeSideBar ? "headerSideBar headerSideBarActive" : "headerSideBar"
        }
      >
        <div className="sideBarItemDiv">
          <Link to="/learning">
            <div
              onClick={() => {
                this.props.closeSideBar();
              }}
              className="sideBarItem"
            >
              Learning
            </div>
          </Link>
          <div
            onClick={() => {
              this.props.closeSideBar();
            }}
            className="sideBarItem"
          >
            Teaching
          </div>
          <div
            onClick={() => {
              this.props.closeSideBar();
            }}
            className="sideBarItem"
          >
            Blog
          </div>
        </div>
      </div>
    );
  }
}
