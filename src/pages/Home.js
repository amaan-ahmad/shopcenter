// home page
import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Tabs from "../components/Nav/Tabs";
import { HomeHeader } from "../components/Nav/Headers";
import {
  ProductCaption,
  ProductCard,
  ProductImage,
  ProductPrice,
} from "../components/Styles/ProductCardStyle";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../graphql/queries";

// const dummyImg = [
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1589077/2016/10/14/11476429946471-naughty-ninos-Girls-Coats-4921476429946326-1.jpg",
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1663701/2016/11/30/11480500332076-Texco-Women-Coats-3261480500331642-1.jpg",
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1634558/2016/11/14/11479108525554-naughty-ninos-Girls-Coats-4801479108525377-1.jpg",
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2091901/2017/9/1/11504245803937-Belle-Fille-Women-Coats-421504245803768-2.jpg",
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6996804/2018/7/23/93e98456-b6e9-4df7-a0b7-68fe83070c4e1532339060342-Campus-Sutra-Full-Sleeve-Solid-Men-Jacket-4121532339060152-1.jpg",
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2117201/2018/12/11/0b74fa86-9478-4adc-855b-32e011ffcb281544527252333-Campus-Sutra-Men-Blue-Solid-Hooded-Sweatshirt-18715445272509-1.jpg",
// ];

// const products = [
//   {
//     img: `${dummyImg[Math.floor(Math.random() * dummyImg.length)]}`,
//     name: `${faker.commerce.productName()}`,
//     price: `${faker.commerce.price()}`,
//     category: `${faker.commerce.department()}`,
//   },
// ];

// function populateProducts() {
//   let n = -1;
//   while (++n < 19) {
//     products.push({
//       img: `${dummyImg[Math.floor(Math.random() * dummyImg.length)]}`,
//       name: `${faker.commerce.productName()}`,
//       price: `${faker.commerce.price()}`,
//       category: `${faker.commerce.department()}`,
//     });
//   }
//   console.log(products);
// }
// populateProducts();

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  if (error) console.error(error);
  if (!loading) console.log(data.all_products);
  return (
    <>
      <Tabs />
      <HomeHeader />
      <Grid
        container
        direction="row"
        style={{
          overflow: "auto",
          height: "-webkit-fill-available",
          paddingBottom: "4em",
        }}
      >
        {loading
          ? "Loading..."
          : data.all_products.map((item) => {
              return (
                <>
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    style={{ border: `1px solid #14131308` }}
                    key={item.id}
                  >
                    <Link
                      to={{
                        pathname: `/product/${item.category.name}/${item.slug}`,
                        state: { product: item },
                      }}
                    >
                      <ProductCard>
                        <ProductImage src={item.photo}></ProductImage>
                        <ProductPrice>&#x20B9; {item.price}</ProductPrice>
                        <ProductCaption>{item.name}</ProductCaption>
                      </ProductCard>
                    </Link>
                  </Grid>
                </>
              );
            })}
      </Grid>
    </>
  );
}
