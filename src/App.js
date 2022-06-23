import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CharacterCard from "./components/CharacterCard";
import protagonists from "./protagonists.json";

import "./App.css";
// import characters from './protagonists.json'

function App() {
  // const [protagonists, setProtagonists] = useState();

  console.log(protagonists);
  const renderCharacterCards = (protagonists) => {
    return protagonists.map((protagonist, i) => (
      <Grid item xs={12} md={4}>
        <CharacterCard
          key={i}
          title={protagonist.title}
          image={protagonist.pic}
          description={protagonist.description}
        />
      </Grid>
    ));
  };

  return (
    <div className="App">
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid lightgray" }}
      >
        <Toolbar>
          <Button variant="contained">
            <MenuIcon />
          </Button>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Characters Inc
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => alert("Boop!")}
          >
            Button
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Prevalent Protagonists
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Hmm, seems like we're missing some of the other protagonists.
        </Typography>
      </Container>

      {/* End hero unit */}

      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent={"center"}
          alignItems={"start"}
        >
          {renderCharacterCards(protagonists)}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
