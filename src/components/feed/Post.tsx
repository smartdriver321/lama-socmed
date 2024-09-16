import Image from 'next/image'
import Comments from './Comments'

export default function Post() {
	return (
		<div className='flex flex-col gap-4'>
			{/* USER */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Image
						src='https://images.pexels.com/photos/28201015/pexels-photo-28201015/free-photo-of-a-large-rock-on-a-hill-with-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						width={40}
						height={40}
						alt=''
						className='w-10 h-10 rounded-full'
					/>
					<span className='font-medium'>Emily Armstrong</span>
				</div>
				<Image src='/more.png' alt='' width={16} height={16} />
			</div>
			{/* DESC */}
			<div className='flex flex-col gap-4'>
				<div className='w-full min-h-96 relative'>
					<Image
						src='https://images.pexels.com/photos/28318918/pexels-photo-28318918/free-photo-of-a-picnic-table-with-a-camera-cheese-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						fill
						alt=''
						className='object-cover rounded-md'
					/>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
					maxime rem id aliquam veritatis sunt officiis nihil enim facere.
					Laudantium reiciendis aliquid quod quam amet deserunt iure ea debitis.
					Delectus!
				</p>
			</div>
			{/* INTERACTION */}
			<div className='flex items-center justify-between text-sm my-4'>
				<div className='flex gap-8'>
					<div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
						<Image
							src='/like.png'
							width={16}
							height={16}
							alt=''
							className='cursor-pointer'
						/>
						<span className='text-gray-300'>|</span>
						<span className='text-gray-500'>
							<span className='hidden md:inline'> Likes</span>
						</span>
					</div>

					<div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
						<Image
							src='/comment.png'
							width={16}
							height={16}
							alt=''
							className='cursor-pointer'
						/>
						<span className='text-gray-300'>|</span>
						<span className='text-gray-500'>
							<span className='hidden md:inline'> Comments</span>
						</span>
					</div>
				</div>

				<div className=''>
					<div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
						<Image
							src='/share.png'
							width={16}
							height={16}
							alt=''
							className='cursor-pointer'
						/>
						<span className='text-gray-300'>|</span>
						<span className='text-gray-500'>
							<span className='hidden md:inline'> Share</span>
						</span>
					</div>
				</div>
			</div>
			<Comments />
		</div>
	)
}
