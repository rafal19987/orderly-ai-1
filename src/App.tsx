import { Grid, GridItem, Show } from "@chakra-ui/react";
import Footer from "./Components/footer/Footer";

import Navbar from "./Components/Navbar";
import { Breadcrumb } from "./Components/Breadcrumb";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "hero" "footer"`,
        lg: `"nav nav" "aside hero" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      sx={{
        maxWidth: "1170px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <GridItem area="nav" height="120px" display="flex">
        <Navbar />
      </GridItem>
      <GridItem
        area="hero"
        bg="blue"
        minHeight="100vw"
        maxHeight="100%"
        bgColor={"#0A192F"}
      >
        <Breadcrumb />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          bg="gold"
          sx={{ display: { base: "none", lg: "block" } }}
        >
          Aside
        </GridItem>
      </Show>
      <GridItem area="footer" bg="red" height="120px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
