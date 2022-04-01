import { Editor } from 'slate';
import { isImageUrl, insertImage } from '@/components/editor/helper';
import { ElementEnums } from '@/utils/editor/enums';
const withImages = (editor: Editor): Editor => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element): boolean => {
    return element.type === ElementEnums.Image ? true : isVoid(element);
  };

  editor.insertData = (data): void => {
    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export default withImages;
