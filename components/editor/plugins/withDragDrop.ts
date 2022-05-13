import { Editor } from 'slate';
import { isImageUrl, insertImage, insertFile, insertAudio } from '@/components/editor/helper';
import { ElementEnums } from '@/utils/editor/enums';
import { uploadFile } from '@/service/storage';

const WithDragDrop = (editor: Editor): Editor => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element): boolean => {
    return element.type === ElementEnums.Image ? true : isVoid(element);
  };

  editor.insertData = async (data): Promise<void> => {
    const text = data.getData('text/plain');
    const { files } = data;
    const file = files.length > 0 ? files[0] : null;

    if (file) {
      const reader = new FileReader();
      const [mime] = file.type.split('/');
      if (mime === 'image') {
        const url = await uploadFile(file);
        insertImage(editor, url);
      } else if (mime === 'application') {
        const url = await uploadFile(file);
        insertFile(editor, url, file.name);
      } else if (mime === 'audio') {
        const url = await uploadFile(file);
        insertAudio(editor, url);
      } else {
        console.error('Unsupported file type!');
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export default WithDragDrop;
