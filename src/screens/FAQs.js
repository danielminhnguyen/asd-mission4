import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  growth: {
    flexGrow: 1,
  },
  nav: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    minWidth: 700,
  },
  content: {
    marginTop: 30,
    maxWidth: 700,
  },
}));

export default function FAQs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.container}>
      <div className="column">
        <Typography variant="h3">Have questions?</Typography>
        <Typography variant="h3">We've got you covered</Typography>
        <Typography variant="h4">
          Frequently Asked Questions about Turners Insurance
        </Typography>
      </div>
      <div className={classes.content}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography color="primary">Who is the underwriter?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our Car Insurance is underwritten by Vero Insurance New Zealand
              Limited. Find out about their Financial Strength Rating.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography color="primary">
              If I need to cancel my policy, can I get a refund?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you are not completely happy with the cover provided by your
              policy, you can cancel it within 15 days of the start of the
              period of insurance, provided you have not made a claim under your
              policy. After that the policy is not refundable. We have
              discretion as to whether we will allow a transfer of your policy
              to another person. Please refer to the policy wording for full
              policy terms and conditions. Call us on 0800 267 873 to discuss
              your policy with us.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography color="primary">
              I’ve moved house. How do I update my policy address with you?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can call us on 0800 267 873 and we’ll be happy to change the
              contact address we have for you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography color="primary">
              How can I make a premium payment by credit card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can pay online directly to Vero with your credit or debit
              card. Please use your Customer PRN and policy number as the
              reference.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography color="primary">
              How do I make a car insurance claim?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div class="column">
              <p>
                If you’ve had an accident or your car has been stolen, phone{" "}
                <a href="tel:0800674678">0800 674 678</a> to get assistance with
                your claim. Our car insurance claims are managed by&nbsp;Vero
                Insurance New Zealand Limited and&nbsp;Gallagher Bassett.
              </p>
              <p>It’s important to do these things before making your claim:</p>
              <ul>
                <li>
                  ensure everyone is safe and contact emergency services if
                  anyone has been injured in an accident
                </li>
                <li>
                  notify the police if your car has been stolen or maliciously
                  damaged (note the police record report number and officer
                  details)
                </li>
                <li>
                  take all reasonable care to prevent further loss or liability.
                </li>
              </ul>
              <p>
                4 Simple Steps to Making a Claim (based on your claim being
                accepted)
              </p>
              <p>
                1. Call us&nbsp;with your registration and policy number to
                lodge your claim.
              </p>
              <p>
                2. You take your car to a reputable repairer and give them your
                claim number. They'll take photos of the damage and email them
                to us with a quote to repair your car.
              </p>
              <p>
                3. Your car will be assessed to ensure quality repairs and costs
                are fair and reasonable.
              </p>
              <p>
                4. We’ll manage the process and payments with the repairer, and
                keep you updated on progress.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography color="primary">
              What if my windscreen or window is damaged?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If this is the only damage to your car phone 0800 674 678 to lodge
              your claim and find a reputable glass company to repair the
              damage. Depending on the policy you have with us you may have to
              pay an excess if the windscreen needs replacing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography color="primary">
              Someone drove into my car, what do I do?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It’s important to get as much information from them as possible
              e.g. drivers full name, drivers licence no, address, phone number,
              car registration, insurance company (if any). If you’re not at
              fault for the accident and we have other person’s details, we may
              waive your excess.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography color="primary">
              What if I caused the accident and the other person wants to make a
              claim against me?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Do not admit fault for the damage/accident and do not promise to
              pay for any costs. Tell them we’re your insurance company and they
              can call us on 0800 674 678.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={classes.nav}>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <div className={classes.growth} />
      </div>
    </div>
  );
}
