import React from "react";
import BackButton from "../components/shared/BackButton";
import {
  ResumeWrapper,
  ContactInfo,
  SummaryText,
  SkillWrapper,
  SkillBox,
  ResumeHeadingSectionWrapper,
  ProfilePicture,
  ResumeTextWrapper,
} from "../styles/resume";
import { ResumeHeading, Svg } from "../components/shared";

export default () => (
  <ResumeWrapper>
    <BackButton prevLink="tutorial" />
    <ResumeHeadingSectionWrapper>
      <ResumeTextWrapper>
        <ResumeHeading heading="Ishank Sharma" underline bold size={5} mb={2} />
        <ResumeHeading
          heading="Full Stack Developer"
          underline={false}
          bold={false}
          size={2}
          mb={2}
        />
        <ContactInfo>
          <span> (+91) 938-055-6186</span>
          <span> ishank.web.dev@gmail.com</span>
          <a href="#!">
            <Svg height="25px" width="25px" name="github" />
            prophet1996/
          </a>
          <a href="#!">
            <Svg height="25px" width="25px" name="linkedIn" />
            ishank-web-dev/
          </a>
        </ContactInfo>
      </ResumeTextWrapper>
      <ProfilePicture src="/profilePic.jpeg" />
    </ResumeHeadingSectionWrapper>

    <SummaryText>
      Experienced JavaScript/Typescript & MERN Full Stack Developer with a
      demonstrated history of working in Node.js and React.js. Skilled in UI/UX
      & complex backend interactions.And Experience in a11y and I18N.
    </SummaryText>

    <ResumeHeading heading="Skills" underline bold size={3} />
    <SkillWrapper>
      <SkillBox>
        <ResumeHeading
          heading="React.js / Redux.js"
          underline={false}
          bold
          size={2}
        />
        <SummaryText size="s">
          UI/UX experience with focus on performance optimizations.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading heading="Node" underline={false} bold size={2} />
        <SummaryText size="s">
          Server Side Development with advanced profiling, debugging and web
          server scaling.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading
          heading="MongoDb/CouchDb"
          underline={false}
          bold
          size={2}
        />

        <SummaryText size="s">
          Expereinced in working with NoSQL/documentbased databases.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading heading="HTML/CSS/JS" underline={false} bold size={2} />

        <SummaryText size="s">
          ES6 expert, deep understanding of Semantic HTML. Experienced in CSS3
          Grid/FlexBox and canvas animations.
        </SummaryText>
      </SkillBox>
    </SkillWrapper>
    <ResumeHeading heading="Experience" underline bold size={3} />

    <SkillWrapper rows={2}>
      <SkillBox>
        <ResumeHeading
          heading="Senior Software Engineer at Jeevansathi"
          underline={false}
          bold
          size={2}
        />
        <ResumeHeading heading="Infoedge" underline={false} size={1} bold />
        <SummaryText size="s">
          Currently working on React.js/Node.js/Java as a Full Stack developer
          on the core Jeevansathi Web products with a focus on speed and
          performance.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading
          heading="Associate Experience Technology L2"
          underline={false}
          bold
          size={2}
        />
        <ResumeHeading
          heading="Publicis Groupe"
          underline={false}
          size={1}
          bold
        />
        <SummaryText size="s">
          Worked as a Javascript developer with a US based firm to develop
          applications that drive supply chains for millions of customers.{" "}
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading
          heading="Analyst Programmer"
          underline={false}
          bold
          size={2}
        />
        <ResumeHeading heading="Infosys" underline={false} size={1} bold />
        <SummaryText size="s">
          Worked on React.js/Node.js as a Full Stack developer on a banking
          application with a focus on security and accessibility.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading
          heading="FullStack Web Dev"
          underline={false}
          bold
          size={2}
        />
        <ResumeHeading heading="Innov8" underline={false} size={1} bold />
        <SummaryText size="s">
          Gained extensive knowledge of JS for Front End and Back-end to create
          an in- house E.R.P solution that ranged from inventory management to
          HR solutions, using Node.js /React.js
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading
          heading="Android Developer"
          underline={false}
          bold
          size={2}
        />
        <ResumeHeading heading="WV & Rec" underline={false} size={1} bold />
        <SummaryText size="s">
          Started out as an intern and moved on to production application for
          their product.
        </SummaryText>
      </SkillBox>
    </SkillWrapper>
    <ResumeHeading heading="Consulting" underline bold size={3} />
    <SkillWrapper rows={1} cols={1}>
      <SkillBox>
        <ResumeHeading
          heading="Talk Valley LLC,"
          underline={false}
          bold
          size={2}
        />

        <SummaryText size="s">
          Worked with a US-based startup to help them design a journey for a
          React.js/Node.js skill path. Responsibilities included course
          framework design. Course material creation video tutorial creation.
          Also designed an admin dashboard for their content delivery platform
        </SummaryText>
      </SkillBox>
    </SkillWrapper>
    <ResumeHeading heading="Certifications" underline bold size={3} />
    <SkillWrapper rows={1}>
      <SkillBox>
        <ResumeHeading
          heading="Microsoft, 2019"
          underline={false}
          bold
          size={2}
        />

        <SummaryText size="s">
          Microsoft Certified HTML/CSS/JS developer.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading
          heading="Udacity , 2018"
          underline={false}
          bold
          size={2}
        />

        <SummaryText size="s">
          Google India Scholar for Udacity Mobile Web Specialist.
        </SummaryText>
      </SkillBox>
    </SkillWrapper>
    <ResumeHeading heading="Methodologies" underline bold size={3} />
    <SkillWrapper rows={1}>
      <SkillBox>
        <ResumeHeading heading="TDD" underline={false} bold size={2} />

        <SummaryText size="s">
          TDD Microsoft , 2019 Unit test driven development to help maintain bug
          free and maintainable code base.
        </SummaryText>
      </SkillBox>
      <SkillBox>
        <ResumeHeading heading="PWA" underline={false} bold size={2} />

        <SummaryText size="s">
          PWA Converting a normal web page to PWAs that enrich UX using service
          workers and latest Web API.
        </SummaryText>
      </SkillBox>
    </SkillWrapper>
  </ResumeWrapper>
);
