import Grid from '../../components/Grid/Grid'
import React from 'react';
import TopSearchBar from '../../components/TopSearchBar/TopSearchBar';

const Photos = () => (
    <div>
         <TopSearchBar label = "Your Photos"/>
         <Grid/>
    </div>
  );
  
  export default Photos;