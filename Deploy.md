# How to deploy

All source files are in the root directory to comply with [Github Pages](https://pages.github.com). The CGVC website uses [Jekyll](http://jekyllrb.com) to generate the raw html and resources.

## Using Docker

Check the [version of jekyll on github pages](https://pages.github.com/versions/) and use that below:

Then to start a jekyll server:

```bash
    docker run --name cgvc -v "$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:3.8.5 jekyll serve
```

And visit http://localhost:4000 in your browser for preview.

## Using Ruby

### Install

- [Ruby](https://www.ruby-lang.org/en/) - Required by Jekyll; OSX already has Ruby, Linux and Windows don't. On Linux at least you'll need `apt-get install ruby-dev` too for the headers
- [Bundler](http://bundler.io/#getting-started) `gem install bundler`
- [Jekyll](http://jekyllrb.com) - `gem install jekyll`

### Setup

    bundle install

Run `jekyll serve` in the terminal, and visit http://localhost:4000 in your browser for preview.

## Deploying to a Github Pages setup

Everything is automated, just push changes to GitHub.

## Domain DNS Setup

Cloudflare is used for DNS setup and email forwarding.
