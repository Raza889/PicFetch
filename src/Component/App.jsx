import React from 'react';

import { bindActionCreators } from "redux";
import ActionCreators from "../actions";
import { connect } from "react-redux";
import env from 'react-dotenv'

import SearchBar from './SearchBar';
import Unsplash from '../Api/UnSplash';
import google from '../Api/google.jsx';
import ImagesList from './Imageslist';

class App extends React.Component {
  state = {
    images: [],
  }
  onFormSubmin = async (term) => {
    let response = await Unsplash.get('https://api.unsplash.com/search/photos',
      {
        params: {
          query: term
        },

      });
    const unsplashData = response.data && response.data.results.map(image => ({
      id: image.id,
      height: image.height,
      width: image.width,
      description: image.description,
      urls: image.urls,
    }));
    response = await google.get('https://www.googleapis.com/customsearch/v1',
      {
        params: {
          key: env.GOOGLE_KEY,
          cx: env.GOOGLE_CX,
          q: term,
          searchType: 'image'
        },

      });
    const googleData = response.data.items ? response.data.items.map(item => ({
      id: item.title,
      height: item.image.height,
      width: item.image.width,
      description: item.title,
      urls: { regular: item.link },
    })) : [];
    this.setState({
      images: [...unsplashData, ...googleData],
    });
  }
  render() {
    const { getDashBoradData } = this.props
    return (
      <div className='ui container ' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={getDashBoradData} />
        {this.props.dashboard &&
          <ImagesList images={this.props.dashboard} />
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard.dashBoardData
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);