var BlogBox = require('./BlogBox');
 
React.render(<BlogBox url="http://localhost:3000/api/blogs" pollInterval={2000} />, document.getElementById('content'));