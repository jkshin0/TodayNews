import axios from 'axios';

export default async function handler(req, res) {
  try {
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxbohmPofT_-jvEE7Md9kQDBn5-3-hpaEA4GISZMLRBxuWLoaPCnbDixskf3ObyD6kkzQ/exec';
    
    const response = await axios.get(GOOGLE_SHEET_URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    // 응답 데이터 확인 및 로깅
    console.log('API Response:', response.data);
    
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Sheets API Error:', error.response?.data || error.message);
    return res.status(500).json({ 
      status: 'error',
      message: error.message,
      details: error.response?.data 
    });
  }
}
