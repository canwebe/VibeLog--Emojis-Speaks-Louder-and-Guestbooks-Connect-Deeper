import moment from 'moment'
import Link from 'next/link'

interface VibesTypes {
  desc: string
  tags: string[]
  code: string
  urls: {
    svg: string
  }
}
interface Props {
  vibes: VibesTypes[]
  isFeed: boolean
}

export default function VibesList({ vibes, isFeed }: Props) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-y-7">
      {vibes.map((vibe, i) => (
        <VibeItem data={vibe} key={i} isFeed={isFeed} />
      ))}
    </div>
  )
}

const VibeItem = ({ data, isFeed }: { data: VibesTypes; isFeed: boolean }) => {
  return (
    <div className="text-7xl flex flex-col justify-center w-full text-center">
      <span className="mb-2">
        {String.fromCodePoint(parseInt(data.code, 16))}
      </span>
      {isFeed ? (
        <Link href="/profile" className="text-xs font-medium">
          Golam Rabbani
        </Link>
      ) : null}
      <p className="text-[10px] opacity-80 mt-[1px]">{moment().fromNow()}</p>
    </div>
  )
}
