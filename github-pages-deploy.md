GitHub pages deploy
===================

In order to build and deploy the examples hosted by this repository, I used
GitHub pages and Travis. There is a nice and simple tutorial in
[Travis site](https://docs.travis-ci.com/user/deployment/pages/#stq=&stp=0)
which shows how to properly set you .travis.yml file so that it can deploy all
the generated artifacts to GitHub pages.

As the structure of this repository is actually a bunch of tiny npm projects,
I had to build each one individually in travis.yml. You can check what was done
by reading [it](.travis.yml).