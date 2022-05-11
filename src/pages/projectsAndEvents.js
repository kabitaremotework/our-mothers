import React from 'react'
import styled from 'styled-components'
const ProjectsEvents = () => {
  return (
    <Wrapper>
      <div className="project">
        <h1>Projects and Events</h1>
        <pre>
          NOTES: THERE WOULD BE SEVERAL LINKS TO THIS PAGE FROM YOUR HOME PAGE
          <br />
          1. Listing the charities website so it can be read by every one. For{" "}
          <br />
          eg. We have already spoken to a. Promise House and Milwaukee Public
          <br />
          School b. Milwaukee Public School c. B & B – Books and Basketball –
          <br />
          Pending * Jennifer Ivey and her son’s foundation *Cathy Watson and her
          <br />
          son’s foundation *Wanda Durant and her foundation d. Eddy’s House –
          <br />
          Pending e. Atlanta Children Shelter – Pending 2. Listing of current
          <br />
          events such as the cookbook fundraiser Continuation of the cookbook
          <br />
          information for eg. Prototype, pictures, the launching, ENVITE TO ALL
          <br />
          MOTHERS TO BE PART OF THE COOK BOOK. ETC.
        </pre>
      </div>
    </Wrapper>
  )
}

export default ProjectsEvents


const Wrapper = styled.div`
  width: 95vw;
  max-width: 1450px;
  margin: 0 auto;
`