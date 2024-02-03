// src/newsApi.ts

import axios from 'axios';

const apiKey = '98fedc774bc847dda9f7bbf289fdcf90'; // Replace with your News API key

export const country = 'us';

interface NewsApiParams {
  category?: string;
}

export const getNews = async (params: NewsApiParams) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country,
        apiKey,
        category: params.category,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
