import React from 'react';

class ImageCard extends React.Component{
    state ={
        span:0,
    }
    constructor(props)
    {
        super(props);
        this.imageRef=React.createRef();
    }
    componentDidMount()
    {
       // console.log(this.imageRef);
        this.imageRef.current.addEventListener('load',this.setSpan);
    }
    setSpan= () =>
    {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({span:spans})
        console.log(this.state.span)
    }
render(){
    const {urls,description} = this.props.image;
return (
    <div style={{gridRowEnd:`span ${this.state.span}`}}>
        <img 
        src={urls.regular} 
        alt={description}
        ref={this.imageRef}
        />
    </div>
)
}}
export default ImageCard;