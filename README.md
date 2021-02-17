# Postit

Postit is a clone of [Reddit](https://www.reddit.com/) built using [NextJS](https://nextjs.org/) and [Apollo](https://www.apollographql.com/docs/react/)

---

## Features

- user profile
  - receive email notifications
- create communities
- create posts on communities or on your user page
  - posts can include images and videos (stored in [Cloudindary](https://cloudinary.com/))
- add comments on posts, and other comments
- wysiwyg editor that extends [DraftJS](https://draftjs.org/)
- give and receive karma
- purchase coins
- give and receive awards
- moderator tools
- moderator messaging system
- payment system([Stripe](https://stripe.com/) and [Paypal](https://www.paypal.com/us/home))
  - premium subscription
- chat system(Graphql [subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/))
- Live Room
  - online users can interact with each other
  - will use [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) a try
