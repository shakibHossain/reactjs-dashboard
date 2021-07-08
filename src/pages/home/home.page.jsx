import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Menu from "../../components/menu/menu.component";
import OverviewCard from "../../components/overview-card/overview-card.component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden",
  },
  container: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  },
  footer: {
    position: "fixed",
    bottom: 0,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Menu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={3} className={classes.container}>
          {/* Oveview Cards */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper>
              <OverviewCard type="Users" value={5} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper>
              <OverviewCard type="Employees" value={15} />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default HomePage;
