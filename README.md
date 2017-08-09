# js-ember-blog

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Planning

1. Configuration/Dependencies
_In addition to the above Prerequisites, this app uses the following Dependencies:_
  * Bootstrap
  * jQuery

2. Specifications
  * Reader can view all blog posts on homepage.
  * User can create new blog post.
  * User can edit existing blog post.
  * User can delete existing blog post.
  * Links to About and Contact page are always present.

3. Integration
  * Initial route to index.hbs template
  * Index.hbs template displays links for optional routes to
    * static templates about.hbs and contact.hbs
    * admin portal, which integrates add/update/delete post functionality.

4. UX/UI
  * Include bootstrap to be used in application.hbs template.
  * Develop custom style.

5. Polish
  * Refactor index.hbs with hide/show feature for each post.
  * Additional attributes for post model.
  * Make README awesome.

## Installation

* `git clone <repository-url>` this repository
* `cd js-ember-blog`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
