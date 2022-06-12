import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Button, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectDetail = ({ data, state, setState }) => {

    const { img_1, img_2, img_3, name, desc, clientSide, backSide, tech, preview } = data;

    const handleClose = () => {
        setState(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={state}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', background: '#333' }}>

                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Button sx={{border: '1px solid white'}} variant='outlined'>
                            <a target='__blank' style={{
                                textDecoration: 'none', color: '#FFFFFF'
                            }} href="https://github.com/rashedsabbir">
                                Follow Me
                            </a>
                        </Button>

                        <CloseIcon onClick={handleClose} sx={{ fontSize: '30px', color: 'white', opacity: '0.6', border: '1px solid white' }}></CloseIcon>

                    </Toolbar>

                </AppBar>

                <Grid container p={5}>

                    <Grid item xs={12} md={5}>

                        <Box>
                            <img src={img_1} style={{ width: '100%' }} alt="" />
                        <br />
                            <img src={img_2} style={{ width: '100%' }} alt="" />
                            <br />
                            <img src={img_3} style={{ width: '100%' }} alt="" />
                            
                        </Box>

                    </Grid>

                    <Grid item px={3} xs={12} md={7} >

                        <Paper  sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#009688'}}>
                        <Typography color='#FFFFFF' sx={{ my: '4%' }} variant='h4'>
                            {name}
                        </Typography>

                        <Typography variant='body' color='#FFFFFF' sx={{px:'2%'}} textAlign='justify'>
                            {desc}
                        </Typography>

                        <Typography variant='h6' color='#FFFFFF' sx={{ my: '1%' }}>
                            Technolgies Used
                        </Typography>

                        <List sx={{color:'black', display: 'flex', mb: '3%', flexWrap: 'wrap' }}>
                            {
                                tech.map(el => {
                                    return (
                                        <ListItem sx={{
                                            padding: '1px 1px',
                                            borderRadius: '20px',
                                            border: '2px solid #FFFFFF',
                                            mr: '5px',
                                            mb:'5px',
                                            textAlign: 'center'
                                        }}>
                                            <ListItemText>
                                                {el}
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>

                        <Typography sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} variant='h6'>
                            
                            <a style={{
                                color: 'yellow',
                                mx: '2%',  textDecoration: 'none',  display: 'block'
                            }} target='__blank' href={preview}>Live site </a>

                            <a style={{
                                color: 'yellow',
                                mr: '2%', textDecoration: 'none', display: 'block'
                            }} target='__blank' href={clientSide}>Client Side Code </a>

                            {
                                backSide ?
                                    <a style={{
                                        color: 'yellow',
                                        mr: '2%', textDecoration: 'none', display: 'block'
                                    }} target='__blank' href={backSide}>Server Side Code</a>
                                    :
                                    ''
                            }
                        </Typography>
                        </Paper>

                    </Grid>

                </Grid>

            </Dialog>
        </div>
    );
}

export default ProjectDetail;