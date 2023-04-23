import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import RecipeReviewCard from './Card';
import { ButtonBase } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function SwipeableTextMobileStepper() {
      const theme = useTheme();
      const [activeStep, setActiveStep] = React.useState(0);
      const maxSteps = 2

      const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleStepChange = (step: number) => {
            setActiveStep(step);
      };

      return (
            <Box sx={{ flexGrow: 1, minHeight: '95%', marginTop: '100px' }}>

                  <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                  >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <ButtonBase style={{ margin: '0px 20px' }}>
                                    <Box border={1}>
                                          <RecipeReviewCard />
                                    </Box>
                              </ButtonBase>
                              <ButtonBase style={{ margin: '0px 20px' }}>
                                    <Box border={1}>
                                          <RecipeReviewCard />
                                    </Box>
                              </ButtonBase>
                              <ButtonBase style={{ margin: '0px 20px' }}>
                                    <Box border={1}>
                                          <RecipeReviewCard />
                                    </Box>
                              </ButtonBase>
                              <ButtonBase style={{ margin: '0px 20px' }}>
                                    <Box border={1}>
                                          <RecipeReviewCard />
                                    </Box>
                              </ButtonBase>

                        </div>

                  </AutoPlaySwipeableViews>
                  <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                              <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                              >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                          <KeyboardArrowLeft />
                                    ) : (
                                          <KeyboardArrowRight />
                                    )}
                              </Button>
                        }
                        backButton={
                              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                          <KeyboardArrowRight />
                                    ) : (
                                          <KeyboardArrowLeft />
                                    )}
                                    Back
                              </Button>
                        }
                  />
            </Box>
      );
}

export default SwipeableTextMobileStepper;