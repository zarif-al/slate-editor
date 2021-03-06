import { Editor, Transforms, Path } from 'slate';
import imageExtensions from 'image-extensions';
import isUrl from 'is-url';
import { CustomElement } from '@/utils/editor/types';
import { ElementEnums } from '@/utils/editor/enums';

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
    type: ElementEnums.Image,
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
    type: ElementEnums.File,
    url,
    name,
    children: [text],
  };
  Transforms.insertNodes(editor, file);
};

export const insertAudio = (editor: Editor, url: string | ArrayBuffer | null): void => {
  const text = { text: '' };
  const audio: CustomElement = { type: ElementEnums.Audio, url, children: [text] };
  Transforms.insertNodes(editor, audio);
};

export const insertIframe = (editor: Editor, url: string | ArrayBuffer | null): void => {
  const text = { text: '' };
  const iframe: CustomElement = {
    type: ElementEnums.IFrame,
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

export function isAcceptableFormat(
  acceptableFormats: string,
  event: React.ChangeEvent<HTMLInputElement>,
): boolean {
  const formats = acceptableFormats.split(',');
  const file = event.currentTarget.files && event.currentTarget.files[0];
  if (file) {
    const splitted = file.name.split('.');
    const fileExt = '.' + splitted[splitted.length - 1];
    if (formats.includes(fileExt)) {
      return true;
    }
  }
  return false;
}
