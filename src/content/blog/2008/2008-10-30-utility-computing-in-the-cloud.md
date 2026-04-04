---
title: "Utility computing in the Cloud"
date: 2008-10-30
---

It is usually more interesting and educational to see a good heart-felt debate than complete agreement so you are in for a treat if you take the time to read the following from Nick Carr, Tim O'Reilly and the Smoothspan blog.

You can see from the debate that economics is at the heart of the discussion yet not understood in the same way by the three. I find myself pretty much in agreement with Tim, but it might be worth pulling out some of the strands to clarify. I think there is real confusion between economies of scale, direct and indirect network effects.

In this post I will focus on the utility computing layer in the cloud. I think the economics of platform as a service (PAAS), especially the cruical distinction between direct versus indirect network effects for defensibility, needs its own post.  

It’s pretty clear that utility cloud computing is highly capital intensive so it should come as no surprise that there are powerful economies of scale to be had. But the bottom line is that you are talking about plant and power. These are rival goods, scarce resources that are created and consumed. This is not different from many utility industries with one exception: the distribution network has global reach, already exists and is very cheap compared to existing utility distribution networks. It is a lot cheaper to access a computing resource on the other side of the planet than it is to send electricity or gas across the globe. So maybe [Hugh McLeod](http:// "http://www.gapingvoid.com/Moveable_Type/archives/004638.htm") ) is right. What is to stop economies of scale turning this into a global natural monopoly?

Actually, unless there are some large network effects, quite a lot stops single companies ruling entire industries. For a start, without network effects, economies of scale tend to run out: the curve is usually U-shaped ( take a look at http://en.wikipedia.org/wiki/Economies\_of\_scale ). Telecoms, Gas, rail companies have strong network effects from their infrastructure—it makes little sense to have duplicate rail networks or gas networks in a country. Utility computing does not have this advantage because the distribution network is not owned by them.

Smoothspan argues there are two potential network effects that could cause a single winner.

1) Lower costs of data exchange between apps in the same cloud

2) Elasticity

There is a network effect based on increased costs for cross-cloud interoperability, exactly as we have with mobile phone networks today. I don’t think this is a significant, long-term issue because we are talking about a relatively small number of cloud providers thanks to capital costs. Ironically, that means the cost of providing massive high speed bandwidth BETWEEN different cloud providers is actually very small; especially when compared with the cost of providing large bandwidth to every single home and mobile phone in the world. And, of course, the backbone telecoms providers are already geared up to provide exactly this kind of point to point, high capacity infrastructure.

If a cloud provider artificially inflated their cross cloud costs, they would directly cut the available data-sharing applications for a customer and would suffer a big negative network effect compared to providers that ensured their cloud was as open to cross cloud use as possible. Would you choose the walled garden?

Regarding the second point: I think Smoothspan is confusing economies of scale with network effects. A larger provider can more easily deal with variation of demand, but this is an economy of scale (the cost of providing variable demand of size X to a customer is lower for a bigger player) and in fact is a negative network effect; just like your Internet connection at home. If every other customer stopped using the service there would be more capacity available for you. If everyone is using the service there is less capacity available: a negative network effect. Just as with the power grid, dealing with variation of demand is more easily managed with multiple providers that can be called on when require. In the single supplier model, they have no one to share demand peaks with and must over-provide capacity far in excess of a shared model.

For me the bottom line on utility computing is that it is very much like the provision of telecoms and power but without the network effect of owning the network. I would not be surprised to see backwards integration along the supply chain in this industry (i.e. a power generator and a bulk telecoms provider might have the infrastructure and capital structure to build data centres more cost effectively than Google, Amazon or MS as the market matures).

This market is no where near mature. I expect that Google, Amazon and MS are still there own biggest cloud customers.

With the rise of utility computing in the cloud, it will soon become very easy to create a PAAS offering because the utility computing provider absorbs the large fixed costs and rents the infrastructure to the PAAS provider on an incremental marginal cost basis. This is very similar to the virtual mobile network operators (like Virgin) which ride on the back of the network providers. The difference here is that the PAAS has the chance to create powerful network effects. 

So to summarise, utility cloud computing is firmly built on economies of scale where as I think cloud based platforms (PAAS) need to be firmly built on the economics of network effects to be defensible. An interesting battle ground for PAAS seems to be centred around the difference between software centric and data centric network effects, but more on that in a later post.
