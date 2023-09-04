export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch the data.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error fetching the data: ', error);
        throw error;
    }
}