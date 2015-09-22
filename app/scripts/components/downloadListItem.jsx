import React from "react";
import TransitionGroup from "react-addons-transition-group";
import classNames from "classnames";
import SoundClass from "../classes/sound";
import { ProgressBar } from "./ui";

export default React.createClass({
  propTypes: SoundClass,
  getInitialState() {
    return {};
  },
  renderProgress() {
    if (this.props.progress === 1) {
      return (
        <div className="animated bounceInUp" key={this.props.file + "done"}>
          <i className="icon-tick"/>
        </div>);
    }
    return <ProgressBar key={this.props.file + "progress"} progress={this.props.progress}/>;
  },
  render() {
    return (
      <div className={classNames("download", {"active": this.props.progress < 1})}>
        <div className="preview" style={{backgroundImage: `url(${this.props.img})`}}/>
        <span className="title">{this.props.name}</span>
        <TransitionGroup>
          {this.renderProgress()}
        </TransitionGroup>
      </div>
    );
  }
});