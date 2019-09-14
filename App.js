import React from 'react';
import { 
  Text,
  View,
} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/Suggestions_list';
import Api from './utils/Api'
import CategoryList from './src/videos/containers/Category_list'
import Player from './src/player/containers/Player';

type Props = {};
export default class App extends React.Component<Props> {

  state = {
    suggestionsList: [],
    categoryList: [],
  }

  async componentDidMount() {
    const movies = await Api.getSuggestion(10);
    const categories = await Api.getMovies();
    this.setState({
      suggestionsList: movies,
      categoryList: categories
    });
  }

  render() {
    return(
        <Home>
          <Header/>
          <Player/>
          <Text>Find</Text>
          <CategoryList list={this.state.categoryList}/>
          <SuggestionsList list={this.state.suggestionsList}/>
        </Home>
    );
  }
}