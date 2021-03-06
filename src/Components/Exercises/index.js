import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ excercies }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {excercies.map(([group, excercises]) => (
          <Fragment>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul">
              {excercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="h3">Welcome:</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Please select an excercise from the list on the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
