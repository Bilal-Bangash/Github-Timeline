#                          GitHub Timeline

API's and graphical representation of information are hallmarks of modern web applications.
GitHub Timeline combines the two to create a visual history of a user's GitHub activity.
The goal of GitHub Timeline is accept a GitHub user name and produce a timeline containing
each repo and annotated with the repo names, the date they were created, and their
descriptions. The timeline should be one that could be shared with a prospective employer. It
should be easy to read and make effective use of color and typography.
Only public GitHub repos should be displayed.
# Requirements

1. Users can enter a GitHub username.
2. Users can click a 'Generate' button to create and display the named users repo timeline.
3. Users can see only 10 activities at a time and can view more on scroll down. (Implement
infinite scroll)
4. Users can see a warning notification if the GitHub username is not a valid GitHub
username. (Implement useNotification custom hook for showing notification)
5. Users can see the repo details on clicking timeline activity. The details page should show
following details of the repo e.g name, description, URL, forksCount, watcherCount,
stars, created at, language, updated at, open_issues and size etc.
Bonus Feature
● Users can filter timeline activities by month and year.
Pages
● Main Page (Search + Timeline)
● Repo detail Page
Useful links and resources
GitHub offers two API's you may use to access repo data. You may also choose to use an NPM
package to access the GitHub API. Documentation for the GitHub API can be found at:
● GitHub REST API V3: https://developer.github.com/v3/
● GitHub GraphQL API V4: https://developer.github.com/v4/
Example Timeline projects
● CSS Timeline : https://codepen.io/NilsWe/pen/FemfK
● Vertical Timeline With CSS and JS: https://codepen.io/tutsplus/pen/QNeJgR
Time Duration: 4 Days (Max)