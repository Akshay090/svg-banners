## How to add new SVG to the collection 

### How it works ? 
We add HTML (actually XHTML) and CSS inside a <foreignObject> tag inside a SVG file and get it by an api call in <img> tag inside your readme from vercel.

### Steps to follow :

1. Start by installing ```markserv``` locally by ```npm i -g markserv``` and look at the SVG's in the SVG directory after serving them by ```markserv .```.

2. Create a new folder in SVG directory by the name of SVG you want to add then create a ```.svg``` file with the same name in that folder.

3. Copy over the content from ```origin.svg``` into your file (this gives you something to work with)

4. Now you can write/modify the html css in your SVG file. (TIP : Checkout codepen for html/css animation pens and use it in your SVG)

5. Once the SVG is done now add it as an API, to do that open ```src/svg``` folder and create a js file as per ```your_SVG_name.js```.

6. All files here follow a similar pattern. We copy over the new SVG file and add it in an arrow function with template strings, set custom parameters as per need (refer ```src/svg/origin.js``` to understand more).

7. Add your ```svgName.js``` file to ```src/svg/index.js```

8. That's it now just add example usage in Readme.md.

Things to understand :

The field ```type``` below refers to the ```svgs object``` in ```src/svg/index.js```. The other parameters such as ```text1, width, height``` are based on the parameters specified in the function in ```src/svg/svgName.js``` file.

```
    https://svg-banners.vercel.app/api?type=origin&text1=Dynamic%20SVG%20🤠&text2=💖%20Open%20Source&width=800&height=400
```

