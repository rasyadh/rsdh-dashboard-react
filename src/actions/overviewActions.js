import { FETCH_OVERVIEWS, UPDATE_OVERVIEWS } from './types';

export const fetchOverviews = () => dispatch => {
    dispatch({
        type: FETCH_OVERVIEWS,
        payload: {
            categories: {
                Book: { name: 'Book', icon: 'book', value: 3, color: 'primary' },
                Author: { name: 'Author', icon: 'people', value: 3, color: 'success' },
                Fiction: { name: 'Fiction', icon: 'color-wand', value: 2, color: 'warning' },
                'Non-Fiction': { name: 'Non-Fiction', icon: 'quote', value: 1, color: 'danger' }
            },
            'sales': {
                name: 'Sales Report',
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Monthly Sales',
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        }
    });
}

export const updateOverviews = categories => dispatch => {
    dispatch({
        type: UPDATE_OVERVIEWS,
        payload: categories
    });
}