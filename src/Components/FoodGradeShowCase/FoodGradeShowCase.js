import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion'
import StripeSliderMungBean from './StripeSliderMungBean';
import StripeSliderGinger from './StripeSliderGinger';
import StripeSliderTamarind from './StripeSliderTamarind';
import StripeSliderBetelNut from './StripeSliderBetelNut';

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

export default function FoodGradeShowCase() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='bg-navBg h-[100vh]' sx={{ position: 'relative' }}>
            <Box
                className='mx-auto md:w-[20vw] w-[100vw] '
                sx={{ flexGrow: 1, display: 'flex', }}
            >
                <div
                    className='md:m-5 m-3'
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

                                <Tab sx={{ fontSize: 20, width: 80, marginBottom: 2, textAlign: 'center', color: 'white' }} label="Fresh Ginger" {...a11yProps(0)} />
                                <Tab sx={{ fontSize: 20, width: 80, marginBottom: 2, textAlign: 'center', color: 'white' }} label="Betel Nut" {...a11yProps(1)} />
                                <Tab sx={{ fontSize: 20, width: 80, marginBottom: 2, textAlign: 'center', color: 'white' }} label="Mung Bean" {...a11yProps(2)} />
                                <Tab sx={{ fontSize: 20, width: 80, marginBottom: 2, textAlign: 'center', color: 'white' }} label="Tamarind Seed" {...a11yProps(3)} />
                         </Tabs>
                        </Box>
                    </motion.div>
                </div>
               


            </Box>

            {
                value == 0 &&
                <StripeSliderGinger></StripeSliderGinger>
            }
            {
                value == 1 &&

                <StripeSliderBetelNut></StripeSliderBetelNut>

            }
            {
                value == 2 &&

                <StripeSliderMungBean></StripeSliderMungBean>

            }
            {
                value == 3 &&

                <StripeSliderTamarind></StripeSliderTamarind>

            }
           
           <motion.div
                    viewport={{ once: true }}
                    initial={{ y: 40, opacity: .1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .2, delay: 0, }}
                >
                    <div className=' bg-navBg opacity-80 text-center'>
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
                        <TabPanel value={value} index={2}>
                            <p className='text-[white] text-[15px]  lg:text-2xl'>
                                The finishing is clean, with no rough edges, and properly aligned buttons, zippers, or hooks.
                            </p>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <p className='text-[white] text-[15px]  lg:text-2xl'>
                                The finishing is clean, with no rough edges, and properly aligned buttons, zippers, or hooks.
                            </p>
                        </TabPanel>
                  
                       
                    </div>
                </motion.div> 
           

        </Box>

    );
}