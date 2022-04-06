export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'slate-editor');

  const data = await fetch('https://api.cloudinary.com/v1_1/zarifspace/auto/upload', {
    method: 'POST',
    body: formData,
  }).then((r) => r.json());

  return data.secure_url;
}
