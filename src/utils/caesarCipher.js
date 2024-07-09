export const caesarEncrypt = (plaintext, shift) => {
    return plaintext
        .toUpperCase()
        .replace(/[A-Z]/g, (char) =>
            String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65)
        );
};

export const caesarDecrypt = (ciphertext, shift) => {
    return ciphertext
        .toUpperCase()
        .replace(/[A-Z]/g, (char) =>
            String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65)
        );
};
