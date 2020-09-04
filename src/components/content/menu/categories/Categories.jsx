import React, { useState } from 'react';

let Categories = ({ items, onClickItem }) => {
	const [activeItem, setActiveItem] = useState(null)

	const onSelectItem = (index) => {
		setActiveItem(index)
	}

	return (
		<div className="categories">
			<ul>
				<li className="">Все</li>
				{
					items.map((item, index) => (
						<li className={activeItem === index ? 'active' : ''} onClick={() => { onSelectItem(index) }} key={`${item}_${index}`}>{item}</li>
					))
				}
			</ul>
		</div>
	)
}

export default Categories;