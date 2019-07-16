import * as React from 'react';
import {PureComponent} from 'react';

interface State {
  activeItem: string;
}

interface Props {
  activeItem: string
}

const withActiveItem = <P extends object>(Component: React.ComponentType<P>) => {
  class WithActiveItem extends PureComponent<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        activeItem: props.activeItem
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item: string) {
      this.setState({
        activeItem: item
      });
    }

    componentDidUpdate(prevProps: Props) {
      if (this.props.activeItem !== prevProps.activeItem) {
        this._setActiveItem(this.props.activeItem);
      }
    }

    render() {
      return (
        <Component
          {...this.props as P}
          onClick={this._setActiveItem}
          activeItem={this.state.activeItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
