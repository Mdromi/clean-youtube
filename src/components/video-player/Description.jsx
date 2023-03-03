import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Notes from "./Notes";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const Description = ({ description }) => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };
  return (
    <Box sx={{ marginTop: 3, marginBottom: 10 }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Description" />
        <Tab label="Notes" />
      </Tabs>
      <Box
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tabValue}
        // onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tabValue} index={0} dir={theme.direction}>
          <Typography sx={{ marginTop: 3 }} variant="p" color="text.primary">
            {description}
          </Typography>
        </TabPanel>
        <Box sx={{ bgcolor: "#E7EBF0", borderRadius: 2 }}>
          <TabPanel value={tabValue} index={1} dir={theme.direction}>
            <Notes />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
