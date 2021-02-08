# ui
This repo contains the music-service and the UI Test.docx file with instructions on what needs to be done.  The information below describes how to get the music-service running.

1) Clone this repo.
2) start the server:
    $ cd service
    $ docker-compose up
4) Test the service
    $ curl localhost:5000/albums

To stop service:
    $ CTRL-C
    $ docker-compose down

NOTE: the music-service has 3 endpoints and runs on port 5000:
http://localhost:5000/albums
http://localhost:5000/artists
http://localhost:5000/songs

Each of these endpoints supports pagination, sorting and filtering

Filter
Use . to access deep properties

GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode

Paginate
Use _page and optionally _limit to paginate returned data.

In the Link header you'll get first, prev, next and last links.

GET /posts?_page=7
GET /posts?_page=7&_limit=20
10 items are returned by default

Sort
Add _sort and _order (ascending order by default)

GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
For multiple fields, use the following format:

GET /posts?_sort=user,views&_order=desc,asc


***** NOTE: Push your changes to your own github repo (NOT THIS ONE!) and send back the uri. *****
