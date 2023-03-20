
import { feedback } from "../constants"
import styles from "../style"
import {FeedbackCard} from './FeedbackCard'

export const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mx-auto`}>

      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full feedback-container realive z-[1]">
        {feedback.map(card => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}
