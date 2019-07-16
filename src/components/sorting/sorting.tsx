import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../../reducer/data/data';
import {constants} from '../../helpers';

interface State {
  isOptionsOpen: boolean;
  activeSorting: string;
}

interface Props {
  sortOffers: Function;
}

class Sorting extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOptionsOpen: false,
      activeSorting: `Popular`
    };
    this._toggleSortingList = this._toggleSortingList.bind(this);
  }

  render() {
    const {SORTING_TYPE} = constants;
    const sortingClassName: string = this.state.isOptionsOpen ? `places__options--opened` : ``;
    const {activeSorting} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={this._toggleSortingList}>
          {activeSorting}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${sortingClassName}`}>
          {SORTING_TYPE.map((it: string) => {
            return (
              <li className="places__option" tabIndex={0} key={`option-${it}`} onClick={() => this._sortingSelect(it)}>{it}</li>
            );
          })}
        </ul>
      </form>
    );
  }

  _toggleSortingList() {
    this.setState({
      isOptionsOpen: !this.state.isOptionsOpen
    });
  }

  _sortingSelect(type: string) {
    const {sortOffers} = this.props;

    this.setState({
      activeSorting: type
    });
    this._toggleSortingList();
    sortOffers(type);
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  sortOffers: (type: string) => {
    dispatch(actionCreators.sortOffers(type));
  }
});

export {Sorting};

export default connect(
    null,
    mapDispatchToProps
)(Sorting);
