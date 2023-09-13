import { Grid, GridItem, Show } from "@chakra-ui/react";
import Footer from "./components/footer/Footer";


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
      <GridItem area="nav" bg="green" height="120px">
        Nav
      </GridItem>
      <GridItem area="hero" bg="blue" minHeight="100vw" maxHeight="100%">
        Hero
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
     <Footer></Footer>
      </GridItem>
    </Grid>
  );
}

export default App;
