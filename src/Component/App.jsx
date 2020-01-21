import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../Api/UnSplash';
import ImagesList from './Imageslist';
class App extends React.Component{
    state={
        images:[],
    }
    onFormSubmin = async (term) =>
    {
        const response=await Unsplash.get('https://api.unsplash.com/search/photos',
        {
            params:{
                query:term
            },
            
        });
           this.setState({images:response.data.results});
         
    }
    render(){
    return( 
    <div className='ui container ' style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onFormSubmin} />
        <ImagesList images={this.state.images}/>
    </div>
     )}
}
export default App;