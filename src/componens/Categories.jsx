import React, { useState } from 'react';

// class Categories extends React.Component {
//     state = {
//         activeItem: 0,
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         });
//     }
    
//     render() {
//         const {items} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     {items.map( (item,index) => (
//                         <li 
//                             className={this.state.activeItem === index ? 'active' : ''} 
//                             onClick={()=>{this.onSelectItem(index)}} 
//                             key={`${item}_${index}`}
//                         >
//                         {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

function Categories({items}) {
    const [count, setCount] = useState(null);
    return (
        <div className="categories">
                <ul>
                    <li 
                        onClick={()=>{setCount(null)}} 
                        className={count === null ? 'active' : ''}
                    >
                        Все
                    </li>
                    {items && items.map( (item,index) => (
                        <li 
                            className={count === index ? 'active' : ''} 
                            onClick={()=>{setCount(index)}} 
                            key={`${item}_${index}`}
                        >
                            {item}
                        </li>
                    ))}
              </ul>
            </div>
    );
}

export default Categories;
