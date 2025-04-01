const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const apiManager = {
  baseUrl: API_BASE_URL,
  endpoint: API_ENDPOINT,

  async fetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${this.endpoint}${path}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};
