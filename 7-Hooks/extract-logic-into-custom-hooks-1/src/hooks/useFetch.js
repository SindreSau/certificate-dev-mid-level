import { useEffect, useState } from 'react';

export default function useFetch(fetchFunction, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            setIsLoading(true);
            if (!ignore) {
                setData(await fetchFunction());
            }
            setIsLoading(false);
        }

        fetchData();
        return () => {
            ignore = true;
        };
    }, [fetchFunction]);

    return [data, setData, isLoading];
}
