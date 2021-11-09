import React from 'react';
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <ContentLoader 
        speed={2}
        width={280}
        height={450}
        viewBox="0 0 280 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="137" cy="122" r="121" /> 
        <rect x="-1" y="309" rx="0" ry="0" width="276" height="71" /> 
        <rect x="5" y="399" rx="0" ry="0" width="117" height="24" /> 
        <rect x="141" y="387" rx="0" ry="0" width="131" height="48" /> 
        <rect x="4" y="260" rx="0" ry="0" width="268" height="34" />
      </ContentLoader>
      )
}

export default PizzaLoadingBlock;
