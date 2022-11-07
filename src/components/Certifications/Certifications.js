import uniqid from 'uniqid'
import { certifications } from '../../portfolio'
import CertificationContainer from '../CertificationContainer/CertificationContainer'
import './Certifications.css'

const Certifications = () => {
  if (!certifications.length) return null

  return (
    <section id='certifications' className='section certifications'>
      <h2 className='section__title'>Certifications</h2>

      <div className='certifications__grid'>
        {certifications.map((certification) => (
          <CertificationContainer key={uniqid()} certification={certification} />
        ))}
      </div>
    </section>
  )
}

export default Certifications