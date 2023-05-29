import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { Carousel } from 'react-bootstrap';
// import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
 <Container fluid className="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-12">
          <Carousel>
            <Carousel.Item>
              <div className="main-banner position-relative">
                <img
                  src="https://img.freepik.com/free-psd/most-delicious-eggs-city-banner-template_23-2148725533.jpg?w=1060&t=st=1685354343~exp=1685354943~hmac=1e9f24b3de7234d18726e7cc356da4db370bcc90ac45a2d3b607d982cfac6000"
                  className="img-fluid rounded-3 w-100"
                  alt="main banner"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="main-banner position-relative">
                <img
                  src="https://img.freepik.com/free-vector/bio-healthy-food-banner-template_23-2148798818.jpg?w=996&t=st=1685354410~exp=1685355010~hmac=893b35e516685ddfbfd0436e208a85e9e16d70a7016f8b65313cafd921244b63"
                  className="img-fluid rounded-3 w-100"
                  alt="main banner"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Container>

    <Container className="home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
            <div className="d-flex gap align-items-center">
              <div>
                <h5>One day Fresh</h5>
                
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r2Gtyl9pJ-q2yQ9-Iqus5_MTQdY3OnleSA&usqp=CAU" style={{height:"120px"}}/>
            </div>
            <div className="d-flex gap align-items-center">
              <div>
                <h5>Passes 11 Saftey checks </h5>
                
              </div>
              <img src="https://www.pngitem.com/pimgs/m/55-553906_check-mark-yellow-clipart-png-download-checkmark-icon.png" alt="Saftey" style={{height:"120px"}}/>
            </div>
            <div className="d-flex gap align-items-center">
              <div>
                <h5>Laid by Hens on Herbal Feed</h5>
              
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiHBIkr0aL2ECNtncYVlLH04dFz3G-mxOQZmq3dWOZB3tFXHDnq3fJ5NrGgQDbzZhadQ&usqp=CAU" alt="Feed" style={{height:"120px"}}/>
            </div>
            
            </div>
        </div>
      </div>
    </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Products </h3>
          </div>
          <ProductCard />
          <ProductCard />
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
        </div>
      </Container>

      {/* <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPsFwi3zmdPjPYe2Dd8kxIelE_VBGAdlVEw&usqp=CAU" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW135vZpP2_7rthk3AE0A7u-34uLo5cfFkHg&usqp=CAU" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCgmxdrPmt9_UZVJQW4TbDyRR39OVa378SA&usqp=CAU" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW135vZpP2_7rthk3AE0A7u-34uLo5cfFkHg&usqp=CAU" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCgmxdrPmt9_UZVJQW4TbDyRR39OVa378SA&usqp=CAU" alt="brand" />
                </div>
    
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default Home;
