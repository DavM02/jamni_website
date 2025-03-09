
import SmoothAppearance from '../SmoothAppearance'
export default function DataLoading({ ...props }) {
    return (
        <SmoothAppearance {...props} key={'loading'}>
            <div className="loading row center-x center-y">
                <h2>Loading...</h2>
            </div>
        </SmoothAppearance>
    )
}
