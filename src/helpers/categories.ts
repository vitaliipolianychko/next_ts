export interface ICategory {
    label: string,
    value: string,
}

const categories: ICategory[] = [
    { label: 'Food', value: 'food' },
    { label: 'Travel tickets', value: 'travelTickets' },
    { label: 'Taxi', value: 'taxi' },
    { label: 'Restaurants', value: 'restaurants' },
    { label: 'Beauty and Health', value: 'beauty' },
    { label: 'Sport', value: 'sport' },
    { label: 'shoes and clothes', value: 'clothes' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Rent apartment', value: 'apartments' },
    { label: 'Education', value: 'education' },
    { label: 'Donation', value: 'donation' },
    { label: 'Utilities and internet', value: 'utilities' },
    { label: 'Alcohol', value: 'alcohol' }
];

export default categories
