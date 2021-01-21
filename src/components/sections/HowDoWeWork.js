import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    marginDots:{
        paddingTop:theme.spacing(2),
        paddingBottom:theme.spacing(4),
    },
    Align:{
        textAlign:'Left'
    },
  }));

export default function HowDoWeWork() {
    const classes = useStyles();
    const works = [
        { 
            title: 'Kick-off And Concept (Establish Mission Parameters)',
            desc: 'Every successful project starts by identifying the goals, team members, budget, timeframe and expected deliverables. We work together to deliver a unique experience by establishing the initial idea, we look at the intended goals and develop some initial concepts that fit within your scope and budget!' 
        },
        { 
            title: 'Pre-Production (last checks until T-0)', 
            desc: 'This phase is intended to define the design of the experience we are creating, here we try to minimize any changes that might happen in the production phase, to arrive at the desired experience as quickly as possible.' 
        },
        { 
            title: 'Production (launching the development rocket until reaching intended orbit)', 
            desc: 'Here we implement and iterate on the design, we have a smaller production/pre-production for each part of the experience, followed by rounds of iterations. While its best to have no design changes during production, they usually happen, that should not be a concern, as we will communicate with you in every step.' 
        },
        { 
            title: 'Polish / QA (deploying the project in space right next to ISS)', 
            desc: 'Here we check what additional tweaks and adjustments should be added, to improve the overall experience quality and usability, generally no major changes happen here at this point, the deliverable is the near-final experience with some final passes at bug-fixes and optimization, the experience should be flawless.' 
        },

      ];
  return (
    <Timeline >
        {
            works.map((work, index) => (
            <React.Fragment>

                { index != works.length-1 ?
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={classes.Align}>
                    <Typography  variant='h5' fontWeight={500} gutterBottom>
                    {work.title}
                    </Typography>
                    <Typography className={classes.marginDots} variant='h6' gutterBottom>
                    {work.desc}
                    </Typography>
                    </TimelineContent>
                </TimelineItem>
                :
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent className={classes.Align}>
                    <Typography  variant='h5' fontStyle='bold' gutterBottom>
                    {work.title}
                    </Typography>
                    <Typography className={classes.marginDots} variant='h6' gutterBottom>
                    {work.desc}
                    </Typography>

                    </TimelineContent>
                </TimelineItem>
                }
            </React.Fragment>

            ))
        }
    </Timeline>
  );
}