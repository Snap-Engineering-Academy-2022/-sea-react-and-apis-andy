import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CharacterCard({ title, image, description }) {

  const renderDescription = (desc) => {
    return desc.map((line, i) => (
      <Typography component="li" key={i}>
        {line}
      </Typography>
    ));
  };

  return (
    <Card>
      <CardMedia component="img" height="350px" image={image} />
      <CardHeader
        title={title}
        titleTypographyProps={{ align: "center" }}
        sx={{ mt: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <ul>
          {renderDescription(description)}
        </ul>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ px: 6, mx: "auto" }}
          className="characterButton"
        >
          Vote
        </Button>
      </CardActions>
    </Card>
  );
}
