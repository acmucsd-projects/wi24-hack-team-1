import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar/navbar'
import CalendarGreeting from './calendar/page'
import JournalGreeting from './journal/page'
import Emoji from './components/Emoji/emoji'

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
    
  )
}
