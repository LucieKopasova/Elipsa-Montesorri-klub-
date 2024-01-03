//Nahravání galerie//
const fastglob = require("fast-glob");

module.exports = function (eleventyConfig) {
  // Výchozí výstupní složka: _site

  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");

  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");

  // Zkopírovat všechny *.js soubory na stejné umístění do _site
  eleventyConfig.addPassthroughCopy("js");

  //Nahravání galerie//

  const galerie = fastglob.sync(["images/galerie/*/*.*", "!_site"]);

  eleventyConfig.addCollection("galerie", function (collection) {
    let items = galerie.map((x) => {
      let paths = x.split("/");
      return {
        gallery: paths[paths.length - 2],
        path: x,
        name: [paths.length - 1],
      };
    });
    return items;
  });

  //konec nahravání galerie//

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
