import Skeleton from 'react-loading-skeleton';

const LoadSkeleton = () => {
    return ( 
        <>
   

    <div className="tweet-wrap" style={{height:"335px"}}>
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
                    <div style={{padding:'15px'}}>

        <Skeleton  count={7}/>
                </div>

    </div>
    <div className="tweet-wrap">
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
                    <div style={{padding:'15px'}}>

        <Skeleton  count={7}/>
                </div>

    </div>
    <div className="tweet-wrap">
        <div className="tweet-header">
            <Skeleton circle={true} height={50} width={50} />
        </div>
        <br />
                    <div style={{padding:'15px'}}>

        <Skeleton  count={7}/>
                </div>

    </div>



    

    </>
    );
}
 
export default LoadSkeleton;