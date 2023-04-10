export interface ICategory {
    label: string,
    value: string,
}

const categories: ICategory[] = [
    { label: 'Food', value: 'food' },
    { label: 'Travel tickets', value: 'travelTickets' },
    { label: 'Taxi', value: 'taxi' },
    { label: 'Restaurants', value: 'restaurants' },
    { label: 'Beauty', value: 'beauty' },
    { label: 'Sport', value: 'sport' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Rent apartment', value: 'apartments' },
];

export default categories
