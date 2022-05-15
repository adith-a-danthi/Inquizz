import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Anime',
    categoryImage:
      'https://preview.redd.it/i656bv0545961.jpg?width=640&crop=smart&auto=webp&s=ea70795e61600b087394c15e3e7c610e825bb9c4',
    description: '',
  },
  {
    _id: uuid(),
    categoryName: 'TV Shows',
    categoryImage:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: '',
  },
  {
    _id: uuid(),
    categoryName: 'Sports',
    categoryImage:
      'https://images.unsplash.com/photo-1602357280104-742c517a1d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80',
    description: '',
  },
];
