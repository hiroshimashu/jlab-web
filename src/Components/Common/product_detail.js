import React from "react";

const ProductDetail = (props) => {
    return (
        <section style = { ...props.wrapperStyle }>
            <p style = { ...props.titleStyle }>
                { props.title }
            </p>
            <p style = { ...props.explainStyle }>
                { props.explain }
            </p>
            <img style = { ...props.imgStyle }/>
        </section>
    )
}

export default ProductDetail;