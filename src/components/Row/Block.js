import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Block extends Component {
  constructor(props) {
    super(props);
  }

  clickHandler = id => {
    const { data, btn, dispatch } = this.props;
    if (btn === "Remove") {
      dispatch(actions.removeItem(data.id));
    } else if (btn === "Add") {
      dispatch(actions.addItem(data));
    }
  };

  render() {
    const { data, btn } = this.props;
    return (
      <div className="block">
        <img src={data.img} />
        <div>{data.title}</div>
        <button onClick={() => this.clickHandler(data)}>{btn}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.mylist,
    recommendation: state.recommendation
  };
};

export default connect(mapStateToProps)(Block);
