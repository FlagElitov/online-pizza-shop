import React from 'react'
import Categories from './categories/Categories';
import SortPopup from './sortPopup/SortPopup';

const Menu = () => {
	return (
		<div className="content__top">
			<Categories onClickItem={(item) => { alert(item) }} items={[
				'Мясные',
				'Вегетарианская',
				'Гриль',
				'Острые',
			]} />
			<SortPopup />
		</div>
	)
}

export default Menu;