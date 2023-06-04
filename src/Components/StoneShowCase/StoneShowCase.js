import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion'
import StripeSlider from './StripeSliderStone';
import StripeSliderStone from './StripeSliderStone';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function StoneShowCase() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='bg-bg ' sx={{ position: 'relative' }}>
            <Box
                className='mx-auto md:w-[20vw] w-[90vw] '
                sx={{ flexGrow: 1, display: 'flex', }}
            >
                <div
                    className='m-5'
                >
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 80, opacity: .1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .2, delay: 0, }}
                    >
                        <Box className='border-b border-accent'
                            sx={{}}>
                            <Tabs
                                // className=' lg:h-[70vh]  '
                                // orientation="vertica"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >

                                <Tab sx={{ fontSize: 20, width: 150, marginBottom: 2, textAlign: 'center', color: 'white' }} label="Marble" {...a11yProps(0)} />
                                <Tab sx={{ fontSize: 20, width: 150, marginBottom: 2, textAlign: 'center', color: 'white' }} label="Granite" {...a11yProps(1)} />
                                {/* <Tab sx={{ fontSize: 20, width: 150, marginBottom: 2, textAlign: 'center' }} label="Commitment" {...a11yProps(2)} />
                                <Tab sx={{ fontSize: 20, width: 150, marginBottom: 2, textAlign: 'center' }} label="Eco-friendly" {...a11yProps(3)} />
                                <Tab sx={{ fontSize: 20, width: 150, marginBottom: 2, textAlign: 'center' }} label="Hi-tech" {...a11yProps(4)} /> */}
                            </Tabs>
                        </Box>
                    </motion.div>
                </div>
                <motion.div
                    className='absolute bottom-[-20px] py-5 md:bottom-5 left-[11vw] lg:left-[30vw] w-[80vw] lg:w-[700px] text-center'
                    viewport={{ once: true }}
                    initial={{ y: 40, opacity: .1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .2, delay: 0, }}
                >
                    <div className=' bg-textPrimary opacity-80 '>
                        <TabPanel value={value} index={0}>
                            <p className='text-[white] text-[15px]  lg:text-2xl'>
                                The fabric is durable, comfortable, and have a good drape.
                            </p>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <p className='text-[white] text-[15px]  lg:text-2xl'>
                                The finishing is clean, with no rough edges, and properly aligned buttons, zippers, or hooks.
                            </p>
                        </TabPanel>
                  
                       
                    </div>
                </motion.div>


            </Box>

            {
                value == 0 &&
                <StripeSliderStone></StripeSliderStone>
            }
            {
                value == 1 &&

                <StripeSliderStone></StripeSliderStone>

            }
           
            
           

        </Box>

    );
}