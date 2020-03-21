import React from 'react';
import ReactLoading from 'react-loading';

export const Loader = ({ type='bars', color='#008ABF' }) => {
    const divStyle = {
        display:'flex',
        justifyContent:'center',
        marginTop:'5%'
      };
    return(
    <div style={divStyle}>
	    <ReactLoading type={type} color={color} height={'5%'} width={'5%'} />
    </div>
)
    }