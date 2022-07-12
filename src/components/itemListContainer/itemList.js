import React from 'react'
import Item from './item';

const itemList = ({items}) => {
return (
    <div className="tab-content" id="pills-tabContent" >
        <div className="tab-pane fade show active container" id="pills-profile" role="tabpanel"
            aria-labelledby="pills-profile-tab">
            <div className="mt-4 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" >
                {items.map((product) => {
                    console.log(product)
                    return <Item key={product.id} product={product} />
                })}
            </div>
            
        </div>
    </div>
)
}

export default itemList;