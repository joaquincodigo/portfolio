import React from 'react';

const ProfilePhoto = () => {
	return (
		<div className='row mt-4 mb-4'>
			<img
				className="
					rounded-circle
					col-4
					mx-auto
					mt-5
					p-0
					"
				src="/images/ProfilePhoto.png"
				alt="Profile"
			/>
		</div>
	);
};

export default ProfilePhoto;
