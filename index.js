require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

const githubData = {
    "login": "thesrijankumar",
    "id": 173955269,
    "node_id": "U_kgDOCl5YxQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/173955269?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/thesrijankumar",
    "html_url": "https://github.com/thesrijankumar",
    "followers_url": "https://api.github.com/users/thesrijankumar/followers",
    "following_url": "https://api.github.com/users/thesrijankumar/following{/other_user}",
    "gists_url": "https://api.github.com/users/thesrijankumar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/thesrijankumar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/thesrijankumar/subscriptions",
    "organizations_url": "https://api.github.com/users/thesrijankumar/orgs",
    "repos_url": "https://api.github.com/users/thesrijankumar/repos",
    "events_url": "https://api.github.com/users/thesrijankumar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/thesrijankumar/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Srijan Kumar",
    "company": null,
    "blog": "",
    "location": "New Delhi, India",
    "email": null,
    "hireable": null,
    "bio": "I think, therefore I am",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 4,
    "following": 6,
    "created_at": "2024-06-26T19:41:41Z",
    "updated_at": "2025-04-12T18:54:42Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/friends', (req, res) => {
    res.send('hy guys')
})

app.listen(port,() => {
    console.log(`greeting from Express \nPlease visit the port at http://localhost:${port}`)
})