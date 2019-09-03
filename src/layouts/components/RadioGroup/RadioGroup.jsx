// import React, { Component } from 'react';
// import { FootBall } from './../../config/constant';

// class RadioGroup extends Component {
//     constructor(){
//         super();
//         this.state ={
//             radioName: ''
//         };
//         // this.handleOnClick = this.handleOnClick.bind(this);
//     }

//     handleOnClick = (event) => {
//         this.setState({
//             radioName:event.target.value
//         });
//     }
//     render() {
//         const { radioName } =this.state;
//         console.log('your radio btn is ', radioName)
//         return (
//             <div>
//                 <label >
                    
//                    {FootBall.map(field => (
//                        <div key={field.value}>
//                         <input type="radio" value={field.value}
//                         // checked={this.state.radioName}
//                         onClick={this.handleOnClick}
//                         />
//                         {field.value}
//                         </div>
//                    ))}
//                 </label>
//             </div>
//         )
//     }
// }

// export default RadioGroup;
