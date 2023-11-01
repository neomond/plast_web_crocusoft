import { Typography, InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { memo, useCallback, useState } from "react";
import OurProductsItems from "./OurProductsItems";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Search = memo(function Search() {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    []
  );
  const styles: any = {
    wrapper: {
      pt: isMobile ? "70%" : "12%",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    firstWord: {
      color: "#fff",
      mr: 2,
      mb: 3,
      fontSize: isMobile ? 24 : 44,
      fontWeight: "700",
      textTransform: "uppercase",
    },
    searchContainer: {
      display: "flex",
      alignItems: "center",
      width: isMobile ? "90%" : 550,
      backgroundColor: "#fff",
      borderRadius: "16px",
      mb: 8,
    },
    input: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
      flex: 1,
      p: 1,
      pl: 2,
      maxWidth: "100%",
      width: query ? "80%" : "100%",
    },
    iconButton: {
      p: 1,
      right: 10,
    },
    resultContainer: {
      width: "100%",
      backgroundColor: "#fff",
    },
    searchResultsText: {
      pt: 6,
      pl: 15,
      color: "#090C06",
      fontStyle: "italic",
      opacity: 0.4,
      fontSize: 18,
    },
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.firstWord}>Axtar</Typography>
        <Box sx={styles.searchContainer}>
          <InputBase
            sx={styles.input}
            placeholder="Axtar..."
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={handleChange}
          />
          <IconButton type="submit" sx={styles.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      {query && (
        <Box style={styles.resultContainer}>
          <Typography variant="h6" sx={styles.searchResultsText}>
            “{query}” açar sözü üzrə axtarış nəticələri:
          </Typography>
          <OurProductsItems query={query} />
        </Box>
      )}
    </Box>
  );
});

export default Search;
