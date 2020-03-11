import { H1, H2, H3, H4, H5 } from './text/headings';
import { Blockquote } from './text/quotes';
import { Code, InlineCode } from './text/code';
import { GenericLink } from './text/link';
import Heading from './heading';

const PostH2 = ({ children, id }) => (
  <div>
    <Heading lean id={id}>
      <H2>{children}</H2>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
);

const PostH3 = ({ children, id }) => (
  <div>
    <Heading lean id={id}>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      div {
        margin: 2rem 0 0 0;
      }
    `}</style>
  </div>
);

const PostH4 = ({ children, id }) => (
  <div>
    <Heading lean id={id}>
      <H4>{children}</H4>
    </Heading>
  </div>
);

const Details = ({ children }) => {
  return (
    <details>
      {children}
      <style jsx>
        {`
          details {
            margin: 1rem 0;
            padding: 0 0.5rem;
            background: #f9f9f9;
          }
          details[open] {
            overflow: hidden;
          }
        `}
      </style>
    </details>
  );
};

const Summary = ({ children }) => {
  return (
    <summary>
      {children}
      <style jsx>{`
        summary {
          cursor: pointer;
          outline: none;
          font-weight: 500;
        }
        summary:hover {
          opacity: 0.8;
        }
      `}</style>
    </summary>
  );
};

const Ul = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      list-style: none;
      margin-bottom: 2rem;
    `}</style>
  </ul>
);

const Li = ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      :before {
        content: '-';
        display: inline-block;
        color: #6d6d6d;
        position: absolute;
        margin-left: -25px;
      }
      li {
        margin-bottom: 0.35rem;
      }
    `}</style>
  </li>
);

const P = ({ children }) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          line-height: 1.8;
          margin-bottom: 2rem;
        }
      `}</style>
    </p>
  );
};

const Hr = () => (
  <div>
    <hr />
    <style jsx>{`
      hr {
        margin: 4rem 0;
        border: none;
        border-bottom: 1px solid #eee;
      }
    `}</style>
  </div>
);

export const components = {
  h1: H1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  h5: H5,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink,
  details: Details,
  summary: Summary,
  li: Li,
  ul: Ul,
  p: P,
  hr: Hr
};
