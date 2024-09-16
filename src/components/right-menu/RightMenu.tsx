import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ad from '../Ad'

export default function RightMenu({ userId }: { userId?: string }) {
	return (
		<div className='flex flex-col gap-6'>
			{userId ? (
				<>
					<UserInfoCard userId={userId} />
					<UserMediaCard userId={userId} />
				</>
			) : null}
			<FriendRequests />
			<Birthdays />
			<Ad size='md' />
		</div>
	)
}
