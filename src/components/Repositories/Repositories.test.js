import Repositories from './Repositories.svelte';
import { render } from '@testing-library/svelte';

describe('Repositories Component', () => {
	it('should render with no repositories', () => {
		const { getByText } = render(Repositories, {
			repositories: [],
		});

		expect(getByText('NoRepository')).toBeInTheDocument();
	});

	it('should render with repositories', () => {
		const { getByText } = render(Repositories, {
			repositories: [
				{ id: '1', checked: true, name: 'name' },
				{ id: '2', checked: false, name: 'name2' },
			],
		});

		expect(getByText('name')).toBeInTheDocument();
		expect(getByText('name2')).toBeInTheDocument();
	});
});
