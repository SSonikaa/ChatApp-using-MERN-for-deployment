import React from 'react';
import './MessageSkeleton.css';

const MessageSkeleton = () => {
	return (
		<>
			<div className="skeleton-container">
				<div className="flex gap-3 items-center">
					<div className="skeleton avatar-skeleton"></div>
					<div className="flex flex-col gap-1">
						<div className="skeleton text-skeleton"></div>
						<div className="skeleton text-skeleton"></div>
					</div>
				</div>
				<div className="flex gap-3 items-center justify-end">
					<div className="flex flex-col gap-1">
						<div className="skeleton text-skeleton"></div>
					</div>
					<div className="skeleton avatar-skeleton"></div>
				</div>
			</div>
		</>
	);
};

export default MessageSkeleton;
