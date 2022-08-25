import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors, createProduct } from "../../redux/action/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../Layout/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import PaletteIcon from '@mui/icons-material/Palette';
import StraightenIcon from '@mui/icons-material/Straighten';
import { NEW_PRODUCT_RESET } from "../../redux/constant/productConstants";
// import Loader from "./../Layout/Loader/Loader";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [shortname, setshortname] = useState("");
  const [shortdescription, setshortdescription] = useState("");
  const [shortdetail, setshortdetail] = useState("");
  const [shortcolor, setshortcolor] = useState("");
  const [shortsize, setshortsize] = useState("");
  const [fakeprice, setfakePrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [cateogery, setcateogery] = useState("");
  const [color, setcolor] = useState([]);
  const [size, setsize] = useState([]);
  const [stock, setstock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Womens",
    "Newinn",
    "Accessories",
    "Unstiched",
    "ReadyToWear",
    "RuposhFeatured",
    "Kurtas",
    "Tracksuits",
    "Bags",
    "Scarves",
    "Perfumes",
    "Abayas",
    "Cosmetics",
  ];
  const colorlist1 = [
    "Avalanche Blue",
    "Blue",
    "Black",
    "Black",
    "Brown",
    "Bronze",
    "Burnt Orange",
    "Cardinal",
    "Columbia",
    "Cyan",
    "Cream"
  ];
  const colorlist2 = [
    "Co. Burgundy",
    "Dark Green",
    "Dolphin",
    "Dk. Royal",
    "Devil Red",
    "Deep Royal",
    "Emerald",
    "Eggplant",
    "Eagle Gray",
    "Gold",
    "Gray"
  ];
  const colorlist3 = [
    "Hot Pink",
    "Kelly",
    "Light Maroon",
    "Lilac",
    "Lime",
    "Lime/Yellow",
    "Maroon",
    "Mid Blue",
    "Maize",
    "Midnight Green",
    "Midnight Navy"
  ];
  const colorlist4 = [
    "Metallic Gold",
    "Metallic Silver",
    "Navy",
    "Orange",
    "Old Gold",
    "Purple",
    "Pink",
    "Red",
    "Royal",
    "Raven Gold",
    "Silver"
  ];
  const colorlist5 = [
    "Steel Gray",
    "Shark Teal",
    "Tan",
    "Texas Orange",
    "Tenn. Orange",
    "Turquoise",
    "Teal",
    "49er Burgundy",
    "Vegas Gold",
    "Yellow"
  ];
  const sizelist = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors());
    }

    if (success) {
      alert.success("Product Created Successfully");
       history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("shortname", shortname);
    myForm.set("shortdescription", shortdescription);
    myForm.set("shortdetail", shortdetail);
    myForm.set("shortcolor", shortcolor);
    myForm.set("shortsize", shortsize);
    myForm.set("fakeprice", fakeprice);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("cateogery", cateogery);
    myForm.set("color", color);
    myForm.set("size", size);
    myForm.set("stock", stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    // const value = Object.fromEntries(myForm.entries());
    // value.topics = myForm.getAll("topics");

    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  // Add/Remove checked item from list
  const handleCheckcolor = (event) => {
    var updatedList = [...color];

    if (event.target.checked) {
      updatedList = [...color, event.target.value];
    } else {
      updatedList.splice(color.indexOf(event.target.value), 1);
    }
    setcolor(updatedList);
  };
  // Add/Remove checked item from list
  const handleChecksize = (event) => {
    var updatedList = [...size];

    if (event.target.checked) {
      updatedList = [...size, event.target.value];
    } else {
      updatedList.splice(size.indexOf(event.target.value), 1);
    }
    setsize(updatedList);
  };
  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>
            {/* {loading === true ? <Loader /> : null} */}
  
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Original Price"
                required
                onChange={(e) => setfakePrice(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Discount Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Short Name"
                required
                value={shortname}
                onChange={(e) => setshortname(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Product Short Description"
                value={shortdescription}
                onChange={(e) => setshortdescription(e.target.value)}
                
                cols="30"
                rows="1"
           
              ></textarea>
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Product Short Details"
                value={shortdetail}
                onChange={(e) => setshortdetail(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            
            <div>
              <PaletteIcon />
              <input
                type="text"
                placeholder="Product Specific Color"
                required
                value={shortcolor}
                onChange={(e) => setshortcolor(e.target.value)}
              />
            </div>

            <div>
              <StraightenIcon />
              <textarea
                placeholder="Product Size & Fit"
                value={shortsize}
                onChange={(e) => setshortsize(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setcateogery(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setstock(e.target.value)}
              />
            </div>
            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>
            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>


            <div className="colorSelField">
              <h3>Select Colors Here!</h3>
              <div className="colorPallete_Holder">
                <div className="colorPallete">
                  {colorlist1.map((item, index) => (
                    <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheckcolor} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="colorPallete">
                  {colorlist2.map((item, index) => (
                    <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheckcolor} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="colorPallete">
                  {colorlist3.map((item, index) => (
                    <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheckcolor} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="colorPallete">
                  {colorlist4.map((item, index) => (
                    <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheckcolor} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="colorPallete">
                  {colorlist5.map((item, index) => (
                    <div key={index}>
                      <input value={item} type="checkbox" onChange={handleCheckcolor} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sizeSelField">
              <h3>Select Size Here!</h3>
              <div className="sizeSelectOpt">
                {sizelist.map((item, index) => (
                  <div key={index}>
                    <input value={item} type="checkbox" onChange={handleChecksize} />
                    <span>{item}</span>

                  </div>
                ))}
              </div>
            </div>



            


            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
