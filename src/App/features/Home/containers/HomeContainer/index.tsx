import * as React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/index.native';
import datas from './data';
import { fetchList } from '../../actions';

export interface IState {}
export interface IProps {
  navigation: any;
  fetchList: Function;
  data: any;
}

class HomeContainer extends React.Component<IProps, IState> {
  componentDidMount() {
    this.props.fetchList(datas);
  }
  render() {
    return <Dashboard navigation={this.props.navigation} list={this.props.data} />;
  }
}

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url))
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading
});

export default connect(
  mapStateToProps,
  bindAction
)(HomeContainer);
