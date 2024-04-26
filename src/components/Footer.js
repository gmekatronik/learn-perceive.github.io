import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query Footer2Query {
      allPrimaryFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      allSecondaryFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <div className="footer-info">
              <h2>{data.site.siteMetadata.title}</h2>
              <p>{data.site.siteMetadata.description}</p>
              {/* <div className="section-heading">
            <h2>{"part of"}</h2>
          </div> */}
              <div className="row justify-content-left align-items-center">
                <div className="image-light col-5 text-center mb-1 mt-1">
                  <StaticImage
                    src="../images/unibonn.png"
                    alt="Uni Bonn"
                    height="80px"
                  />
                </div>
                <div className="image-invert col-5 text-center mb-1 mt-1">
                  <StaticImage
                    src="../images/unibonn_neg.png"
                    alt="Uni Bonn"
                    height="80px"
                  />
                </div>
                <div className="image-light col-5 text-center mb-1 mt-1">
                  <StaticImage
                    src="../images/lamarr-logo-2023.png"
                    alt="Lamarr Institute"
                    height="80px"
                  />
                </div>
                <div className="image-invert col-5 text-center mb-1 mt-1">
                  <StaticImage
                    src="../images/lamarr-logo-2023-negative.png"
                    alt="Lamarr Institute"
                    height="80px"
                  />
                </div>
              </div>
              {/* <ul>
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.name}>
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
          <div className="col-12 col-md-2"></div>

          <div className="col-12 col-md-2 mt-2 mt-md-0">
            <div className="footer-menu">
              <h3>Lab</h3>
              <div className="menu-footer-primary">
                <ul className="footer-menu">
                  {data.allPrimaryFooterMenuJson.edges.map(({ node }) => (
                    <li key={node.name} className="menu-item-">
                      <Link to={node.url}>{node.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-2 mt-2 mt-md-0">
            <div className="footer-menu">
              <h3>Network</h3>
              <div className="menu-footer-secondary">
                <ul className="footer-menu">
                  {data.allSecondaryFooterMenuJson.edges.map(({ node }) => (
                    <li key={node.name} className="menu-item-">
                      <Link to={node.url}>{node.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md">
            <div className="social" id="social">
              <a
                href="https://github.com/learn-perceive"
                target="blank"
                title="github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCSUL2K_bHSS-YrYySlKfupQ"
                target="blank"
                title="youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
              <a
                href="https://sigmoid.social/@hermann"
                target="blank"
                title="mastodon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-mastodon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
