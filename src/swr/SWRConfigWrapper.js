import React from 'react';
import { SWRConfig } from 'swr';
import loadData from '../db/LoadData';

export default function SWRConfigWrapper({ children }) {
    return (
        <SWRConfig
            value={{
                fetcher: loadData,  
                revalidateOnFocus: false, 
      

             }}
        >
            {children}
        </SWRConfig>
    );
}
