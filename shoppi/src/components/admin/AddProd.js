import React from 'react'

const AddProd = () => {
    return (
<div class="admin">

        <div className="admin-add">
            <h1>ADD DETAILS</h1>


            <h2>Product ID</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product ID"
            name = "p_ID"
                        /> 
             

<br />
<h2>Product Name</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product Name"
            name = "p_naem"
                        /> 
<br />

<h2>Product Price</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product Price"
            name = "p_price"
                        /> 
<br />

<h2>Product Description</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product Description"
            name = "p_ID"
                        /> 

<br />
<h2>Product Category</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product Category"
            name = "p_ID"
                        /> 

<br />
<h2>Product Type</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product Type"
            name = "p_ID"
                        /> 

<br />
<h2>Product Image</h2>
            <input className="admin-add-inp" 
            type="text"
            placeholder="Enter Product Imgae"
            name = "p_ID"
                        /> 

            <button className="add-btn">Add</button></div>

        </div>
      
    )
}

export default AddProd

