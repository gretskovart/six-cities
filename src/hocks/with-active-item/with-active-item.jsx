import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onClick={this._setActiveItem}
          activeItem={this.state.activeItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.string
  };

  return WithActiveItem;
};

export default withActiveItem;
