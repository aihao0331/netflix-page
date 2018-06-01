import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

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
        {btn === "Remove" ? (
          <Button
            bsStyle="danger"
            className="block-btn-remove"
            onClick={() => this.clickHandler(data)}
          >
            {btn}
          </Button>
        ) : (
          <Button
            bsStyle="warning"
            className="block-btn-add"
            onClick={() => this.clickHandler(data)}
          >
            {btn}
          </Button>
        )}
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
