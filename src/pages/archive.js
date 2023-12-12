import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES } from "@contentful/rich-text-types";

const Archive = ({ data }) => {
  const options = {
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        let anchorAttrs = {};

        if (!node.data.uri.includes("my-domain-name.com")) {
          anchorAttrs = {
            target: "_blank",
            rel: "noopener noreferrer",
          };
        }

        return (
          <a href={node.data.uri} {...anchorAttrs}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <Layout>
      {data.allContentfulNews.edges.map(({ node }, i) => {
        const singleImage = getImage(node.newsImage);
        return (
          <div key={i} className="mt-28 xl:flex">
            <div className="text-center xl:hidden">{node.newsTitle}</div>
            <br />
            <GatsbyImage className="xl:flex-1 xl:mr-7" image={singleImage} />
            <br />
            <div className="xl:flex-1 xl:ml-7">
              <div className="text-center hidden xl:block">
                {node.newsTitle}
              </div>
              <br />
              <div className="text-justify">
                {renderRichText(node.newsText, options)}
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query ArchiveQuery {
    allContentfulNews(sort: { createdAt: DESC }) {
      edges {
        node {
          newsTitle
          newsText {
            raw
          }
          newsImage {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Archive;
export const Head = () => <title>Archive | Pavle Pavlović</title>;
