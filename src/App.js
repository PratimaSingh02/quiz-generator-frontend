import CustomButton from "./components/CustomButton";
import CustomTextField from "./components/CustomTextField";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";
import Topbar from "./components/Topbar";
import Recommendation from "./components/Recommendation";
import { Box } from "@mui/material";


function App() {
  return (
    <Box  >
      <Topbar />

      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CustomTextField />
        <CustomButton />
      </Box>

      <Box
        sx={{
          borderTop: "1px solid grey",
          marginTop: 5,
          height: "60vh",
          display: "flex"
        }}
      >
        <Summary />
        <Quiz />
        <Recommendation />
      </Box>
    </Box>
  );
}

export default App;
