import React from 'react';

class SearchBar extends React.Component
{
    state={
        term:''
    }
    // onInputChange(e)
    // {
    //  this.setState({
    //      term:e.target.value,
    //     }
    //      )   
    // }
    onFormsubmit =(event)=>
    {
       event.preventDefault();
       this.props.onSubmit(this.state.term);
    }
    render()
    {
        return ( 
            <div className='ui segment'>
                <form onSubmit={this.onFormsubmit} className='ui form'>
                <div className="field">
                    <label htmlFor="input">Image Search</label>
                    <input type="text" 
                    className="text"
                    value={this.state.term} 
                    onChange={e => this.setState({term:e.target.value})}/>
                </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;