import React from "react";

import Grid from "@material-ui/core/Grid";

function Movies() {
  return (
    <div className="homePageContent">
      <div className="promoBar">Upcoming Movies</div>
      <div className="upcomingMovieList">
        <Grid container className="movielist" spacing={3}>
          <Grid item xs={2}>
            movie 1
          </Grid>
          <Grid item xs={2}>
            movie 2
          </Grid>
          <Grid item xs={2}>
            movie 3
          </Grid>
          <Grid item xs={2}>
            movie 4
          </Grid>
          <Grid item xs={2}>
           movie 5
          </Grid>
          <Grid item xs={2}>
            movie 6
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Movies;