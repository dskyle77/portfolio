import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  IconButton,
} from "@mui/material";

const SideMenu = ({ open, close }) => {
  return (
    <Drawer anchor="left" open={open} onClose={close}>
      <Box p={2} mt={2} width="250px" textAlign="center" role="presentation">
        <Typography variant="h5" component="div">
          Menu
        </Typography>
        <List sx={{ mt: 1, gap: 2, display: "flex", flexDirection: "column" }}>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText primary="Project" />
          </ListItem>
          <ListItem button sx={{ cursor: "pointer" }}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
