import moment from 'moment';

const expenses = [
	{
		id: '1',
		description: 'rent bill',
		amount: 100,
		createdAt: 0
	},
	{
		id: '2',
		description: 'water bill',
		amount: 500,
		createdAt: moment(0).subtract(1, 'day').valueOf()
	},
	{
		id: '3',
		description: 'cleaning bill',
		amount: 30,
		createdAt: moment(0).add(5, 'days').valueOf()
	}
];

export default expenses;
