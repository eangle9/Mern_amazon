import React from "react";
import { Box, Typography, Rating } from "@mui/material";
// import { StarIcon } from "@mui/icons-material";

const Ratings = (props) => {
  const { rating, numReviews } = props;
  return (
    <div style={{ display: "flex", alignItems: "center"}}>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={rating}
          precision={0.5}
          readOnly
        //   emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
      <Typography color="#faaf00">{numReviews} reviews</Typography>
    </div>
  );
};

export default Ratings;
