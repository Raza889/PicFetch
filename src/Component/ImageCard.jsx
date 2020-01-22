import React from 'react';

class ImageCard extends React.Component {
    state = {
        span: 0,
    }
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ span: spans })
    }
    render() {
        const { urls, description } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                <a href={urls.regular} target="_blank">
                    <img
                        src={urls.regular}
                        alt={description}
                        ref={this.imageRef}
                    />
                </a>
            </div>
        )
    }
}
export default ImageCard;