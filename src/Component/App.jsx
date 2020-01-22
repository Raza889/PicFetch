import React from 'react';
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
        const unsplashData = response.data.results.map(image => ({
            id: image.id,
            height: image.height,
            width: image.width,
            description: image.description,
            urls: image.urls,
        }));
        response = await google.get('https://www.googleapis.com/customsearch/v1',
            {
                params: {
                    key: 'AIzaSyAgWGPWqZQXsPSUT0WRUTxZYzp9_CxrSg0',
                    cx: '016836439242425542395:lfrezsi2kcr',
                    q: term,
                    searchType: 'image'
                },

            });
        const googleData = response.data.items.map(item => ({
            id: item.title,
            height: item.image.height,
            width: item.image.width,
            description: item.title,
            urls: { regular: item.link },
        }));
        this.setState({
            images: [ ...unsplashData, ...googleData],
        })
    }
    render() {
        return (
            <div className='ui container ' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onFormSubmin} />
                <ImagesList images={this.state.images} />
            </div>
        )
    }
}
export default App;