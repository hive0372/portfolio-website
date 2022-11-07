import LaunchIcon from '@material-ui/icons/Launch'
import './CertificationContainer.css'

const CertificationContainer = ({ certification }) => (
  <div className='certification'>
    <h3>{certification.name}</h3>

    <p className='certification__description'>{certification.description}</p>
    {certification.link && (
      <a
        href={certification.link}
        aria-label='certification link'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default CertificationContainer
