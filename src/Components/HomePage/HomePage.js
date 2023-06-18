import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"

import Link from 'next/link'

import Carousel, { AboutUS, ContactUS, OpenMap } from './Carousel';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



const HomePage = () => {

  const [open, setOpen] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openMap, setOpenMap] = React.useState(false);

  const [audioStatus, setAudioStatus] = useState(false);

  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    setAudioStatus(true);


  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    setAudioStatus(false);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAbout(false)
    setOpenContact(false)
    setOpenMap(false)
  };

  useEffect(()=>{


  },[])




  return (
    <div className=' '>
      <div className='w-[100%] mx-auto h-[100vh] '>

        <div style={{ zIndex: 100 }} className="bg-bg bg-opacity-50 rounded-full absolute right-5 md:right-[10vw] top-10  z-10 cursor-pointer">
         
        <audio
        ref={myRef}
        autoPlay
        src='https://res.cloudinary.com/pavel-genuine/video/upload/v1687075627/bg_iq4qxp.wav'
      />
         
          <IconButton
            size={'large'}

            color="default"
            aria-label="delete"
          >
            { audioStatus==true  ? <VolumeUpIcon onClick={pauseAudio}    color="primary" />: <VolumeMuteIcon onClick={startAudio} color="primary" /> }
          </IconButton>
        </div>

        {
          <div className='relative'>



            <div>
              <Carousel></Carousel>
            </div>


            <div onClick={() => { setOpenAbout(false); setOpenContact(true); handleClickOpen() }}
              className=' rounded-t-full cursor-pointer bg-bg bg-opacity-50 px-5 md:h-[90px] h-[70px] text-sm md:text-lg   absolute  text-center  font-bold z-10 bottom-0 md:bottom-0 left-[40%] md:left-[46.5%] '>

              <p className='   mb-[-12px] mt-[20px] text-[white]'>
                Contact Us
              </p>
              <marquee behavior="scroll" direction='right'>
                <div className=' bg-[white] h-[2px] w-[60px] lg:w-[75px]'>

                </div>
              </marquee>


            </div>

            <div style={{ zIndex: 110 }} onClick={() => { setOpenContact(false); setOpenAbout(true); handleClickOpen() }}
              className='rounded-b-full cursor-pointer bg-bg bg-opacity-50 px-5 md:h-[90px] h-[70px] text-sm md:text-lg  absolute  text-center  font-bold z-10 top-0 md:top-0 left-[40%] md:left-[46.5%] '>
              <motion.div
                className='   '
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 1, }}
              >
                <p className='   mb-[-12px] mt-[20px] md:mt-[25px] text-[white]'>
                  About Us
                </p>
                <marquee behavior="scroll" direction='right'>
                  <div className=' bg-[white] h-[2px] w-[60px] lg:w-[75px]'>

                  </div>
                </marquee>


              </motion.div>

            </div>

          </div>
        }
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth={true}
          maxWidth={'lg'}
        >
          {
            !openMap &&
            <div className='absolute  right-0 top-0 z-10'>
              <IconButton
                onClick={handleClose}
                color='secondary'
                className="absolute right-3 top-3 bg-gray-400"
                aria-label="delete"
              >
                <CloseIcon />
              </IconButton>
            </div>
          }
          {
            openContact ?
              <div className='bg-accent'>

                {
                  openMap ?
                    <OpenMap setOpenMap={setOpenMap} ></OpenMap>
                    :
                    <ContactUS setOpenMap={setOpenMap}></ContactUS>
                }
              </div>
              :
              <div className='bg-accent'>
                <AboutUS setOpenAbout={setOpenAbout}></AboutUS>
              </div>
          }
        </BootstrapDialog>

      </div>

    </div>
  )
}

export default HomePage