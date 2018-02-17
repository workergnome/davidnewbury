---
title: Cultural Dates
link: https://www.github.com/arttracks/cultural_dates
source: https://www.github.com/arttracks/cultural_dates
desc: A ruby library for parsing human-readable dates and intervals in ETDF
---

Have you ever wished that there was an easy way for computers to make sense of the complications around the vague, imprecise dates cultural historians use?  Perhaps you've gone looking for concepts like [Allen Interval algebra](https://en.wikipedia.org/wiki/Allen%27s_interval_algebra), [XML Schema dates](https://www.w3.org/TR/xmlschema-2/) or [CIDOC-CRM](http://www.cidoc-crm.org), but you've backed away from the edge of that abyss, shaking your head and hoping your sanity remains intact.

`cultural_dates` is a library written from the *other side*, providing sensible defaults and formats for humans and comprehensive schemas and abstractions for computers.  At its core, it's a parser that takes human-readable expressions like "Sometime after the 1880s until at least October 1920" and converts it into concrete dates in various forms, while still trying to maintain the underlying precision and expression.  It also goes the other way, taking the underlying data model and humanizing it into strings that have meaning for humans.
