import { axios } from './http.config.js';

class GitHubTimeline {
  getTimelineResponse = (params) => axios.get(`/users/${params}/repos`);
}

const GitHubTimelineService = new GitHubTimeline();
export { GitHubTimelineService };