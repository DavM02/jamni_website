
import SmoothAppearance from '../SmoothAppearance'
export default function FetchError({ message }) {
  return (
    <SmoothAppearance key={'error'} className="error row center-x center-y">
      <h2 className="text-center">{message}</h2>
    </SmoothAppearance>
  )
}
