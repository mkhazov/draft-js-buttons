import React from 'react';
import createInlineStyleButton from '../../utils/createInlineStyleButton';

export default createInlineStyleButton({
  style: 'SUBSCRIPT',
  styleToRemove: 'SUPERSCRIPT',
  children: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
      <defs>
        <path id="a" d="M.501 8h5.015V.793H.501V8z"/>
      </defs>
      <g fillRule="evenodd">
        <path d="M8.808 0L6.142 4.902 3.476 0H.107l4.141 7.05L0 14.22h3.408l2.734-4.98 2.734 4.98h3.41L8.036 7.05 12.178 0z"/>
        <g transform="translate(14 8.385)">
          <mask id="subscriptButton" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path d="M2.459 6.862l1.616-1.704c.443-.485.755-.91.938-1.275a2.39 2.39 0 0 0 .273-1.074c0-.64-.203-1.137-.607-1.489C4.272.968 3.704.793 2.972.793c-.479 0-.907.101-1.284.305-.378.203-.67.484-.876.842a2.33 2.33 0 0 0-.311 1.187h1.416c0-.358.092-.647.275-.867.185-.22.436-.33.755-.33.296 0 .525.091.684.271.159.181.239.43.239.745 0 .231-.076.475-.226.732a5.737 5.737 0 0 1-.702.904L.643 7.033V8h4.873V6.862H2.459z" mask="url(#subscriptButton)"/>
        </g>
      </g>
    </svg>
  ),
});
