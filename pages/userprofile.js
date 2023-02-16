import {useSession,getSession} from 'next-auth/react'; 


export default function UserProfile(){

	const {data:session,status} = useSession()
    if(status==='authenticated')
	return (
		<div className="cont">
			<h3>Hello</h3>
			<h3>Name : {session.user.name} </h3>
			<h3>Email : {session.user.email} </h3>
		</div>
	)

}

export const getServerSideProps = async (context)=>{
	const session = await getSession(context);

	if(!session){
		return {
			redirect: {
				destination:'/'
			}
		}
	}

	return {
		props:{
			session
		}
	}
}