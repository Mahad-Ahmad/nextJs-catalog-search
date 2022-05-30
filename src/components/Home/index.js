import React, { useEffect, useState } from "react";
import ProductCard from "../core/Card";
import { Box, Switch, Grid, Slider, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchInput } from "../../store/searchInput/searchInputSlice";
import { selectSearchBoolean } from "../../store/searchBoolean/searchBooleanSlice";
import { selectSearchRange } from "../../store/searchRange/searchRangeSlice";
// import { dummyData } from "../../../pages/api/dummyBackendData";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { apiKey } from "../../config/apiKey";

export default function Home({ data }) {
  const _searchRange = useSelector(selectSearchRange);
  // console.log(_searchRange);
  const _searchBoolean = useSelector(selectSearchBoolean);
  const [backendData, setBackendData] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const _searchInput = useSelector(selectSearchInput);

  useEffect(() => {
    // setFiltered(filterList());
    setHasMore(6 > backendData.length ? true : false);
  });

  const filteredData = () => {
    if (_searchInput && _searchRange && _searchBoolean) {
      return backendData.filter(
        (data) =>
          data.title.toLowerCase().includes(_searchInput.toLowerCase()) &&
          data.price >= _searchRange[0] &&
          data.price <= _searchRange[1] &&
          data.completed == _searchBoolean
      );
    } else if (_searchInput && _searchRange) {
      return backendData.filter(
        (data) =>
          data.title.toLowerCase().includes(_searchInput.toLowerCase()) &&
          data.price >= _searchRange[0] &&
          data.price <= _searchRange[1]
      );
    } else if (_searchInput && _searchBoolean) {
      return backendData.filter(
        (data) =>
          data.title.toLowerCase().includes(_searchInput.toLowerCase()) &&
          data.completed == _searchBoolean
      );
    } else if (_searchRange && _searchBoolean) {
      return backendData.filter(
        (data) =>
          data.price >= _searchRange[0] &&
          data.price <= _searchRange[1] &&
          data.completed == _searchBoolean
      );
    } else if (_searchInput) {
      return backendData.filter((data) =>
        data.title.toLowerCase().includes(_searchInput.toLowerCase())
      );
    } else if (_searchRange) {
      return backendData.filter(
        (data) => data.price >= _searchRange[0] && data.price <= _searchRange[1]
      );
    } else if (_searchBoolean) {
      return backendData.filter((data) => data.inkStock == _searchBoolean);
    } else {
      return backendData;
    }
  };

  const getMoreData = async () => {
    const res = await fetch(`${apiKey}?_start=${backendData.length}&_limit=3`);
    const newData = await res.json();
    setBackendData((backendData) => [...backendData, ...newData]);
  };

  return (
    <div sx={{ textAlign: "center" }}>
      <Box
        textAlign="center"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 70px",
        }}
      >
        <InfiniteScroll
          dataLength={backendData.length} //This is important field to render the next data
          next={getMoreData}
          loader={
            <Typography
              sx={{ my: 5 }}
              component="div"
              variant="h4"
              color="text.primary"
              align="center"
            >
              Loading...
            </Typography>
          }
          hasMore={hasMore}
          endMessage={
            <Typography
              sx={{ my: 5 }}
              component="div"
              variant="h4"
              color="text.primary"
              align="center"
            >
              You have seen it all
            </Typography>
          }
          scrollableTarget="scrollableDiv"
        >
          {filteredData().map((item, index) => {
            return (
              <Link href={"homeCard/" + item.id}>
                <div key={item.id}>
                  <ProductCard
                    kid={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    photo={item.photo}
                    title={item.title}
                  />
                </div>
              </Link>
            );
          })}
        </InfiniteScroll>
      </Grid>
    </div>
  );
}
