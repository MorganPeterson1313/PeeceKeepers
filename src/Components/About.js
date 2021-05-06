import React, { Component } from "react";
import peecelogo from "../Assets/peecelogo.jpg";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron style={{ margin: "10%", backgroundColor: "#073763" }}>
            <Image
              alt="logo"
              src={peecelogo}
              width="auto"
              height="auto"
              className="d-inline-block align-top"
              roundedCircle
              style={{ marginTop: "2%", marginBottom: "5%" }}
              href="/"
            />
            <h1 style={{ color: "white", marginBottom: "5%" }}>
              P.E.E.C.E KEEPERS
            </h1>
            <p style={{ color: "white" }}>
              <h4>Personal/Professional Goals</h4>
              My personal and professional goals are to join with positive
              community activist who seek to promote positive social progress
              and ethical growth in communities in crisis and social systems
              breakdown. In the next five years I plan to build a corporation
              which will enhance the atmosphere and work toward the betterment
              of the lives of our children, elders, and less fortunate.
            </p>
            <p style={{ color: "white" }}>
              <h4>Academic Experience</h4>I attained a Bachelors degree in
              Psychology from Marymount College of Fordham University in New
              York. During this time I had the great experience of holding a
              mentorship position with the Director of Psychology, Milton
              Steinberg, in which we develo9ped an interactive website mapping
              the brain and it’s function for the educational and research use
              of brain injury patients, students, and many other inquisitive
              minds throughout the world.
            </p>
            <p style={{ color: "white" }}>
              I also had the wonderful opportunity of participating in
              Marymount’s Annual Woman’s Day Workshop in which I lead a forum
              and conducted research on African American Women in Education.
              After graduating, I decided to further explore my interest in
              Psychology by taking a non-matriculating graduate course at the
              Rose Hill campus of Fordham University in Bronx, New York. This
              was an extremely exciting experience for me. It was during this
              time that I developed a great respect for graduate study and my
              enthusiasm for the field increased immensely. The most adventurous
              aspect of this experience was working with the on-campus
              television production team in which I created and hosted a talk
              show called PsychTalk.
            </p>
            <p style={{ color: "white" }}>
              ***I attained my Master’s Degree in Counseling Psychology from
              National University in Sacramento, CA I attained my Masters Degree
              in Dispute Resolution from University of Southern California Gould
              School of Law
            </p>
            <p style={{ color: "white" }}>
              <h4>Work/Other Experience</h4>I possess a colorful array of work
              experience and knowledge, which was built upon hard work, personal
              motivation to grown, and a deep desire to learn. I developed
              customer service and hospitality skills as a youth while working
              in the restaurant industry. As I grew older my thirst for
              knowledge lead me to seek employment in more mentally stimulating
              environments such as Corporate America. In this demanding field, I
              learned discipline, self-motivational skills, organizational
              skills, clerical skills, and management.{" "}
            </p>
            <p style={{ color: "white" }}>
              In pursuit of my educational aspirations and my particular
              interest in the field of psychology; I completed an internship at
              The Children’s Village in New York, in the crisis unit, which
              greatly deepened my awareness of the need for crisis intervention
              counselors. At the Children’s Village in New York, in the crisis
              unit, which greatly deepened my awareness of the need for crisis
              intervention counselors. At the Children’s Village I started off
              as a Psychiatric Technician and due to my dedication and love for
              children; I was promoted to Activities Director. This experience
              allowed me to sharpen my peer-mentoring skills, human-relations
              skills, and coaching and group counseling skills.
            </p>
            <p style={{ color: "white" }}>
              My continuous desires to grow and learn lead me to venture into
              entrepreneurship. In 2004, I founded a successful candle business.
              I marketed and promoted my product through door-to-door sales
              using PowerPoint presentations and interpersonal relationship
              skills to attain clients in my community. As the President of the
              company, I developed contractual agreements and managed all
              business transactions between my company, Sweet Scentsations, and
              my clients. I have had some very exciting work adventures, which
              have allowed me to master skills in time management,
              organizational development, and human relations.
            </p>
            <p style={{ color: "white" }}>
              <h4>Personal Qualities</h4>
              Personal Qualities My greatest quality is that I am a person full
              of passion. I love life and desire growth. Along with having a
              passionate spirit, I am also a highly motivated person who seeks
              an understanding of my environment and the human mind. I am a hard
              worker. I am energetic and I take initiative to seek knowledge. I
              believe in education. I am a team player. I am honest,
              self-motivated and dependable. I love families and children. I
              have a lot of joy in my heart and want others to share my joy.
            </p>
            <p style={{ color: "white" }}>
              My desire for others to share my passion is the reason I believe I
              was drawn to psychology. This exquisite field allows me to explore
              my inner most desires to bring life into this world; I believe in
              helping others. I am everyone’s biggest cheerleader and will go
              beyond basic concern for those in need and take action to aid when
              others are either too afraid or unmotivated. My compassion for
              others is still as great as when I was a child. No matter what
              trials and tribulations life brings my way, God always manages to
              restore the love and passion in my heart for this life and others.
            </p>
            <p style={{ color: "white" }}>
              {" "}
              <h4>MEMBERSHIPS & AFFILIATIONS</h4>
              National University, MAC Program Student Representative Council
              for Affordable & Quality Healthcare (CAQH) Inland Empire
              California Association of Marriage & Family Therapist (ICAMFT)
              Mental Health Steering Act Committee, Cultural Competency (MHSA)
              National Association for the Advancement of Colored People (NAACP)
              National Council Negro Women, Board Member (NCNW) Delta Sigma
              Theta Sorority, Incorporated National Association of Professional
              Women
            </p>
            <p></p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default About;
