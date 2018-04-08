# Hugo Theme Massively

Massively theme ported from [HTML5 UP](https://html5up.net/) for use with the [Hugo static site generator](https://gohugo.io/).

![](images/device-screenshots.png)

## Demo

https://curttimson.github.io/hugo-theme-massively/

## Setup

### Configuration

See the demo's configuration as an example:

https://github.com/curttimson/hugo-theme-massively/blob/master/exampleSite/config-prod.toml

Note that the current limit to pages of posts is 15 -- make sure to set the number of posts per page to something high enough to show all your posts if you'd like to ensure everything shows up. [See Issue #23](https://github.com/curttimson/hugo-theme-massively/issues/23) for more info.

### Cover Image

The cover image URL is hard-coded, therefore to replace this add an image to the following location in your Hugo application:

```
/static/images/bg.jpg
```

### Custom CSS
The CSS of the site can be added to using custom CSS. See the [basic config.toml example](https://github.com/curttimson/hugo-theme-massively/blob/master/exampleSite/config.toml) as an example.

## Development

### Example Site Deployment

```
$ hugo --config config-prod.toml
$ gulp deploy
```

## Original Theme Credits

 - [Massively by HTML5 UP](https://html5up.net/massively)

 ## License

This hugo theme is licensed under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/). 

Read More - [LICENSE](LICENSE)
