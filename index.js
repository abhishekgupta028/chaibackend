require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHubData = {
  "login": "abhishekgupta028",
  "id": 181587754,
  "node_id": "U_kgDOCtLPKg",
  "avatar_url": "https://avatars.githubusercontent.com/u/181587754?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abhishekgupta028",
  "html_url": "https://github.com/abhishekgupta028",
  "followers_url": "https://api.github.com/users/abhishekgupta028/followers",
  "following_url": "https://api.github.com/users/abhishekgupta028/following{/other_user}",
  "gists_url": "https://api.github.com/users/abhishekgupta028/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abhishekgupta028/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abhishekgupta028/subscriptions",
  "organizations_url": "https://api.github.com/users/abhishekgupta028/orgs",
  "repos_url": "https://api.github.com/users/abhishekgupta028/repos",
  "events_url": "https://api.github.com/users/abhishekgupta028/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abhishekgupta028/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abhishek Kumar",
  "company": null,
  "blog": "https://github.com/abhishekgupta028",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Learning and trying to build real world ideas by implementing something day by day.",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-09-14T16:24:55Z",
  "updated_at": "2025-09-28T14:01:48Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('abhishekdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login to Continue</h1>')
})

app.get('/signup', (req, res) => {
    res.send('<h1>Please Signup to Continue</h1>')
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
