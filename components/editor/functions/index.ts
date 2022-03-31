import { Editor, Transforms, Path, Element, Range } from 'slate';
import imageExtensions from 'image-extensions';
import isUrl from 'is-url';
import { CustomElement, LinkElement } from '@/utils/editor/types';
import ToggleFunctions from '@/components/editor/toggle-functions';

export const isImageUrl = (url: string): boolean => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();
  if (!ext) return false;
  return imageExtensions.includes(ext);
};

export const insertImage = (editor: Editor, url: string | ArrayBuffer | null): void => {
  const text = { text: '' };
  const image: CustomElement = {
    type: 'image',
    url,
    size: {
      width: 400,
      height: 400,
    },
    children: [text],
  };
  Transforms.insertNodes(editor, image);
};

export const insertFile = (
  editor: Editor,
  url: string | ArrayBuffer | null,
  name: string,
): void => {
  const text = { text: '' };
  const file: CustomElement = {
    type: 'file',
    url,
    name,
    children: [text],
  };
  Transforms.insertNodes(editor, file);
};

export const insertAudio = (editor: Editor, url: string | ArrayBuffer | null): void => {
  const text = { text: '' };
  const audio: CustomElement = { type: 'audio', url, children: [text] };
  Transforms.insertNodes(editor, audio);
};

export const insertIframe = (editor: Editor, url: string | ArrayBuffer | null): void => {
  const text = { text: '' };
  const iframe: CustomElement = {
    type: 'iframe',
    url,
    size: {
      width: 400,
      height: 200,
    },
    children: [text],
  };
  Transforms.insertNodes(editor, iframe);
};

export const isIframe = (url: string): boolean => {
  const startsWithIframe = url.startsWith('<iframe');
  const endsWithIframe = url.endsWith('</iframe>');
  if (startsWithIframe && endsWithIframe) {
    return true;
  }
  return false;
};

export const removeElement = (editor: Editor, path: Path): void => {
  Transforms.removeNodes(editor, { at: path });
};
