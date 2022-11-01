import "./styles/GamesSearch.css";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const GamesSearch = (props) => {
  return (
    <div className="div-gamesearch">
      <div className="div-gamesearch-item">
        <FormControl>
          <InputLabel
            id="genre-label"
            sx={{
              color: "#ffffff",
              "&.Mui-focused": {
                color: "#ffffff",
              },
            }}
          >
            Genre
          </InputLabel>
          <Select
            labelId="genre-label"
            id="genre"
            value={props.genre}
            onChange={(event) => props.setGenre(event.target.value)}
            defaultValue="All"
            sx={{
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Action-adventure"}>Action-adventure</MenuItem>
            <MenuItem value={"Sandbox"}>Sandbox</MenuItem>
            <MenuItem value={"Survival"}>Survival</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="div-gamesearch-item">
        <FormControl>
          <InputLabel
            id="sort-label"
            sx={{
              color: "#ffffff",
              "&.Mui-focused": {
                color: "#ffffff",
              },
            }}
          >
            Order by
          </InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={props.order}
            onChange={(event) => props.setOrder(event.target.value)}
            defaultValue="name"
            sx={{
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"releaseYear"}>Release year</MenuItem>
            <MenuItem value={"price"}>Price</MenuItem>
            <MenuItem value={"quantity"}>Quantity in stock</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginLeft: 2 }}>
          <InputLabel
            id="sort-direction-label"
            sx={{
              color: "#ffffff",
              "&.Mui-focused": {
                color: "#ffffff",
              },
            }}
          >
            Direction
          </InputLabel>
          <Select
            labelId="sort-direction-label"
            id="sort-direction-select"
            value={props.orderDirection}
            onChange={(event) => props.setOrderDirection(event.target.value)}
            defaultValue="desc"
            sx={{
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            <MenuItem value={"desc"}>Descending</MenuItem>
            <MenuItem value={"asc"}>Ascending</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default GamesSearch;
