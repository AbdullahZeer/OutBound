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
    TimeLine:{
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0)
    },
    marginDots:{
        paddingTop:theme.spacing(1),
        paddingBottom:theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            paddingBottom:theme.spacing(12),
          },
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
            desc: 'We identify the goals, budget and expected deliverables then we work together to deliver a unique experience by establishing the initial idea' 
        },
        { 
            title: 'Pre-Production (last checks until T-0)', 
            desc: 'In this phase we focus on the design of the experience and try to minimize any changes in the production phase' 
        },
        { 
            title: 'Production (launching the development rocket until reaching intended orbit)', 
            desc: 'The phase where we start implement and iterate on the design' 
        },
        { 
            title: 'Polish / QA (deploying the project in space right next to ISS)', 
            desc: 'Here we make some adjustments, fixes to improve the overall experience' 
        },

      ];
  return (
    <Timeline className={classes.TimeLine} >
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
                    <Typography  variant='h5'  gutterBottom>
                    {work.title}
                    </Typography>
                    <Typography fontWeight='fontWeightLight' className={classes.marginDots}  gutterBottom>
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