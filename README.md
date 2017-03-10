## React AJAX Library

Mjolnir is a lightweight, dependency free AJAX component for GET and POST requests. Minified file comes out to just 1.48 KB. Can be used as a React component or just as a plain JavaScript function.

#Usage
####React
```js
import { mjolnir } from "path/mjolnir.js"
```
####Vanilla JS
```html
<script type="text/javascript" src="mjolnir.min.js"></script>
```


####Call mjolnir
```js
  mjolnir ({
      url:"mypage",
      type:"GET", // GET or POST
      data:{
        name: "Thor",
        weapon: "Hammer",
        nationality: "Asgard"
      },
      // Callback Function
      // Data = response from the request
      success: function(data){
        // function to be executed on successful response
    }
});


````

## License

This library is under MIT License.
