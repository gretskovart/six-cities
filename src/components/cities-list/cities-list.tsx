import * as React from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../../reducer/data/data';
import CitiesItem from '../cities-item';
import withActiveItem from '../../hocs/with-active-item';

interface Props {
  activeItem: string;
  changeCity: (city: string) => void;
  citiesList: string[];
  onClick: (city: string) => void;
}

const CitiesList = (props: Props) => {
  const {onClick, activeItem, changeCity, citiesList} = props;

  return citiesList.map((it) => {
    const _onClick = (evt) => {
      evt.preventDefault();
      onClick(it);
      changeCity(it);
    };

    return (
      <CitiesItem
        city={it}
        key={`id-` + it}
        onClick={_onClick}
        isActive={activeItem === it}
      />
    );
  });
};

const mapStateToProps = (state): {activeItem: string, citiesList: string[]} => {
  return {
    activeItem: state.data.activeCity,
    citiesList: state.data.citiesList
  };
};

const mapDispatchToProps = (dispatch): {changeCity: Function} => ({
  changeCity: (city: string) => {
    dispatch(actionCreators.changeCity(city));
  }
});

export {CitiesList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withActiveItem(CitiesList));
