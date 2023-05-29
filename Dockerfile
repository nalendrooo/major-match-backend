# Dockerfile

# Menggunakan image dasar Node.js
FROM node:14

# Menentukan direktori kerja di dalam kontainer
WORKDIR /src

# Menyalin file package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Menginstal dependensi yang diperlukan
RUN npm install

# Menyalin semua file aplikasi ke direktori kerja
COPY . .

# Menentukan port yang akan digunakan oleh aplikasi
EXPOSE 5000

# Menjalankan perintah untuk menjalankan aplikasi
CMD ["node", "start"]
