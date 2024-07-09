"use client"
import { useState } from 'react';

const CaesarCipherForm = ({ handleEncrypt, handleDecrypt }) => {
  const [plaintext, setPlaintext] = useState('');
  const [shift, setShift] = useState(3); // Default shift value

  const handleEncryptClick = () => {
    handleEncrypt(plaintext, shift);
  };

  const handleDecryptClick = () => {
    handleDecrypt(plaintext, shift);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Caesar Cipher</h2>
      <textarea
        className="w-full px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        rows="5"
        placeholder="Masukkan teks untuk dienkripsi atau didekripsi"
        value={plaintext}
        onChange={(e) => setPlaintext(e.target.value)}
      />
      <input
        type="number"
        className="w-full px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="Masukkan nilai pergeseran (shift)"
        value={shift}
        onChange={(e) => setShift(parseInt(e.target.value))}
      />
      <div className="flex justify-between">
        <button
          className="w-full px-4 py-2 mr-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={handleEncryptClick}
        >
          Enkripsi
        </button>
        <button
          className="w-full px-4 py-2 ml-2 bg-green-900 text-white rounded-lg hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={handleDecryptClick}
        >
          Dekripsi
        </button>
      </div>
    </div>
  );
};

export default CaesarCipherForm;
