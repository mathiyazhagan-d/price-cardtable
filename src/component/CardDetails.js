import { Button, Card, CardActionArea, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Clear } from "@mui/icons-material";

const CardDetails = ({ name }) => {
  let card = [
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];
  return (
    <>
      <Grid xs={12} md={6} lg={4}>
        <Box style={{ margin: "30px" }}>
          <CardActionArea>
            <Card
              sx={{ minWidth: 334 }}
              style={{ borderRadius: "1rem", padding: "25px" }}
            >
              <Typography variant="h6" align="center" component="p">
                {name.pack}
              </Typography>
              <Typography variant="h2" align="center" component="p">
                <b>${name.price}</b>
                <span style={{ fontSize: "20px" }}>/month</span>
              </Typography>
              <hr />
              <Typography variant="h5" sx={{ marginTop: "15px" }} component="p">
                <CheckIcon /> {name.price > 0 ? <b>{name.user}</b> : name.user}{" "}
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "15px" }} component="p">
                <CheckIcon /> {name.storage}
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "15px" }} component="p">
                <CheckIcon /> {card[0]}
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "15px" }} component="p">
                <CheckIcon /> {card[1]}
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "15px" }}
                color={name.price > 0 ? "" : "text.secondary"}
                component="p"
              >
                {name.price > 0 ? <CheckIcon /> : <Clear />} {card[2]}
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "15px" }}
                color={name.price > 0 ? "" : "text.secondary"}
                component="p"
              >
                {name.price > 0 ? <CheckIcon /> : <Clear />} {card[3]}
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "15px" }}
                color={name.price > 0 ? "" : "text.secondary"}
                component="p"
              >
                {name.price > 0 ? <CheckIcon /> : <Clear />}
                <b>{name.price <= 0 ? "" : " Unlimited"} </b> {card[4]}
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: "15px" }}
                color={name.price > 9 ? "" : "text.secondary"}
                component="p"
              >
                {name.price > 9 ? <CheckIcon /> : <Clear />}{" "}
                <span>{card[5]}</span>
              </Typography>
              <Box align="center" sx={{ mb: 1.5 }}>
                {" "}
                <Button
                  variant="contained"
                  align="center"
                  sx={{
                    width: "100%",
                    borderRadius: "4rem",
                    marginTop: "15px",
                    padding: 2,
                  }}
                >
                  BUTTON
                </Button>
              </Box>
            </Card>
          </CardActionArea>
        </Box>
      </Grid>
    </>
  );
};
export default CardDetails;
