import classname from "classname";


const Skeleton = ({ time, className }) => {
    const outerClassName = classname(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassName = classname(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );
    const boxes = Array(time).fill(0).map((_, i) => {
        return <div key={i} className={outerClassName}>
            <div className={innerClassName}/>
        </div>
    })
    return boxes;
};

export default Skeleton