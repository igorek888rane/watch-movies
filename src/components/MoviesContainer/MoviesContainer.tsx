import React from 'react';
import {PopUp} from '../UI/PopUp/PopUp';
import Filters from "@/components/Filters/Filters";

const MoviesContainer = () => {
    return (
        <div className={'container'}>
                <PopUp/>
                <Filters/>
        </div>
    )
};

export default MoviesContainer;
