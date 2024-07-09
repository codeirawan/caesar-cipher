"use client"
import { useState } from 'react';
import CaesarCipherForm from '../components/CaesarCipherForm';
import { caesarEncrypt, caesarDecrypt } from '../utils/caesarCipher';

const IndexPage = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = (plaintext, shift) => {
    const encrypted = caesarEncrypt(plaintext, shift);
    setEncryptedText(encrypted);
  };

  const handleDecrypt = (ciphertext, shift) => {
    const decrypted = caesarDecrypt(ciphertext, shift);
    setDecryptedText(decrypted);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <CaesarCipherForm
          handleEncrypt={handleEncrypt}
          handleDecrypt={handleDecrypt}
        />
        <div className="mt-6">
          {encryptedText && (
            <div className="mb-4 p-4 bg-gray-100 rounded-lg">
              <strong className='text-gray-950'>Teks Terenkripsi:</strong>
              <pre className="text-gray-800">{encryptedText}</pre>
            </div>
          )}
          {decryptedText && (
            <div className="p-4 bg-gray-100 rounded-lg">
              <strong className='text-gray-950'>Teks Terdekripsi:</strong>
              <pre className="text-gray-800">{decryptedText}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
