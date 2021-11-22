import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import {Htag, P, Tag} from "../components";
import Button from "../components/Button/Button";
import Rating from "../components/Rating/Rating";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Большой</P>
            <P>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='s' color='primary'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag size='s' color='green'>Green</Tag>
            <Tag size="m" color='primary'>Green</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
            <Input placeholder="тест"/>
            <Textarea placeholder="тест area"/>

        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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

