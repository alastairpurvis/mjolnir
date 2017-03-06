## Mjolnir AJAX Library

Super lightweight alternative to jQuery's AJAX function for GET and POST requests. Minifed file comes out to 1.48 KB.

#Usage
Include the script
```html
<script type="text/javascript" src="https://cdn.rawgit.com/flouthoc/minAjax.js/master/minify/index.min.js"></script>
```


####Calling mjolnir
```js
  mjolnirAjax({
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
