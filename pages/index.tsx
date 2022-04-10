import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Editor from 'components/editor';
import { CustomText, CustomElement } from 'utils/editor/types';
import { Descendant } from 'slate';
import { ElementEnums } from '@/utils/editor/enums';
import { Modal } from 'antd';

const Home: NextPage = () => {
  const [previewMode, setPreviewMode] = useState(false);

  const initialValue: CustomElement[] = [
    {
      type: ElementEnums.Paragraph,
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];
  // Modal State Management
  const [showModal, setShowModal] = useState(false);

  //Initial value State
  const [value, setValue] = useState<Descendant[]>(initialValue);

  //Update initial value with localStorage content
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const content = JSON.parse(localStorage.getItem('content') as string);

      if (content && content.length > 0) {
        setValue(content);
      }
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '100px',
        gap: '20px',
      }}
    >
      <Head>
        <title>Editors Trial</title>
        <meta name="description" content="Trying out different editors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => {
            setPreviewMode(!previewMode);
          }}
        >
          Preview Mode {previewMode ? 'Off' : 'On'}
        </button>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Current Issues / Guide Lines
        </button>
      </div>

      <div
        style={{
          width: '750px',
          border: '2px solid black',
          padding: '0rem 2rem',
        }}
      >
        <Editor initialValue={value} setValue={setValue} readOnly={previewMode} />
      </div>
      <Modal
        visible={showModal}
        title="Issues / Guide Lines"
        onOk={(e): void => {
          return;
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={null}
      >
        <h4>Guide lines</h4>
        <ul className="issues-list">
          <li>
            The link element works like a hyperlink, you can change the text without affecting the
            url.
          </li>
          <li>
            Other than file and audio, all elements can be aligned after being selected (blue
            outline).
          </li>
        </ul>
        <h4>Current Issues</h4>
        <ul className="issues-list">
          <li>
            IFrame resize will not be saved if a blue outline is not present (not seletected). In
            order to select an Iframe, click on the <b>top part</b> of it when the cursor turns to a
            pointer. A blue outline means it&apos;s selected.
          </li>
          <li>
            After inserting a link (via pasting or link button), the cursor will be inside the link
            element. If there is no text on the <b>right</b> side of the link you have to use the
            arrow keys in order to move the cursor out the link element. A blue outline means the
            cursor is inside the link element.
          </li>
          <li>
            The link element works like a hyperlink, you can change the text without affecting the
            url.
          </li>
          <li>
            Other than file and audio, all elements can be aligned after being selected (blue
            outline).
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default Home;
