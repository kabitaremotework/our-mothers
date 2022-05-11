import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from 'gatsby'

const Hero = () => {
  return (
    <>
      <HeroSection>
        <h1>O.U.R. MOTHERS Inc</h1>
        <p>We change lives and empower minds</p>
        <p>
          <strong>President's Message / Who we are / our history</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent consectetur adipiscing
          elit ut aliquam, purus sit amet luctus venenatis, lectus magna
          fringilla urna, porttitor rhoncus dolor purus non enim praesent
        </p>
      </HeroSection>
      <ImageWrapper>
        <StaticImage
          src="../images/mothers.png"
          alt="Mother"
          height={400}
          placeholder="tracedSVG"
          layout="fullWidth"
        />
      </ImageWrapper>

      <OurMission>
        <div className="main__mission">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              LConsectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
              purus non enim praesent elementum facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus in ornare quam viverra
              orci sagittis eu volutpat odio facilisis mauris sit amet massa
              vitae tortor condimentum lacinia quis vel
            </p>
            <Link to="/getInvolved">
              <button className="donation button">Join us</button>
            </Link>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              LConsectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
              purus non enim praesent elementum facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus in ornare quam viverra
              orci sagittis eu volutpat odio facilisis mauris sit amet massa
              vitae tortor condimentum lacinia quis vel
            </p>
          </div>
        </div>
      </OurMission>

      <Volunteer>
        <div className="main__volunteer">
          <div className="volunteer">
            <h2>BECOME A VOLUNTEER</h2>
            <p>
              Give a little overview about volunteering. This will include;
              thanking them for their interest in volunteering. At the bottom
              they can click on the phrase –
            </p>
            <Link to="/getInvolved">
              <button className="donation button">Join us</button>
            </Link>

            <h2>BECOME A MEMBER</h2>
            <p>
              Give over view of becoming a member. At the bottom they can click
              on the phrase
            </p>
            <Link to="/getInvolved">
              <button className="donation button">Join us</button>
            </Link>
          </div>
          <div className="events">
            <h2>UP COMING EVENTS</h2>
            <p>
              <strong>COOKBOOK FUNRAISER.</strong> Give overview about cookbook
              with link to EVENT PAGE where they will find lots of information
              and prototype. Pictures of mothers recipes. Lots of information.
            </p>
            <p>
              However, this cookbook fundraiser should be updated weekly,
              together with other social media outlets.
            </p>
            <p>RAFFLE????????</p>
            <p>Promotional speaking updates where and when</p>
          </div>
        </div>
      </Volunteer>

      <Charity>
        <div class="main__charities">
          <h2>Charities we support</h2>
          <p>card for charity list</p>
        </div>
      </Charity>
    </>
  )
}

export default Hero

const HeroSection = styled.section`
  background-color: #732c96;
  color: #fff;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`

const ImageWrapper = styled.div``

const OurMission = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;

  .main__mission {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    padding: 20px 10px;
    .main__mission {
      flex-direction: column;
    }
  }
`

const Volunteer = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;

  .main__volunteer {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    padding: 20px 10px;
    .main__volunteer {
      flex-direction: column;
    }
  }
`

const Charity = styled.div`
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;

  .main__volunteer {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    padding: 20px 10px;
    .main__volunteer {
      flex-direction: column;
    }
  }
`