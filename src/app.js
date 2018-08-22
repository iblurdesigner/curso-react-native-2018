// LIBRERIAS
import React, {Component} from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

//COMPONENTES
import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/suggestions-list';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie';

class AppLayout extends Component {
  async componentDidMount(){
    const categoryList = await API.getMovies();
    // console.log(movies);
    // console.log(categories);
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categories
    // })
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render(){
    if(this.props.selectedMovie){
      return <Movie/>
    }
    return(
      <Home>
        <Header>
          <Text>Hola wey!</Text>
        </Header>
        <Text>Buscador</Text>
        <CategoryList/>
        <SuggestionList/>
      </Home>
    )
  }
}

function mapStateToProps(state){
  return{
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout);
