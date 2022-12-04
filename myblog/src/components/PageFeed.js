import MiddleFeed from "./MiddleFeed"
import RightFeed from "./RightFeed"

const PageFeed = () => {
  return (
    <div className="PageFeed">
      <div className="PageFeedTitle"></div>
      <div className="columns">
        <MiddleFeed/>
        <RightFeed/>
      </div>
    </div>
  )
}

export default PageFeed
