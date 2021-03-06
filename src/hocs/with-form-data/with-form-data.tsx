import * as React from 'react';
import {Subtract} from "utility-types";
import {SignInData} from "../../types";

interface InjectedProps {
  handleInput: () => void,
  handleSubmit: () => void,
}

interface State {
  data: SignInData,
}

const withFormData = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithFormData extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        data: {
          'email': ``,
          'password': ``,
        },
      };

      this._handleInput = this._handleInput.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          handleInput={this._handleInput}
          handleSubmit={this._handleSubmit}
        />
      );
    }

    _handleInput(event) {
      const {type, value} = event.currentTarget;

      this.setState(({data}) => ({
        data: Object.assign({}, data, {
          [type]: value,
        }),
      }));
    }

    _handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.data);
    }
  }

  return WithFormData;
};

export default withFormData;
