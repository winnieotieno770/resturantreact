import React from 'react'

function  Menu() {
    return (
        <div className='menuu'>
            	<h2 class="menu-content__h2 h2">menu</h2>
		<ul class="menu-list menu-content__menu-list">
			<li class="menu-list__meal-time">Starter
				<ul class="menu-list__meals-list">
					<li class="menu-list__meal">Fall Cheese Board</li>
					<li class="menu-list__meal">feturing Fromage Fort</li>
				</ul>
			</li>
			<li class="menu-list__meal-time">Entrees
				<ul class="menu-list__meals-list">
					<li class="menu-list__meal">Mini Pampkin & White Bean</li>
					<li class="menu-list__meal">Pot pies</li>
				</ul>
			</li>
			<li class="menu-list__meal-time">Desert
				<ul class="menu-list__meals-list">
					<li class="menu-list__meal">Candied Cranberry Amaretto</li>
					<li class="menu-list__meal">Shortbread Slices</li>
				</ul>
			</li>
		</ul>
        </div>
    )
}

export default Menu
