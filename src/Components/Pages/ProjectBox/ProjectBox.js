import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';

import ProjectDetail from '../ProjectDetail/ProjectDetail';


const ProjectBox = ({ data }) => {

    const { img, name, desc } = data;

    const [openDetail, setOpenDetail] = useState(false)

    return (
        
        
            <Grid p={2} item xs={12} md={4}>



<Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#009688', color: '#FFFFFF' }}>

    <Box sx={{ width: '80%', my: '3%' }}>
        <img src={img} style={{ width: '100%' }} alt="" />
    </Box>

    <Typography textAlign="center" variant='h4'>
        {name}
    </Typography>
    <Typography textAlign='justify' display='block' my={2} mx={2} variant='body'>
        {desc.slice(0, 120)}...
    </Typography>
    <Button onClick={() => setOpenDetail(true)}  variant='outlined' sx={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
        View Detail
    </Button>
    <br />
</Paper>

<ProjectDetail data={data} state={openDetail} setState={setOpenDetail}></ProjectDetail>
</Grid>
       
       
    );
};

export default ProjectBox;