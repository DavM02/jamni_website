
import AnimButton from '../buttons/AnimButton/AnimButton'
import { useNavigate } from 'react-router-dom'
import SmoothAppearance from '../SmoothAppearance'
export default function NoResults({ level }) {
  const navigate = useNavigate()
  return (
    <SmoothAppearance key={'no-results'} className="no-results center-gr">
      <h3 className="up-case">no results found</h3>
      <AnimButton onClick={() => navigate(level ?? ".")}>go back</AnimButton>
    </SmoothAppearance>
  )
}
