import React, {Component} from "react";
import Input from "../presentational/Input";
import {connect} from "react-redux";
import {incrementCount} from "../../actions/counterAction";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seo_title: ""
    };
  };

  render() {
    const {seo_title} = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    )
  };

  handleChange = () => {
    this.props.incrementCount();
    this.setState({seo_title: "Incremented"});
  };
}

export default connect(
  null,
  {incrementCount}
)(FormContainer);
;