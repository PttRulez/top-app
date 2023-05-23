import {Button, Htag, P, Rating, Tag} from '../components';
import {useState} from 'react';
import {withLayout} from '../layout/Layout';
import axios from 'axios';
import {GetStaticProps} from 'next';
import {MenuItem} from '../interfaces/menu.interface';

function Home({menu}: HomeProps) {
	const [rating, setRating] = useState<number>(4);

	return (
		<div>
			<Htag tag="h1">Заголовок 1</Htag>
			<Button appearance="primary" arrow="right">Кнопка</Button>
			<Button appearance="ghost" arrow="right">Ghost</Button>
			<P size="l">Большой</P>
			<P>Средний</P>
			<P size="s">Маленький</P>
			<Tag size="s">Small</Tag>
			<Tag size="m" color="red">Medium</Tag>
			<Tag size="s" color="green">green</Tag>
			<Tag size="m" color="primary">Primary</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating}/>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
