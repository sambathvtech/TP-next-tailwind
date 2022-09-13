import { getCMSDomain } from '@utilities/dev';
import { BsCheckCircleFill, BsFillRecordFill, BsFillXCircleFill } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const textColor = (props) => {
  let content = props.children ? props.children[0] : '';
  content = typeof content === 'string' && content.replace('(frame)', '');
  content = typeof content === 'string' && content.replace('(center)', '');
  content = typeof content === 'string' && content.replace('(right)', '');
  const regExp = /\(([^)]+)\)/;
  const condition = regExp.exec(content);
  const getClass = condition !== null ? `${condition[1]}` : 'white';
  const text = condition !== null ? content.replace(`(${condition[1]})`, '') : props.children;
  return {
    getClass,
    text,
    condition,
  };
};

const TextFrame = ({ children, data }) => {
  const content = data.children ? data.children[0] : '';
  const condition = content.includes('(frame)');
  const alignCenter = content.includes('(center)');
  const alignRight = content.includes('(right)');
  let alignment = 'text-left';
  if (alignCenter) {
    alignment = 'text-center';
  } else if (alignRight) {
    alignment = 'text-right';
  }

  return condition ? (
    <div className='px-[3px] py-[3px] my-2 clear-both bg-gradient-to-t from-golden-frame-2 to-golden-frame-1'>
      <div
        className={`p-2 bg-gradient-to-t from-golden-2 via-golden-2 to-golden-1 clear-both ${alignment}`}
      >
        {children}
      </div>
    </div>
  ) : (
    children
  );
};

export const RichTextMarkdown = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        ul: ({ node, ...props }) => {
          return (
            <ul>
              {props.children.map((load, idx) => {
                if (idx % 2 === 1) {
                  const checkTrue = load.props.children[0].includes('(true)');
                  const checkFalse = load.props.children[0].includes('(false)');
                  if (checkTrue && !checkFalse) {
                    return (
                      <li key={load.props.children[0]}>
                        <span className='pl-2 flex items-start'>
                          <span className='w-[30px]'>
                            <BsCheckCircleFill className='text-green-600 mt-1' />
                          </span>
                          <span className='w-full'>
                            {load.props.children[0].replace('(true)', '')}
                          </span>
                        </span>
                      </li>
                    );
                  }
                  if (!checkTrue && checkFalse) {
                    return (
                      <li key={load.props.children[0]}>
                        <span className='pl-2 flex items-start'>
                          <span className='w-[30px]'>
                            <BsFillXCircleFill className='text-red-600 mt-1' />
                          </span>
                          <span className='w-full'>
                            {load.props.children[0].replace('(true)', '')}
                          </span>
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={load.props.children[0]}>
                      <span className='pl-2 flex items-start'>
                        <span className='w-[30px]'>
                          <BsFillRecordFill className='text-white mt-1' />
                        </span>
                        <span className='w-full'>
                          {load.props.children[0].replace('(true)', '')}
                        </span>
                      </span>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          );
        },
        a: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <a href={props.href} style={{ color: getClass }}>
              {text}
            </a>
          );
        },
        img: ({ node, ...props }) => {
          const left = props.src.includes('(left)');
          const right = props.src.includes('(right)');
          const center = props.src.includes('(center)');
          let classTag = '';
          let { src } = props;

          if (left) {
            classTag = 'float-left mr-4 mb-4';
            src = props.src.replace('(left)', '');
          } else if (right) {
            classTag = 'float-right ml-4 mb-4';
            src = props.src.replace('(right)', '');
          } else if (center) {
            classTag = 'mx-auto';
            src = props.src.replace('(center)', '');
          }
          return (
            <img
              src={`${getCMSDomain()}${src}`}
              alt={props.alt}
              title={props.alt}
              className={`${classTag} lazyload`}
            />
          );
        },
        br: () => {
          return <br clear='all' />;
        },
        em: ({ node, ...props }) => {
          const { getClass, text, condition } = textColor(props);
          return condition === null ? (
            <i>{text}</i>
          ) : (
            <span style={{ color: getClass }}>{text}</span>
          );
        },
        strong: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return <strong style={{ color: getClass }}>{text}</strong>;
        },
        h1: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h1 style={{ color: getClass }}>{text}</h1>
            </TextFrame>
          );
        },
        h2: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h2 style={{ color: getClass }}>{text}</h2>
            </TextFrame>
          );
        },
        h3: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h3 style={{ color: getClass }}>{text}</h3>
            </TextFrame>
          );
        },
        h4: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h4 style={{ color: getClass }}>{text}</h4>
            </TextFrame>
          );
        },
        h5: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h5 style={{ color: getClass }}>{text}</h5>
            </TextFrame>
          );
        },
        h6: ({ node, ...props }) => {
          const { getClass, text } = textColor(props);
          return (
            <TextFrame data={props}>
              <h6 style={{ color: getClass }}>{text}</h6>
            </TextFrame>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
