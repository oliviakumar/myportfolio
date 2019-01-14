import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class ResumeItems extends React.Component {
	render() {
      return <table key={this.props.item.id}>
	      <tbody>
	        <tr>
	          <td>
	            <img alt="pic" width="175" src={this.props.item.pic_src} style={{
	              paddingTop: 8,
	              paddingBottom: 48,
	              paddingLeft: 16
	            }}/>
	          </td>
	          <td>
	            {this.props.item.title}
	            <p> {this.props.item.overview} </p>

	          </td>
			
	        </tr>
	      </tbody>
	      
	    </table>
    }
}
export default ResumeItems;