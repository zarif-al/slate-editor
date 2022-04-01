import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Editor from 'components/editor';
import { CustomText, CustomElement } from 'utils/editor/types';
import { Descendant } from 'slate';
import { ElementEnums } from '@/utils/editor/enums';
const Home: NextPage = () => {
  const [previewMode, setPreviewMode] = useState(false);

  const initialValue: CustomElement[] = [
    {
      type: ElementEnums.Paragraph,
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  //Initialvalue State
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
        /*      padding: '0 2rem', */
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
      <button
        onClick={() => {
          setPreviewMode(!previewMode);
        }}
      >
        Preview Mode {previewMode ? 'Off' : 'On'}
      </button>
      <div
        style={{
          width: '800px',
          border: '2px solid black',
          /*  padding: '0rem 2rem', */
        }}
      >
        <Editor initialValue={value} setValue={setValue} readOnly={previewMode} />
      </div>
    </div>
  );
};

export default Home;
