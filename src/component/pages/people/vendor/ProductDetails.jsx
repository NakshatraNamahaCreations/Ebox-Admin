import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { apiUrl } from "../../../../api-services/apiContents";
import ReactPlayer from "react-player";

function ProductDetails() {
  const location = useLocation();
  const product = location.state.prooduct;
  const navigate = useNavigate();
  console.log("prooduct", product);

  return (
    <div
      className="px-3"
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e4e4e4",
        }}
      >
        <div
          className="p-2"
          style={{
            border: "1px solid #e4e4e4",
            cursor: "pointer",
            borderRadius: "7px",
          }}
          onClick={() => navigate(-1)}
        >
          <IoMdArrowBack color="#4b4b4b" />
        </div>
        <div style={{ marginTop: "20px", marginLeft: "12px" }}>
          <div
            style={{ fontSize: "14px", color: "#636870", fontWeight: "500" }}
          >
            Back to vendor
          </div>
          <div
            className="pb-3"
            style={{ color: "black", fontSize: "23px", fontWeight: "bold" }}
          >
            {product.product_name}
          </div>
        </div>
      </div>

      <div className="row ps-4 pb-4">
        <div className="col-md-6">
          <div style={Styles.labelTitle}>Product Details</div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <div>
              <div style={Styles.labelTitleSmall}>Product Name:</div>
              <div className="px-3 py-2" style={Styles.details}>
                {product.product_name}{" "}
              </div>
            </div>
            <div>
              <div style={Styles.labelTitleSmall}>Product Type:</div>
              <div className="px-3 py-2" style={Styles.details}>
                {product.product_type}{" "}
              </div>
            </div>
            <div>
              <div style={Styles.labelTitleSmall}>Product Category:</div>
              <div className="px-3 py-2" style={Styles.details}>
                {product.product_category}{" "}
              </div>
            </div>
          </div>
          <div className="mt-4" style={Styles.labelTitle}>
            General Details
          </div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Model Name:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.model_name}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Brand:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.brand}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Material Type:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.material_type}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Product Color:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.product_color ? product.product_color : "NA"}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Warrenty Type:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.warranty ? product.warranty : "NA"}{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4" style={Styles.labelTitle}>
            Manufacturing
          </div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <div>
              <div style={Styles.labelTitleSmall}>Manufacuturer:</div>
              <div className="px-3 py-2" style={Styles.details}>
                {product.manufacturer_name ? product.manufacturer_name : "NA"}{" "}
              </div>
            </div>
            <div>
              <div style={Styles.labelTitleSmall}>Country of Orgin:</div>
              <div className="px-3 py-2" style={Styles.details}>
                {product.country_of_orgin ? product.country_of_orgin : "NA"}{" "}
              </div>
            </div>
          </div>
          <div className="mt-4" style={Styles.labelTitle}>
            Specifications
          </div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            {product.Specifications.map((ele, index) => (
              <div key={index}>
                <div style={Styles.labelTitleSmall}>{ele.name} </div>
                <div className="px-3 py-2" style={Styles.details}>
                  {ele.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div style={Styles.labelTitle}>Product Images</div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <div className="row">
              {product.product_image &&
                product.product_image.map((image, index) => (
                  <div key={index} className="col-md-4 mb-2">
                    <img
                      src={`${apiUrl.IMAGEURL}${image}`}
                      alt="product image"
                      style={{ width: "80%", height: "100px" }}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div style={Styles.labelTitle}>Product Video</div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <ReactPlayer
              url={`${apiUrl.IMAGEURL}${product.product_video}`}
              width={460}
              height={223}
              controls={true}
            />
          </div>
          <div className="mt-4" style={Styles.labelTitle}>
            Measurements
          </div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Item Weight:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.product_weight}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Dimension:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.product_dimension}{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4" style={Styles.labelTitle}>
            Pricing
          </div>
          <div
            className="py-2 px-3 mt-1"
            style={{ border: "1px solid #e4e4e4", borderRadius: "7px" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Price:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  ₹ {product.product_price}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>MRP Rate:</div>
                <div className="px-3 py-2" style={Styles.details}>
                  ₹ {product.mrp_rate}{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Discount</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.discount}%{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div style={Styles.labelTitleSmall}>Warranty</div>
                <div className="px-3 py-2" style={Styles.details}>
                  {product.warranty ? product.warranty : "NA"}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "#90e447",
            border: "#7ac536",
            color: "white",
            borderRadius: "3px",
            fontSize: "17px",
            fontWeight: "500",
            padding: "5px 10px",
          }}
        >
          Approve Product
        </button>
      </div>
    </div>
  );
}
const Styles = {
  labelTitle: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
    marginTop: "12px",
  },
  labelTitleSmall: {
    fontSize: "14px",
    color: "#636870",
    fontWeight: "500",
  },
  details: {
    fontSize: "15px",
    fontWeight: "500",
    margin: "7px 0px",
    border: "1px solid #e4e4e4",
    borderRadius: "7px",
  },
};

export default ProductDetails;
