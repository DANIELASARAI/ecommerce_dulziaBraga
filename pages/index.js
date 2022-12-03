import React from "react";
import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import { Small, H2, H6 } from "../components/Typography";

import { TabContext, TabList } from "@mui/lab";
import { Box, Grid, styled, Tab } from "@mui/material";
import FlexBox from "../components/flexbox/FlexBox";
import { useState } from "react";
import category from "../sanity_dulzia/schemas/category";
const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .MuiTabs-flexContainer .MuiButtonBase-root": {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderBottom: "2px solid",
    borderColor: theme.palette.divider,
  },
  "& .MuiTabs-flexContainer .Mui-selected": {
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down(1064)]: {
    maxWidth: 600,
  },
  [theme.breakpoints.between(700, 838)]: {
    maxWidth: 475,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 320,
  },
}));

const Home = ({ products, bannerData, footerData, categories }) => {
  const categoryRef = products?.map((prod) => {
    return prod.category ? prod.category._ref : null;
  });

  const [filteredItem, setFilteredItem] = useState(products);
  const [catRef, setCatRef] = useState(categoryRef);

  /////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////

  const [value, setValue] = useState("2b0da733-5aa7-4752-9555-fba5d9b55719");

  //////////////////////////////////////////////////////////////////////
  const filterList = filteredItem.filter(
    (item) =>
      value === "2b0da733-5aa7-4752-9555-fba5d9b55719" ||
      item.category._ref === catRef
  );

  const handleChange = (_, newValue) => {
    setValue(newValue);

    setCatRef(newValue);
  };
  /*   const handleClick = (_, cuant) => {
    setQuantity(cuant);
    console.log(cuant);
  }; */

  const sortedCategories = categories.reduce((acc, element) => {
    if (element.title === "todas") {
      return [element, ...acc];
    }
    return [...acc, element];
  }, []);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <H2>Productos por Categorias</H2>
        <Box pt={2} pb={4}>
          <TabContext value={value}>
            <StyledTabList
              variant="scrollable"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              {sortedCategories.map((item) => (
                <Tab
                  disableRipple
                  key={item._id}
                  value={item._id}
                  label={
                    <FlexBox gap={1} alignItems="center">
                      {/*  <Small
                        sx={{
                          backgroundColor: "divider",
                          padding: "0px 10px",
                          borderRadius: "10px",
                        }}
                      >
                        {value}
                      </Small> */}
                      <H6 fontSize={12}>{item.title}</H6>
                    </FlexBox>
                  }
                />
              ))}
            </StyledTabList>
          </TabContext>
        </Box>
      </div>

      <div className="products-container">
        {filterList.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>

      <FooterBanner footerBanner={footerData && footerData[0]} />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const categoryQuery = groq`*[_type=="category"]{
    _id,
    ...
  }`;
  const categories = await client.fetch(categoryQuery);
  const bannerQuery = '*[_type == "banner"]';
  const footerQuery = '*[_type == "footer"]';
  const bannerData = await client.fetch(bannerQuery);
  const footerData = await client.fetch(footerQuery);

  return {
    props: { products, bannerData, footerData, categories },
  };
};

export default Home;
