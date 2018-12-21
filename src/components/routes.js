import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'
import ResFilter from '../pages/ResFilter'

const createRoutes = () => (
    <Router>
      <Route exact path="/filter" component={ResFilter}/>

    </Router>
);

export default createRoutes;

