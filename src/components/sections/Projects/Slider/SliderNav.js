import arrowLeft from '../../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../../assets/icons/arrow-right.svg';
import useDebounce from '../../../../hooks/useDebounce';
import useMediaQ from '../../../../hooks/useMediaQ';
const SliderNav = ({ onPrev, onNext, transformIndex, indicator, setIndicator }) => {
 
    const debouncedFunction = useDebounce();
    

    const handleNextIndicator = () => {
        debouncedFunction(1000, () => {
            onNext()
            setIndicator((prev) => (prev + 1));
        });
    };

    const handlePrevIndicator = () => {
        debouncedFunction(1000, () => {
            onPrev()
            setIndicator((prev) => (prev - 1));
        });
    };
    const query = useMediaQ('(max-width: 769px)');
 
    return (
        <div className='row center-x'>
            <div className='slider-nav row center-y s-between gap-20'>
                <button
                    disabled={transformIndex === (query === false ? 5 : 0)}
                    type='button'
                    className='center-gr'
                    onClick={() => {
                        handlePrevIndicator();
                    }}
                >
                    <img width={8.5} src={arrowLeft} alt="left-arrow" />
                </button>
                <div className='slider-indicator'>
                    <div
                        className='indicator-line'
                        style={{ left: query === false ? `calc(40% + ${Math.floor(Math.min(40 / 5 * indicator, 40))}%)` : `${Math.floor(Math.min(100 / 16 * indicator, 80))}%` }}
                    ></div>
                </div>
                <button
                    disabled={transformIndex === (query === false ? -5 : -13)}

                    type='button'
                    className='center-gr'
                    onClick={() => {
                        handleNextIndicator();
                    }}
                >
                    <img width={8.5} src={arrowRight} alt="right-arrow" />
                </button>
            </div>
        </div>
    );
};

export default SliderNav;
