import * as React from "react";

import { H6, Small } from "./Typography";
import { TabContext, TabList } from "@mui/lab";
import { Box, styled, Tab } from "@mui/material";
import FlexBox from "./flexbox/FlexBox";

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

export default function BasicTabs({ categories, products, showProducts }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  //console.log(categories);
  return (
    <Box pt={2} pb={4}>
      <TabContext value={value}>
        <StyledTabList variant="scrollable" onChange={handleChange}>
          {categories.map((item) => (
            <Tab
              disableRipple
              key={item.title}
              value={item.title.split(" ").join("-").toLowerCase()}
              label={
                <FlexBox gap={1} alignItems="center">
                  <H6 fontSize={12}>{item.title}</H6>
                  <Small
                    sx={{
                      backgroundColor: "divider",
                      padding: "0px 10px",
                      borderRadius: "10px",
                    }}
                  ></Small>
                </FlexBox>
              }
            />
          ))}
        </StyledTabList>
      </TabContext>
    </Box>
  );
}
