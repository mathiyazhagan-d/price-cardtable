import { Box, Grid } from "@mui/material";
import CardDetails from "./component/CardDetails";

let dataCard = [
  { pack: "FREE", price: 0, user: "Single User", storage: "5GB Storage" },
  {
    pack: "PLUS",
    price: 9,
    user: "5 Users",
    storage: "50GB Storage",
  },
  {
    pack: "FREE",
    price: 49,
    user: "Unlimited Users",
    storage: "150GB Storage",
  },
  {
    pack: "rect",
    price: 9,
    user: "Unlimited Users",
    storage: "150GB Storage",
  },
  {
    pack: "FEE",
    price: 4,
    user: "Unlimited Users",
    storage: "150GB Storage",
  },
];

function App() {
  return (
    <>
      <Box color="primary">
        <Grid container color="primary" justifyContent="space-evenly">
          {dataCard.map((e,index) => (
            <CardDetails key={index} name={e} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default App;
