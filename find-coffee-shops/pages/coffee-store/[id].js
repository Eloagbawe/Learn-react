import { useRouter } from 'next/router'
import Link from 'next/link'

const coffeeStore = () => {
    const router = useRouter()
    console.log('router', router)
  return (
    <div>
    Coffee Store Page {router.query.id}
    <Link href="/"><a>Back to Home</a></Link>
    </div>
  )
}

export default coffeeStore