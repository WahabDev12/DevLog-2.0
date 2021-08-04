import Skeleton from 'react-loading-skeleton';

const LoadSkeleton = () => {
    return ( 
        <>
   

    <div className="tweet-wrap">
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
        <Skeleton  count={7}/>
    
    </div>

    <div className="tweet-wrap">
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
        <Skeleton  count={7}/>
    
    </div>

    <div className="tweet-wrap">
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
        <Skeleton  count={7}/>
    
    </div>

    

    </>
    );
}
 
export default LoadSkeleton;