import * as React from "react";
import { CardMedia, Typography, Box } from "@mui/material";

export default function CardHome() {
  return (
    <>
      {" "}
      <Box sx={{ minWidth: "45%", m: 5 }}>
        <Box>
          <Box
            sx={{
              display: { lg: "flex" },
              px: 5,
            }}
          >
            <CardMedia
              sx={{
                width: { lg: "50%" },
                borderRadius: 1,
              }}
              component="img"
              image="/dummy.jpeg"
              alt="green iguana"
            />
            <Box
              sx={{
                pl: { lg: 10 },
                pt: { xs: 5, lg: 0 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <Typography s gutterBottom variant="h4" component="div">
                Name: Samari bookshelf
              </Typography>

              <Typography
                sx={{ mt: 5 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Type: Bookshelves
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Vendor: box + cask
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                price: $3,585.00
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Size: 12x7x8
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Setting: Living room
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ p: 5 }}>
              <Typography variant="h4" component="div" color="text.secondary">
                Description:
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
              <Typography
                sx={{ mt: 5 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Link : https://google.com
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Gross sales: $438
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                price
              </Typography>
              <Typography
                sx={{ mt: 3 }}
                component="div"
                variant="h4"
                color="text.secondary"
              >
                Materials
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
