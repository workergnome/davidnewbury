

---

## Projects

* [Stereographs in IIIF (2021)](https://stereograph.davidnewbury.com/).  A IIIF-powered viewer for stereo photographs, with the ability to download GIFs and view the images in VR.
* [Date Calculator (2019)](https://date-calculator.davidnewbury.com) A Testbed for roundtripping EDTF dates and periods into English Phrases.  Extracted from the Art Tracks code as a stand-alone library.
* [Evil Manifests (2018)](http://evil-manifests.davidnewbury.com) A collection of malicious IIIF 2.1 manifests--think fork bombs, HTML escaping, etc.
* [Art Tracks (2015-2017)](http://www.museumprovenance.org/).  A research project to define a standard for representing traditional art history provenance in a format the bridges existing practice and digital standards.
* [American Art Collaborative (2016-2017)](http://browse.americanartcollaborative.org).  The American Art Collaborative was a Mellon and IMLS-funded consortium of 14 art museums in the United States committed to establishing a critical mass of linked open data (LOD) on the semantic web.  Led development of the public interface with [Design for Context](https://www.designforcontext.com), developed the consensus data model, and [built an application for reviewing the data](https://review.americanartcollaborative.org).  This work on the American Art Collaborative became the foundation of the [linked.art](https://linked.art) project. [(code)](https://www.github.com/designforcontext/aac_browse_app)
* [Six Degrees of Frances Bacon (2017)](http://www.sixdegreesoffrancisbacon.com)
A social network visualization of early modern literature.  Led a redesign of the backend and data infrastructure. ([code](https://github.com/sdfb/sdfb))
* [Carnegie Museum Film/Video Archives](http://records.cmoa.org)  Online access to an archive of digitized materials from the Film/Video department, highlighting years of experimental film screenings and communication with artists like Stan Brakhage and Carolee Schneemann.
* [Terrapattern (2016)](http://www.terrapattern.com/) Terrapattern is a way to search visually within satellite imagery using computer vision.  Funded by the Knight Foundation.  [(code)](https://github.com/CreativeInquiry/terrapattern)
* [Moon Drawings (2015)](https://creativeinquiry.github.io/moondrawings.org/) A project to extend artistic expression to the Moon. In spring 2015, nearly nine thousand people contributed line drawings to this project. These drawings will be etched on a sapphire disc, to be sent to the Moon.

---

## Code

#### [Cultural Dates: **A Ruby library for parsing cultural heritage dates and intervals in EDTF**](https://www.github.com/arttracks/cultural_dates)


Have you ever wished that there was an easy way for computers to make sense of the complications around the vague, imprecise dates cultural historians use?  Perhaps you've gone looking for concepts like [Allen Interval algebra](https://en.wikipedia.org/wiki/Allen%27s_interval_algebra), [XML Schema dates](https://www.w3.org/TR/xmlschema-2/) or [CIDOC-CRM](http://www.cidoc-crm.org), but you've backed away from the edge of that abyss, shaking your head and hoping your sanity remains intact.

`cultural_dates` is a library written from the *other side*, providing sensible defaults and formats for humans and comprehensive schemas and abstractions for computers.  At its core, it's a parser that takes human-readable expressions like "Sometime after the 1880s until at least October 1920" and converts it into concrete dates in various forms, while still trying to maintain the underlying precision and expression.  It also goes the other way, taking the underlying data model and humanizing it into strings that have meaning for humans.


#### [OFXOscuino](https://github.com/workergnome/ofxOscuino)

ofxOscuino is a quick and dirty [OpenFrameworks](http://openframeworks.cc) addon for using the [Oscuino](http://cnmat.berkeley.edu/oscuino) library for [OSC](http://opensoundcontrol.org) on [Arduino](http://www.arduino.cc).  It works as a bridge between the serial port and the UDP libraries.

It does this by creating a SLIP bridge and sending the OSC messages over serial to the arduino.  Any messages sent back will be converted back into OSC and sent over the UDP port back to the application.  While this is certainly not the most efficient way to do so, it lets all the existing OpenFrameworks OSC stuff work out of the box.

Included in the example is a very basic example Arduino sketch, called `ofxOscuinoArduinoExample`.  This will require that you have installed the [Oscuino Arduino Library](https://github.com/CNMAT/OSC) into your installation of Arduino.


#### [IIIF_S3](https://www.github.com/cmoa/iiif_s3)

A Ruby IIIF 2.1 Level 0 IIIF processing library, written as part of Carnegie Museum of Art's [archives project](https://records.cmoa.org).  It can be used to generate IIIF compatible images stacks and metatdata from a collection of images, and then to upload those images to Amazon S3 for static serving.

_This library still works, to my knowledge, but hasn't been updated recently.  I'd recommend using <https://github.com/go-iiif/go-iiif> these days._

### [Micro-Authority](http://microauthority.museumprovenance.org)  [(code)](https://www.github.com/arttracks/microauthority)

If you've got a list of people and you'd like to publish them on the web as Linked Open Data, MicroAuthority is a simple, bare-bones system that provides an API, search, and other tools for developers and digital researchers.

MicroAuthority creates both HTML & Linked Open Data endpoints for institutional Agent authority files—lists of people, organizations, and groups. Data is provided by the institution as a CSV file. MicroAuthority automatically creates a unique URI for every row in that CSV file that works as both a webpage and as machine-readable Linked Open Data.

#### [Exquisite Donut](https://github.com/workergnome/exquisite_donut)

In the surrealist party game "The Exquisite Corpse", each player creates a partial drawing and then folds the paper, leaving only a few connecting lines visible. The next player continues those lines in their own style, together creating a collaborative work.  _Exquisite Donut_ extends this game into software—instead of lines, each application passes particles to the next one, allowing for dynamic, collaborative artworks.



---

## Talks and Presentations
* 2021 — [Stereographs in IIIF](https://youtu.be/IOPZ5Gx-sH8?t=1071), IIIF Annual Conference
* 2021 — [IIIF Across Platforms](https://www.youtube.com/watch?v=Qc66Jm-IzhQ), IIIF Community Call ([slides](https://www.slideshare.net/workergnome/iiif-across-platforms-iiif-community-call-january-2021))
* 2020 — Future of Digital Provenance, International Catalogue Raisonné Association Annual Conference
* 2020 — [Canvases as First-Class Citizens](https://www.youtube.com/watch?v=E1tta7dDGao) IIF Fall Working Meeting. ([slides](https://www.slideshare.net/workergnome/iiif-canvases-as-first-class-citizens))
* 2020 — IIIF and Linked Open Data, LODLAM 2020 ([slides](https://www.slideshare.net/workergnome/iiif-and-linked-open-data-lodlam-2020))
* 2020 — Next Generation Solutions, Digitization and the State of the Art World, Wildenstein Plattner Institute
* 2019 — Digital Humanities and the Art Museum: Perspectives, Challenges, and Opportunities, ACH 2019
* 2019 — Linked.art Data Profile. ICOM Annual Conference
* 2019 — How to Fail Interdisciplinarily, Network Analysis and Digital Art History, University of Pittsburgh ([slides](https://www.slideshare.net/workergnome/how-to-fail-interdisciplinarily))
* 2019 — Sharing Data Across Memory Institutions, Philadelphia Museum of Art ([slides](https://www.slideshare.net/workergnome/sharing-data-across-memory-institutions))
* 2019 — Ed Ruscha’s Streets of LA: A lesson in digitizing, organizing and presenting visual information at The Getty. Visual Resources Association
* 2018 — [Extending IIIF 3.0](https://iiif.io/event/2018/washington/program/paper-56/), 2018 IIIF Conference ([slides](https://www.slideshare.net/workergnome/extending-iiif-30))
* 2018 — LOUD: Linked Open Usable Data and linked.art. CIDOC Annual Conference
* 2018 — NDSR Art: Learning Enrichment Session with David Newbury, NDSR Art, ARLIS/Philadelphia Museum of Art ([slides](https://www.slideshare.net/workergnome/ndsr-learning-enrichment-data-models-and-linked-data))
* 2017 — Art Tracks: using Linked Open Data for object provenance in museums. MW17: MW 2017
* 2017 — Fuzzy Dates & the Digital Humanities, Keystone DH 2017 ([slides](https://www.slideshare.net/workergnome/fuzzy-dates-the-digital-humanities))
* 2017 — Perspectives on Open Source for Museums’ Digital Projects, AAM 2017
* 2017 — Lessons Learned i Building Linked Data for the American Art Collaborative. ISWC2017
* 2017 — History, Art, and Linked Data, Digital Humanities Literacy Workshop, Carnegie Mellon University
* 2017 — [Standardizing Museum Provenance for the Twenty-first Century](https://britishart.yale.edu/videos/standardizing-museum-provenance-twenty-first-century). Yale Center for British Art. ([slides](https://www.slideshare.net/workergnome/21st-century-provenance-lessons-learned-building-art-tracks))
* 2017 — Art Tracks: Standardizing Museum Provenance for the 21st Century. Keynote, German/American Exchange on Nazi-Era Art Provenance Research ([slides](https://www.slideshare.net/workergnome/art-tracks-from-provenance-to-structured-data))
* 2016 — IIIF for Small Projects, Keystone DH 2016 ([slides](https://www.slideshare.net/workergnome/iiif-for-small-projects))
* 2016 — Authority Cascades: A Presentation Strategy for Information Overload, Keystone DH 2016 ([slides](https://www.slideshare.net/workergnome/authority-cascades-a-presentation-strategy-for-linked-open-data))
* 2016 — Linked Data: Worse is Better, MCN 2016 ([slides](https://www.slideshare.net/workergnome/linked-data-worse-is-better))
* 2016 — Art Collections, Technology, and the Museum, Emergent Digital Practices, University of Denver ([slides](https://www.slideshare.net/workergnome/art-collections-technology-and-the-museum))
* 2015 — Archives as First Class Digital Citizens. MCN 2015 ([slides](https://www.slideshare.net/workergnome/archives-as-first-class-digital-citizens))


---

## Writings

* 2021 — Nina Callaway, David Newbury, Rik Vanmechelen, Shyam Oberoi. [Getting Your Data to Your Users: A Nerdy Deep Dive into APIs, ETLs, and Aggregated Databases.](https://mw21.museweb.net/paper/getting-your-data-to-your-users-a-nerdy-deep-dive-into-apis-etls-and-aggregated-databases/) MW21: MW 2021.
* 2020 — Alison Langmead, David Newbury. [Pointers and Proxies: Thoughts on the Computational Modeling of the Phenomenal World](https://www.taylorfrancis.com/chapters/edit/10.4324/9780429505188-31/pointers-proxies-alison-langmead-david-newbury). The Routledge Companion to Digital Humanities and Art History, Routledge.
* 2019 — David Newbury, Louise Lippincott. [Provenance in 2050.](https://rowman.com/ISBN/9781538127575/Collecting-and-Provenance-A-Multidisciplinary-Approach) _Collecting and Provenance: a Multidisciplinary Approach_, Rowman & Littlefield.
* 2018 — Alison Langmead, Tracey Berg-Fulton, Thomas Lombardi, David Newbury, Christopher Nygren. [A Role-Based Model for Successful Collaboration in Digital Art History](https://journals.ub.uni-heidelberg.de/index.php/dah/article/view/34297). _International Journal for Digital Art History_ 3 (2018): 152-80.
* 2017 —  David Newbury. [Art Tracks: using Linked Open Data for object provenance in museums](https://mw17.mwconf.org/paper/art-tracks-using-linked-open-data-for-object-provenance-in-museums/). MW17: MW 2017
* 2015 — Tracey Berg-Fulton, David Newbury, Travis Snyder [Art Tracks: Visualizing the stories and lifespan of an artwork](https://mw2015.museumsandtheweb.com/paper/art-tracks-visualizing-the-stories-and-lifespan-of-an-artwork/). MW2015: Museums and the Web 2015

## Teaching

* [Telling Stories with Data](http://datastories.davidnewbury.com/) Spring 2017. Heinz College, Carnegie Mellon University.  A practical graduate-level course on explanatory data visualization, with an emphasis on execution, not theory.