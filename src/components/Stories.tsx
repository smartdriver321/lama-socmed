import Image from 'next/image'

export default async function Stories() {
	return (
		<div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
			<div className='flex gap-8 w-max'>
				{/* STORY */}
				<div className='flex flex-col items-center gap-2 cursor-pointer'>
					<Image
						src='https://images.pexels.com/photos/14475824/pexels-photo-14475824.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						alt=''
						width={80}
						height={80}
						className='w-20 h-20 rounded-full ring-2'
					/>
					<span>Ricky</span>
				</div>
				{/* STORY */}
				<div className='flex flex-col items-center gap-2 cursor-pointer'>
					<Image
						src='https://images.pexels.com/photos/14475824/pexels-photo-14475824.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						alt=''
						width={80}
						height={80}
						className='w-20 h-20 rounded-full ring-2'
					/>
					<span>Ricky</span>
				</div>
				{/* STORY */}
				<div className='flex flex-col items-center gap-2 cursor-pointer'>
					<Image
						src='https://images.pexels.com/photos/14475824/pexels-photo-14475824.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						alt=''
						width={80}
						height={80}
						className='w-20 h-20 rounded-full ring-2'
					/>
					<span>Ricky</span>
				</div>
				{/* STORY */}
				<div className='flex flex-col items-center gap-2 cursor-pointer'>
					<Image
						src='https://images.pexels.com/photos/14475824/pexels-photo-14475824.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						alt=''
						width={80}
						height={80}
						className='w-20 h-20 rounded-full ring-2'
					/>
					<span>Ricky</span>
				</div>
				{/* STORY */}
				<div className='flex flex-col items-center gap-2 cursor-pointer'>
					<Image
						src='https://images.pexels.com/photos/14475824/pexels-photo-14475824.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						alt=''
						width={80}
						height={80}
						className='w-20 h-20 rounded-full ring-2'
					/>
					<span>Ricky</span>
				</div>
			</div>
		</div>
	)
}
