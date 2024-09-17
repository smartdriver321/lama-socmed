import prisma from '@/lib/client'
import CommentList from './CommentList'

export default async function Comments({ postId }: { postId: number }) {
	const comments = await prisma.comment.findMany({
		where: {
			postId,
		},
		include: {
			user: true,
		},
	})
	return (
		<div className=''>
			{/* WRITE */}
			<CommentList comments={comments} postId={postId} />
		</div>
	)
}
