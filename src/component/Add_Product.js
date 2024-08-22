import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import {
  categorySound,
  categoryLightings,
  categoryVideo,
  categoryGenSet,
} from "../global-data/global-data";
import axios from "axios";

function Add_Product() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryVideos, setGalleryVideos] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [mrpRate, setMrpRate] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [stockInHand, setStockInHand] = useState("");
  const [modelName, setModelName] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [productDimension, setProductDimension] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [manufactureName, setManufactureName] = useState("");
  const [color, setColor] = useState("");
  const [warranty, setWarranty] = useState("");
  const categories = [
    { type: "Sound" },
    { type: "Lighting" },
    { type: "Video" },
    { type: "Fabrication" },
    { type: "Genset" },
    { type: "shamiana" },
  ];

  const [addItems, setAddItems] = useState([
    { selectItem: "", ItemSpecification: "" },
  ]);

  const addSpecifications = () => {
    const newBoard = { selectItem: "", ItemSpecification: "" };
    setAddItems((prevBoards) => [...prevBoards, newBoard]);
  };

  const handleSelectItemChange = (index, label) => {
    const updatedItems = [...addItems];
    updatedItems[index].selectItem = label;
    setAddItems(updatedItems);
  };

  const handleSpecificationChange = (index, value) => {
    const updatedItems = [...addItems];
    updatedItems[index].ItemSpecification = value;
    setAddItems(updatedItems);
  };

  const handleDocumentUpload = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === "image") {
      setGalleryImages(files);
    } else if (type === "video") {
      setGalleryVideos(files);
    }
  };
  console.log("galleryImages", galleryImages);

  const addProduct = async () => {
    // Basic validation to check if all required fields are filled
    if (
      !productName ||
      !productPrice ||
      !mrpRate ||
      !selectedCategory ||
      !productBrand ||
      !stockInHand ||
      !modelName ||
      !materialType ||
      !productDimension ||
      !productWeight ||
      !countryOfOrigin ||
      !manufactureName
      // galleryImages.length === 0 ||
      // !galleryVideos
    ) {
      alert("Error", "Please fill all mandatory fields and add images/videos");
      return;
    }

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("vendor_id", "66b9b275d8c3d839b7d67772");
      formData.append("vendor_name", "Achudhan");
      formData.append("product_type", "sell");
      formData.append("product_name", productName);
      formData.append("product_price", productPrice);
      formData.append("discount", productDiscount);
      formData.append("mrp_rate", mrpRate);
      formData.append("product_category", selectedCategory);
      formData.append("brand", productBrand);
      formData.append("stock_in_hand", stockInHand);
      formData.append("model_name", modelName);
      formData.append("material_type", materialType);
      formData.append("product_dimension", productDimension);
      formData.append("product_weight", productWeight);
      formData.append("country_of_orgin", countryOfOrigin);
      formData.append("manufacture_name", manufactureName);
      formData.append("product_color", color);
      formData.append(
        "Specifications",
        JSON.stringify(
          addItems.map((item) => ({
            name: item.selectItem,
            value: item.ItemSpecification,
          }))
        )
      );

      // Append images to FormData
      galleryImages.forEach((file, index) => {
        // formData.append("images", {
        formData.append("images", file, file.name);
        //   uri: uri.uri, // Ensure the image URI is properly formatted
        //   name: `image_${index}.jpg`,
        //   type: "image/jpeg",
        // });
      });

      // Append video to FormData
      if (galleryVideos.length > 0) {
        formData.append("video", galleryVideos[0], galleryVideos[0].name);
        // formData.append("video", {
        //   uri: galleryVideos[0].uri, // Ensure the video URI is properly formatted
        //   name: "video.mp4",
        //   type: "video/mp4",
        // });
      }

      // Axios configuration
      const config = {
        url: "product/addproduct",
        method: "post",
        baseURL: "http://localhost:9000/api/",
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      };

      // Make the API request
      const response = await axios(config);

      // Handle success
      if (response.status === 200) {
        alert(response.data.message);
        console.log("Response:", response.data);
        // Optionally navigate or reset the form
        window.location.reload();
      } else {
        alert("Error", "Error while adding product");
      }
    } catch (error) {
      // Improved error handling
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
          alert(
            "Error",
            error.response.data.message || "Error while adding product"
          );
        } else if (error.request) {
          console.error("Request data:", error.request);
          alert("Error", "No response received from server");
        }
      } else {
        console.error("Unknown error:", error);
        alert("Error", "An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <b> Add Product</b>
      <br />
      Product Image(s){" "}
      <input
        className="mb-1"
        accept="image/jpeg,image/jpg,image/png"
        id="icon-button-file"
        type="file"
        multiple
        onChange={(e) => handleDocumentUpload(e, "image")}
      />{" "}
      <br />
      Product Video(s){" "}
      <input
        className="mb-1"
        accept="video/mp4,video/mkv,video/x-m4v,video/*"
        id="icon-button-file"
        type="file"
        multiple
        onChange={(e) => handleDocumentUpload(e, "video")}
      />
      <br />
      Select Category{" "}
      <select
        className="mb-1"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select</option>
        {categories.map((ele) => (
          <option key={ele.type} value={ele.type}>
            {ele.type}
          </option>
        ))}
      </select>
      <br />
      <input
        className="mb-1"
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="number"
        placeholder="MRP Rate"
        value={mrpRate}
        onChange={(e) => setMrpRate(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="number"
        placeholder="Discount"
        value={productDiscount}
        onChange={(e) => setProductDiscount(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Brand"
        value={productBrand}
        onChange={(e) => setProductBrand(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="number"
        placeholder="Quantity"
        value={stockInHand}
        onChange={(e) => setStockInHand(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Model Name"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Material Type"
        value={materialType}
        onChange={(e) => setMaterialType(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Product dimensions"
        value={productDimension}
        onChange={(e) => setProductDimension(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Product Weight"
        value={productWeight}
        onChange={(e) => setProductWeight(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Country of Origin"
        value={countryOfOrigin}
        onChange={(e) => setCountryOfOrigin(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Manufacturer"
        value={manufactureName}
        onChange={(e) => setManufactureName(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />{" "}
      <input
        className="mb-1"
        type="text"
        placeholder="Warranty"
        value={warranty}
        onChange={(e) => setWarranty(e.target.value)}
      />{" "}
      <br />
      <br />
      Add Specifications <Button onClick={addSpecifications}>+</Button>
      <br />
      <br />
      {selectedCategory === "Sound" ? (
        <>
          {addItems.map((ele, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ flex: 0.6, marginRight: "2px" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {ele.selectItem || "Select a feature"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {categorySound.map((item) => (
                      <Dropdown.Item
                        key={item.value}
                        onClick={() =>
                          handleSelectItemChange(index, item.label)
                        }
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div style={{ flex: 0.4, marginLeft: "2px" }}>
                <input
                  type="text"
                  placeholder="e.g. Wired or wireless"
                  value={ele.ItemSpecification}
                  onChange={(e) =>
                    handleSpecificationChange(index, e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ))}
        </>
      ) : selectedCategory === "Lighting" ? (
        <>
          {addItems.map((ele, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ flex: 0.6, marginRight: "2px" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {ele.selectItem || "Select a feature"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {categoryLightings.map((item) => (
                      <Dropdown.Item
                        key={item.value}
                        onClick={() =>
                          handleSelectItemChange(index, item.label)
                        }
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div style={{ flex: 0.6, marginLeft: "2px" }}>
                <input
                  type="text"
                  placeholder="e.g. RGB or single color"
                  value={ele.ItemSpecification}
                  onChange={(e) =>
                    handleSpecificationChange(index, e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ))}
        </>
      ) : selectedCategory === "Video" ? (
        <>
          {addItems.map((ele, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ flex: 0.6, marginRight: "2px" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {ele.selectItem || "Select a feature"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {categoryVideo.map((item) => (
                      <Dropdown.Item
                        key={item.value}
                        onClick={() =>
                          handleSelectItemChange(index, item.label)
                        }
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div style={{ flex: 0.6, marginLeft: "2px" }}>
                <input
                  type="text"
                  placeholder="e.g. 4K or 1080p"
                  value={ele.ItemSpecification}
                  onChange={(e) =>
                    handleSpecificationChange(index, e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ))}
        </>
      ) : selectedCategory === "Genset" ? (
        <>
          {addItems.map((ele, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ flex: 0.6, marginRight: "2px" }}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {ele.selectItem || "Select a feature"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {categoryGenSet.map((item) => (
                      <Dropdown.Item
                        key={item.value}
                        onClick={() =>
                          handleSelectItemChange(index, item.label)
                        }
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div style={{ flex: 0.6, marginLeft: "2px" }}>
                <input
                  type="text"
                  placeholder="e.g. Power output in kW"
                  value={ele.ItemSpecification}
                  onChange={(e) =>
                    handleSpecificationChange(index, e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ))}
        </>
      ) : null}
      <br />
      <Button onClick={addProduct}>Add Product</Button>
    </div>
  );
}

export default Add_Product;
