import { css } from "@emotion/react";

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    font-family: "Spoqa Han Sans Neo";
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after {
    content: "";
    content: none;
  }
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .swiper {
    margin: 100px auto;
    width: 500px;
    height: 325px;
    overflow: visible;
    position: relative;
  }
  .swiper-slide {
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .swiper-slide-active,
  .swiper-slide-active + .swiper-slide,
  .swiper-slide-active + .swiper-slide + .swiper-slide,
  .swiper-slide-active + .swiper-slide + .swiper-slide + .swiper-slide {
    opacity: 1;
  }
  .swiper-button-prev::after {
    opacity: 0;
    display: none;
  }
  .swiper-button-next::after {
    color: white;
    margin-top: 220px;
    margin-right: 30px;
    font-size: 30px;
  }
`;
export default reset;
