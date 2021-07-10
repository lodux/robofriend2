import React from 'react';


const Searchbox =({searchfield, searchchange}) =>{
	return(
	 <div>
		<input
		className='pa2 ba b--green bg-lightest-blue'
		type='search' 
		placeholder="robofriend"
		onChange={searchchange} 
		/>
	 </div>
	);

}

export default Searchbox;