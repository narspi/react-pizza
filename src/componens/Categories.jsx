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

const Categories = React.memo(function Categories({items, onClickItem}) {

    const [count, setCount] = useState(null);

    const onSelectItem = (index) => {
        setCount(index);
        onClickItem(index);
    }
    


    return (
        <div class="categories">
                <ul>
                    <li 
                        onClick={()=>{onSelectItem(null)}} 
                        className={count === null ? 'active' : ''}
                    >
                        Все
                    </li>
                    {items && items.map( (item,index) => (
                        <li 
                            className={count === index ? 'active' : ''} 
                            onClick={()=>{onSelectItem(index)}} 
                            key={`${item}_${index}`}
                        >
                            {item}
                        </li>
                    ))}
              </ul>
            </div>
    );
})

export default Categories;


