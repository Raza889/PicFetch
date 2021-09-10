import * as types from "./types";
import env from 'react-dotenv';
import Unsplash from '../Api/UnSplash';
import google from '../Api/google'

function setDashBoradData(dashBoardData) {
  return {
    type: types.DASHBOARD_DATA,
    dashBoardData,
  };
}

export const getDashBoradData = (term) => {
  return async (dispatch) => {
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
    dispatch(setDashBoradData([...unsplashData, ...googleData]));
  }
};
