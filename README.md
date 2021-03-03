# CSS Settor ES6 Module

Styling css to html from JavaScript.

### Example

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <title>CSS Sector library</title>
</head>
<body>
    <div id="example">CSS Sector library example.</div>
    <script src="js/index.js" type="module"></script>
</body>
</html>
```

`js/index.js`

```javascript
import setCss from '../lib/css-settor.js';

const egElement = document.getElementById('example');
setCss(egElement, {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '20pt',
    fontFamily: 'Times New Roman',
    textAlign: 'center'
});
```