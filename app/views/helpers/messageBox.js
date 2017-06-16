import React, { PropTypes, Component } from "react";
import { connect } from 'react-redux';

class MessageBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3 style={{textAlign:'center'}}>Contact me:</h3>
                <input style={{width:'60%', position:'relative',display:'block', margin:'0 auto'}} type='text' placeholder='title' />
                <textarea style={{width:'60%', position:'relative',height:'100px',display:'block', margin:'0 auto'}}/>
                <input style={{width:'100px', position:'relative', margin:'0 auto',display:'block'}} type='button'value='send'/>
            </div>
        );
    }
}

MessageBox.propTypes = {
}

export default MessageBox
