import { Box, Typography } from "@mui/material";
import { CardStyle } from "./CardStyle";
const index = ({ selectedLocation }) => {
  return (
    <Box>
      <Typography sx={CardStyle.cardTitle}>
        {selectedLocation.stop_name}
      </Typography>
      <Typography sx={CardStyle.cardText}>
        {selectedLocation.stop_desc}
      </Typography>
      <Typography sx={CardStyle.cardTitle}>Stop Code:</Typography>
      <Typography sx={CardStyle.cardText}>
        {selectedLocation.stop_code}
      </Typography>
      <Typography sx={CardStyle.cardTitle}>Coordinate Info:</Typography>
      <Typography sx={CardStyle.cardText}>
        Lon: {selectedLocation.stop_lon}, Lat: {selectedLocation.stop_lat}
      </Typography>
    </Box>
  );
};

export default index;
