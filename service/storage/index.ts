import { toast } from 'react-toastify';

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  const id = toast.loading('Uploading...', {
    position: toast.POSITION.TOP_CENTER,
  });

  formData.append('file', file);
  formData.append('upload_preset', 'slate-editor');

  const data = await fetch('https://api.cloudinary.com/v1_1/zarifspace/auto/upload', {
    method: 'POST',
    body: formData,
  }).then((r) => r.json());

  toast.update(id, {
    render: 'Upload Complete',
    type: 'success',
    isLoading: false,
    autoClose: 1000,
  });

  return data.secure_url;
}
