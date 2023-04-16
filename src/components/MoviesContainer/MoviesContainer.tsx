import React from 'react';
import { PopUp } from '../UI/PopUp/PopUp';
import Filters from '@/components/Filters/Filters';
import { Cart } from '../Cart/Cart';

const MoviesContainer = () => {
  return (
    <div>
      <div className={'container'}>
        <PopUp />
        <Filters />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default MoviesContainer;
