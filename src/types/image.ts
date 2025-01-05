type Image = {
  id: string; // Unique identifier for the image
  created_at: string; // Timestamp of image creation
  updated_at: string; // Timestamp of last update
  width: number; // Image width
  height: number; // Image height
  color: string; // Dominant color of the image (Hex code)
  blur_hash: string; // A placeholder for the image
  urls: {
    raw: string; // The raw image URL
    full: string; // Full-size image URL
    regular: string; // Regular-size image URL (typically used for displaying)
    small: string; // Small-size image URL
    thumb: string; // Thumbnail-size image URL
  };
  links: {
    self: string; // Link to the image on Unsplash
    html: string; // HTML link to the image
    download: string; // Direct download link for the image
    download_location: string; // Link to the image download location
  };
  user: {
    id: string; // User ID of the image creator
    username: string; // Username of the image creator
    name: string; // Full name of the image creator
    portfolio_url: string; // URL to the user’s portfolio
    avatar_urls: {
      small: string; // URL to small avatar image
      medium: string; // URL to medium avatar image
      large: string; // URL to large avatar image
    };
  };
};

export default Image;
