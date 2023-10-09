import { motion } from 'framer-motion'
import { useState, useEffect, useRef, RefObject } from 'react'
import './motion.scss'

import corte1 from './assets/corte1.jpg'
import corte2 from './assets/corte2.jpg'
import corte3 from './assets/corte3.jpg'
import corte4 from './assets/corte4.jpg'

const cortes = [corte1, corte2, corte3, corte4]

function Corte() {
  const carousel: RefObject<HTMLDivElement> = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [])

  return (
    <div className='corte'>

      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
        <motion.div className="inner"
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration0: 0.8 }}
        >

          {cortes.map(image => (
            <motion.div className='item' key={image} >
              <img src={image} alt='texto'/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Corte;