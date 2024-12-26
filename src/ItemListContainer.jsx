import React from "react";

const ItemListContainer = ({ saudacao }) => {
    return (
        <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f4f4f4", marginTop: "20px" }}>
            <h2>{saudacao}</h2>
        </div>
    );
};

export default ItemListContainer;
