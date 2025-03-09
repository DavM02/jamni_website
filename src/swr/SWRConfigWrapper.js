
import { SWRConfig } from 'swr';
import loadData from '../db/loadData';

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
