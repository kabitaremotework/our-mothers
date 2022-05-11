import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
const GetInvolved = () => {
  return (
    <Wrapper>
      <div className="donate">
        <Link to="/getInvolved">
          <button className="donation button">Donation</button>
        </Link>
        <p>
          Your gift to O.U.R. Mothers, Inc. makes a significant positive impact
          on the lives we serve to children, teens, and families.
        </p>
      </div>

      <div className="volunteer">
        <h1>VOLUNTEER</h1>
        <p>
          Overview –Thank you for your interest in volunteering! One of the
          greatest gifts you can give is your times. We love our volunteers and
          are grateful for your support in helping us to achieve our mission
          NOTES: HERE YOU WILL HAVE A VOLUNTEER POLICY AND PROCEDURE,
          APPLICATION, AND VOLUNTEER SERVICE AGREEMENT THAT MUST BE SIGNED
          BEFORE COMING A VOLUNTEER. ALSO YOU CAN LIST THE COMMITTEES THEY CAN
          JOIN IF THE WISH.
        </p>
      </div>

      <div className="membership">
        <h1>MEMBERSHIP</h1>
        <p>Registration form goes here</p>

        <p>
          Continuation of becoming a member, and how it is important to the
          organization by making this commitment. NOTES: HERE YOU WILL HAVE ALL
          THE INFORMATION OF BECOMING A MEMBER. POLICY AND PROCEDURE,
          APPLICATION, MEMBERSHIP AGREEMENT, CONFLICT OF POLICY, BYLAWS,
          INCENTIVE PROGRAM, SURVEY, VOTING RIGHTS AS PER BY-LAWS. ALSO, YOU CAN
          LIST THE COMMITTEES THEY CAN JOIN AFTER BECOMING A MEMBER.
        </p>
      </div>

      <div className="amazon__wishlist">
        <h1>AMAZON WISH LIST</h1>
        <p>NOTES: TO BE REVIEWED AND BE ACCEPTED. Link</p>
      </div>

      <div className="mailing__list">
        <h1>JOIN OUR MAILING LIST</h1>
        <p>
          Sign up for updates!
          <br />
          Get news form O.U.R. Mothers in your inbox and text. <br />
          *Email: <br />
          First Name <br />
          Last Name <br />
        </p>

        <p>
          NOTE: By submitting this form, you are consenting to receive marketing
          emails from: O.U.R. Mothers, Inc. (include address) Include that
          revoke your consent to receive emails at any time by using the
          Unsubscribe found of every email etc.
        </p>
      </div>
    </Wrapper>
  )
}

export default GetInvolved


const Wrapper = styled.div`
width: 95vw;
max-width:1450px;
margin: 0 auto;

`