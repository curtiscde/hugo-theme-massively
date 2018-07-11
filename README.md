# Hugo Theme Massively

Massively theme ported from [HTML5 UP](https://html5up.net/) for use with the [Hugo static site generator](https://gohugo.io/).

![](images/device-screenshots.png)

## Demo

https://hugo-theme-massively.netlify.com/

## Setup

### Configuration

See the demo's configuration as an example:

https://github.com/curttimson/hugo-theme-massively/blob/master/exampleSite/config-prod.toml

#### Hugo Internal Templates

The theme currently also supports the following ["internal templates" supplied by Hugo](https://gohugo.io/templates/internal/)

 - [Disqus](https://gohugo.io/templates/internal/#disqus)
 - [Google Analytics](https://gohugo.io/templates/internal/#configure-google-analytics)

### Cover Image

The cover image URL is hard-coded, therefore to replace this add an image to the following location in your Hugo application:

```
/static/images/bg.jpg
```

### Supported Languages

 - [English](https://github.com/curttimson/hugo-theme-massively/blob/master/i18n/en.toml)
 - [French](https://github.com/curttimson/hugo-theme-massively/blob/master/i18n/fr.toml)
 - [Simplified Chinese](https://github.com/curttimson/hugo-theme-massively/blob/master/i18n/zh.toml)
 - [Spanish](https://github.com/curttimson/hugo-theme-massively/blob/master/i18n/es.toml)

## Custom Front Matter

 - `disableComments` - If set to `true` this will disable comments on the post when Disqus is enabled.

## Development

### Example Site Production Deployment

```
$ hugo --config config-prod.toml
```

### Custom Navigation Pages

If you would like to setup custom navigation pages you can add the content for the page you would like to link to under the content folder and then make sure you add a link entry for it under /data/navigation.toml. See the example site for a demonstration of this.

## Original Theme Credits

 - [Massively by HTML5 UP](https://html5up.net/massively)

 ## License

This hugo theme is licensed under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/). 

Read More - [LICENSE](LICENSE)
