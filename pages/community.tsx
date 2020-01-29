// title: TinaCMS - Community
// description: Join the club. Tina is open source, extensible and community-driven.
// path: /community
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SocialBar from "../components/SocialBar";
import Hero from "../components/Hero";

const Page = props => {
  return (
    <Layout pathname={"/community"}>
      <Hero>
        <h1>Join the club</h1>
      </Hero>

      <SocialBar />

      <Grid>
        <Column>
          <h2>Open source, extensible and community-driven</h2>

          <p>
            Tina is made better by the wisdom of crowds. If you find a bug or
            have ideas about a feature, please make an issue on{" "}
            <a href="https://github.com/tinacms/tinacms/issues">github</a>. If
            you have a question about how to use Tina or want to engage in
            broader discussions, check out the{" "}
            <a href="https://community.tinacms.org/">forum</a>. If you want to
            be a part of the daily chatter, join the Tina{" "}
            <a href="https://tinacms.slack.com/join/shared_invite/enQtNzgxNDY1OTA3ODI3LTNkNWEwYjQyYTA2ZDZjZGQ2YmI5Y2ZlOWVmMjlkYmYxMzVmNjM0YTk2MWM2MTIzMmMxMDg3NWIxN2EzOWQ0NDM">
              Slack
            </a>
            .
          </p>

          <p>
            Check out our{" "}
            <a href="https://tinacms.org/docs/contributing/guidelines">
              contribution guidelines
            </a>{" "}
            for more info on how to get involved with development. Peak at our{" "}
            <a href="https://github.com/tinacms/tinacms/blob/master/ROADMAP.md">
              roadmap
            </a>{" "}
            to see what's coming down the line. If you are exited about TinaCMS,
            help us grow the community by ⭐️'ing the repo on{" "}
            <a href="https://github.com/tinacms/tinacms">github</a>.
          </p>

          <Button />
          <Button />
        </Column>
        <Column>
          <Image src="/img/rico-replacement.jpg" alt="Join the club" />
        </Column>
      </Grid>

      <NewsletterSection>
        ## Newsletter ✌️ We move quick. Stay up to date.
        <EmailForm />
      </NewsletterSection>
    </Layout>
  );
};

export default Page;
