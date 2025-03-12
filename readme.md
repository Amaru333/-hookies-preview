# 🚀 @hookies/preview

[![npm version](https://img.shields.io/npm/v/@hookies/preview?color=blue)](https://www.npmjs.com/package/@hookies/preview)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue)](https://www.typescriptlang.org/)
[![GitHub issues](https://img.shields.io/github/issues/Amaru333/-hookies-preview)](https://github.com/Amaru333/-hookies-preview/issues)

A lightweight **React Hook** for generating previews of images. Easily generate a preview URL for uploaded files without manually handling `FileReader` or `URL.createObjectURL`.

---

## 📖 Table of Contents

- [📦 Installation](#-installation)
- [🔥 Usage](#-usage)
- [⚙ API Reference](#-api-reference)
- [🛠 Advanced Features (Coming Soon)](#-advanced-features-coming-soon)
- [🚀 Contributing](#-contributing-to-hookies-preview)
- [📜 License](#-license)
- [⭐ Support & Feedback](#-support--feedback)

---

## 📦 Installation

Install the package using npm:

```bash
npm install @hookies/preview
```

or using yarn:

```bash
yarn add @hookies/preview
```

---

## 🔥 Usage

Import the `usePreview` hook to generate a **live preview of an uploaded image file**.

### **Basic Example: Image Preview**

```tsx
import React, { useState } from "react";
import { usePreview } from "@hookies/preview";

const ImageUploader = () => {
  const [data, setData] = useState<{ image?: File }>({});
  const previewImageUrl = usePreview(data.image);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setData({ image: event.target.files[0] });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewImageUrl && <img src={previewImageUrl} alt="Preview" width="200" />}
    </div>
  );
};

export default ImageUploader;
```

### **How It Works**

1. The user selects an image file.
2. `usePreview(data.image)` generates a **temporary URL** using `URL.createObjectURL(file)`.
3. The preview URL updates dynamically, and when the file changes, the previous preview URL is revoked.

---

## ⚙ API Reference

### `usePreview(file?: File): string | null`

Generates a **temporary preview URL** for an uploaded file.

#### **Parameters**

- **`file`** _(File | undefined)_ → The file for which the preview should be generated.

#### **Returns**

- A preview URL as a string (`string | null`), which can be used as the `src` for an `<img>` tag.

#### **Example**

```tsx
const previewUrl = usePreview(imageFile);
console.log(previewUrl); // blob:http://example.com/1234-5678
```

---

## 🛠 **Advanced Features (Coming Soon)**

- ✅ **Preview for videos and PDFs**
- ✅ **Base64 encoding option**
- ✅ **Drag-and-drop file preview support**
- ✅ **Multiple file previews**
- ✅ **Blob cleanup optimization**

---

## 🚀 **Contributing to Hookies Preview**

🎉 Thank you for considering contributing to **Hookies Preview**!  
We welcome all contributions, whether it's **bug fixes, feature additions, documentation updates, or tests**.

### **1️⃣ Fork the Repository**

- Click on the **"Fork"** button in the top-right corner of the [repository](https://github.com/Amaru333/-hookies-preview).
- Clone your forked repository:

  ```bash
  git clone https://github.com/YOUR-USERNAME/-hookies-preview.git
  cd -hookies-preview
  ```

### **2️⃣ Set Up the Project**

- Install dependencies:
  ```bash
  npm install
  ```
- Build the project:
  ```bash
  npm run build
  ```

### **3️⃣ Create a New Branch**

Before making any changes, create a new branch:

```bash
git checkout -b feature/your-feature-name
```

or for bug fixes:

```bash
git checkout -b fix/your-fix-name
```

### **4️⃣ Make Changes and Test**

- Implement your feature or fix.
- Ensure the build succeeds:
  ```bash
  npm run build
  ```
- If you modified TypeScript files, check types:
  ```bash
  tsc --noEmit
  ```

### **5️⃣ Commit and Push**

- Commit your changes:
  ```bash
  git commit -m "✨ Add new feature: Support for multiple file previews"
  ```
- Push your changes:

  ```bash
  git push origin feature/your-feature-name
  ```

- Open a **Pull Request (PR)** and submit your changes! 🚀

---

## 📜 **License**

This project is licensed under the **ISC License**.

---

## ⭐ **Support & Feedback**

If you like this project, give it a ⭐ on [GitHub](https://github.com/Amaru333/-hookies-preview)!  
For issues or feature requests, open an [issue](https://github.com/Amaru333/-hookies-preview/issues).
