<<<<<<< HEAD
import React, { Children } from 'react'

const Layout = ({children}) => {
  return (
    <div className='Layout'>
        {children}
    </div>
  )
}

export default Layout;
=======
import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
>>>>>>> 5c68a278acbabd781b72eeb9ac23c04a10359c94
