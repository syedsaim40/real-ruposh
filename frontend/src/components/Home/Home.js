import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "../Products/ProductCard";
import MetaData from "../Layout/Metadata";
import { CLEAR_Errors, getProduct } from "../../redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
// import Loader from "./../Layout/Loader/Loader";
import { Link } from "react-router-dom";
// import Loaderr from "../Layout/Loader/Loader";
import Topfooter from "../Layout/Footer/Topfooter";
import Loader1 from "../Layout/Loader/loader1";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// IMAGES FOR MAIN SLIDER OF HOME
import bimg1 from "../../../src/images/bimg1.jpg";
import bimg2 from "../../../src/images/bimg2.jpg";
import bimg4 from "../../../src/images/bimg4.jpg";
import bimg5 from "../../../src/images/bimg5.jpg";
import bimg6 from "../../../src/images/bimg6.jpg";

// IMAGES FOR CATEGORIES SECTION @ HOME
import cimg1 from "../../../src/images/cimg1.jpg";
import cimg2 from "../../../src/images/cimg2.jpg";
import cimg3 from "../../../src/images/cimg3.jpg";
import cimg4 from "../../../src/images/cimg4.jpg";
import "react-multi-carousel/lib/styles.css";
const Home = ({ req }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(CLEAR_Errors);
    }
    dispatch(getProduct());
  }, [alert, dispatch, error]);
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 102 },
      items: 4,
      paritialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 0,
    },
  };
  return (
    <Fragment>
      {/* {loading ? (
        <Loaderr />
      ) : ( */}
      <Fragment>
        <MetaData title="RUPOSH-Brings Tradition Up" />
        <div id="vasl_banner">
          <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
            <Link to="/products">
              <img src={bimg1} className="sliderimg" alt="vasl-banner" />
            </Link>
            <Link to="/products">
              <img src={bimg2} className="sliderimg" alt="vasl-banner" />
            </Link>
            <Link to="/products">
              <img src={bimg4} className="sliderimg" alt="vasl-banner" />
            </Link>
            <Link to="/products">
              <img src={bimg5} className="sliderimg" alt="vasl-banner" />
            </Link>
            <Link to="/products">
              <img src={bimg6} className="sliderimg" alt="vasl-banner" />
            </Link>
          </AliceCarousel>
        </div>

    

        <div className="product_showcase">
          {/* <svg className="vasl_svg" width="100vw" height="100vh">
            <text x="45%" y="55%">VASl</text>
          </svg>
          <svg className="vasl_svg" width="100vw" height="100vh">
            <text x="45%" y="55%">وصل</text>
          </svg> */}
          <div className="section_heading">
            <div className="homeHeading">
              <h2>Trending</h2>
            </div>
          </div>
            
          <div className="product_slider">
          {loading === false &&products ? (
             
            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              className=""
              dotListClass=""
              draggable={false}
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              autoPlay={false}
              autoPlaySpeed={20000}
              /*
              swipeable={false}
              draggable={false}
              */
              responsive={responsive}
              ssr
              containerClass=" container"
              slidesToSlide={3}
              infinite={true}
            >
              {  products&&products
                  .slice(0, 10)
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                    ))}
            </Carousel>

          
                ) : (
                  <div>
        <Loader1 />
        </div>

                )}
      </div>

        
       </div>
        <div className="product_showcase">
          {/* <div className="showcase_desp">
              <div className="desp_holder"><h2>Shop by category</h2></div>
            </div> */}
          {/* <Carousel responsive={responsive} > */}

          <div className="section_heading">
            <div className="homeHeading">
              <h2>DISCOVER MORE</h2>
            </div>
          </div>

          <div className="product_slider">
          {loading === false &&products ? (

    
            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              className=""
              dotListClass=""
              draggable={false}
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              autoPlay={false}
              autoPlaySpeed={20000}
              /*
              swipeable={false}
              draggable={false}
              */
              responsive={responsive}
              ssr
              containerClass=" container"
              slidesToSlide={1}
              infinite={true}
            >
             {  products&&products
                  .slice(5, 11)
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                    ))}
            </Carousel>

               
              ) : (
                <Loader1 />
              )}
          </div>
        </div>
        <div className="product_showcase">
          {/* <div className="showcase_desp">
              <div className="desp_holder"><h2>Shop by category</h2></div>
            </div> */}
          {/* <Carousel responsive={responsive} > */}

          <div className="section_heading">
            <div className="homeHeading">
              <h2>sHOP BY category</h2>
            </div>
          </div>
          <div className="categorized_products">
            <div className="cp_item">
              <Link to="/Newinn">
                <img src={cimg1} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>new Inn</h2>
              </div>
            </div>
            <div className="cp_item">
              <Link to="/womens">
                <img src={cimg2} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>womens</h2>
              </div>
            </div>
            <div className="cp_item">
              <Link to="/Accessories">
                <img src={cimg3} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>Accessories</h2>
              </div>
            </div>
            <div className="cp_item">
              <Link to="/RuposhFeatured">
                <img src={cimg4} className="cp_img" alt="category-img" />
                <div className="cp_btn">Shop now</div>
              </Link>
              <div className="cp_desp">
                <h2>Ruposh featured</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="masonary_section">
          <div className="ms_desp">
            <div className="ms_holder">
              <h2>#Ruposh Featured</h2>
              <Link to="/RuposhFeatured">shop now</Link>
            </div>
          </div>
          <div id="mosaic_wrapper">
            <div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
            <div>
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
            <div className="bt_panel">
              <div class="panel"></div>
              <div class="panel"></div>
              <div class="panel"></div>
            </div>
          </div>
        </div>
      </Fragment>

      {/* )} */}

      <Topfooter />
    </Fragment>
  );
};

export default Home;
