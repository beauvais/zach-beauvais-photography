---
title: "Facebook and the Open Graph: good for Linked Data?"
date: 2010-05-05
categories: 
  - "from-nodblog"
tags: 
  - "facebook"
---

**Originally appeared on Nodalities Blog: http://blogs.talis.com/nodalities**

**|This post will feature in Nodalities Magazine issue 10.**

* * *

In April, I was watching the twitterverse explode during the Facebook’s f8 conference, as a steady stream of links and gasps and applause and intentions to delete profiles poured out. My initial reaction to quickly-scanned third-hand reports was essentially: “Oh no.” The message I was getting was that personal information would be be made more public, and that more places would start sporting the little fb: “like” box you see on sites using Facebook Connect. I was concerned because there have been many conflicting messages around facebook and privacy, and this movement to include a wider presence online would essentially pull more people into a huge walled garden.

## Facebook Links Data?

Watch the f8 video sessions, though, and some interesting things begin to emerge. The main announcement at f8 is an update to Facebook’s API. Indeed, it wasn’t so much an update as a rewrite, moving from an older and complicated SOAP architecture with Facebook Connect to a more RESTful approach, giving services a simpler and more straightforward way to interact with content within Facebook using http. OK, so this isn’t particularly ground-breaking, nor is it very exciting in itself. What is far more interesting, is that Facebook’s engineers are using this word _graph_ to describe their ecosystem with the launch of the **Open Graph API**.

Firstly, their new Open Graph API is built to enable social plugins which let users on other sites pull content into facebook. So, little “like” boxes will let someone authenticated on facebook but viewing, for example, a movie site click to identify a film they, well… like. This information is recorded on their Facebook profile. But the interesting thing here is that the social plugin is identifying items and objects within pages, and the engineers who introduced the plugins are talking about linking to these individual things. They identify the fact that when someone indicates that they like a movie, that’s exactly what they’re doing. They’re not “liking” the page which contains the review, but the film itself. These social plugins tell Facebook that a person is expressing some kind of relationship with objects from the wider web. They talk about these people (Facebook users), and the things they’re interacting with (content, objects… _things_), as existing like points in a graph. There are people are objects, and there are relationships between these nodes. In essence, they’re talking about linking data.

To make this possible, they’ve written the Open Graph Protocol, based on RDFa. Site owners can begin marking-up their content, flagging their pages as Open Graph objects, that Facebookers can start to like. The Protocol contains a vocabulary of object types, and addresses physical location and contact information. So, I can now type in a few lines of metadata in my header, and start declaring the objects in my content. It’s all starting to sound very Linked Data, isn’t it? The Tetherless World blog even has a post showing a mapping between the Open Graph Protocol and RDF, exposing metadata to the wider Linked Open Data cloud. The long and short if this is that anyone who wants people to be able to join their content with the ecosystem of facebook users can do so using a very simple semantic markup process.

So, Facebook’s nearly half-a-billion users will soon start to make use of semantic links, and millions of sites will begin to mark-up their content using Linked Data. Indeed, they had a reported 50,000 sites implement social plugins within the first week! This is properly exciting, because it will dump billions of triples out there on the web, and give more developers a boost in dealing with machine-readable information. It hasn’t, however, completely negated my initial feeling about Facebook and the sprinkling of the web with thousands and thousands of likes.

## But…

Many people have renewed their concerns of Facebook’s stance on privacy. Some of the Open Graph API-accessible fields are now defaulted to be public until a user opts-out. Marshall Kirkpatrick talks about the vulnerability of this centralisation. Despite the more “open” direction in which the Open Graph points, it’s very clear that all this data—users’ own graphs of likes and relationships—will be a valuable asset, and facebook holds the keys to this personal data. They’ve already begun partnership deals with Microsoft, Yelp and Pandora; so users’ data will start to flow more freely between Facebook-selected organisations.

Liz Gannes over on gigaom points out that facebook is making itself a single point of failure for the web, and illustrates in another post that a facebook outage on 23rd April also took down partner-site plugins. Robert Scoble, while admiring their ambition also points out that the move requires a lot of trust in Facebook. We need to trust facebook with our own personal information, and trust it to look after the information we’re feeding it about our interests, relationships and tastes. It also raises questions about security: the stakes are higher if an account is hacked, or (as happened to the Scobleizer himself) disabled.

## My Thoughts:

So, the main impetus for using the Open Graph Protocol is to tie in with the Facebook ecosystem. This is not a Linked Data evangelism project, or the combined efforts of thousands of Semantic Web developers, but the logical move of a huge company to better manage their data. They’ll be creating billions of nodes on a huge, social graph; and for developers the initial purpose will be to join a group, and cash in on a quick win (if you happen to have use for social networking in your app/service/site.) We’ll see that little “like” button appear all over the place, even on sites which seem a bit odd (Share your next auto check-up on Facebook!) as the bandwagon sets off.

This means we’ll start seeing a **lot** of RDFa-like semantic metadata on pages all over the web, and this increase will be almost exclusively using JUST the Open Graph. But it will mean more folks will be asking for RDFa, and more developers will begin learning it as a strings to their bows. I wonder how long it’ll take before they start asking what else they can do with all this graph-data? Teaching people the value of machine-readable data (through a popular, specific application like Facebook) has the benefit of increasing developer knowledge and inquisitiveness.

This could be catalytic: allowing a rapid change in the direction of the Semantic Web. From a Linked Data perspective, though, I think a lot of this RDFa will be “wasted” as it’s implemented only for the purpose of joining in with the FB sphere, and is under-utilised. But, I think the interesting stuff will emerge as more innovators quickly find the limitations of Facebook’s controlled vocabulary and data-hoarding ambition and begin to see the potential the bigger Graph brings to their repertoires. What happens when thousands of developers are taught something that’s by definition boundless?

So, we’re left with a question of what we’ll build, and what the Linked Data community does in reaction. For my part, I think the most important message to raise is to mix your data freely. When people begin to see the existing ecosystem of Linked Data, and that it’s not just Facebook’s own-branded metadata, we’ll start to see innovative mashing, and thousands of new services. What will you build?
