import { GitHubTimelineService } from './githubTimeline.service';


const Api = {
  githubTimeline: {
    getTimelineResponse: GitHubTimelineService.getTimelineResponse,
  },
  
};

export { Api };