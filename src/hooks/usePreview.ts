import { useState, useEffect } from "react";

/**
 * `usePreview` - Generates a preview URL for a given file.
 * @param file The file object (e.g., image file) to preview.
 * @returns A preview URL that can be used as the `src` in an <img> tag.
 */
export function usePreview(file?: File): string | null {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return previewUrl;
}
