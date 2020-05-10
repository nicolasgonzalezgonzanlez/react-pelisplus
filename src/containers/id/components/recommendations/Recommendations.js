import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
//material ui
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '../../../card/Card';

function Recommendations() {

  const classes = useStyles();

  const recommen = useSelector(state => state.movieReducer.recommen);

  return (
    <>
      {recommen && (
        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1 className={classes.paper}>¡Tal vez te pueda gustar!</h1>
              </Grid>
              {recommen && recommen.map((element, key)  => (
                <React.Fragment key={key}>
                  {element.backdrop_path && element.title && (
                    <Card 
                      element={{
                        backdrop_path : element.backdrop_path,
                        title: element.title,
                        id: element.id,
                        media_type: element.vote_average,
                        overview: element.overview
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Container>
        </div>    
      )}
    </>
  )
}

Recommendations.propTypes = {
  recommen: PropTypes.array
}

export default Recommendations;
