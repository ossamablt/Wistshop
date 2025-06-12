import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const formDataToCloudinary = new FormData();
    formDataToCloudinary.append('file', new Blob([buffer], { type: file.type }));
    formDataToCloudinary.append('api_key', '185412296986673');
    formDataToCloudinary.append('timestamp', Math.floor(Date.now() / 1000).toString());
    formDataToCloudinary.append('cloud_name', 'dyli6fvzh');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dyli6fvzh/image/upload`,
      {
        method: 'POST',
        body: formDataToCloudinary,
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || 'Upload failed' }, { status: response.status });
    }

    return NextResponse.json({ url: data.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
} 