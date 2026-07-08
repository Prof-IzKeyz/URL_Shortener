<h1>URL_SHORTENER</h1> 
<h5>project no.: 11</h5>

<p>The URL_shortener is an API application that shortens links.</p> 

<h2>FEATURES</h2>
<ul>
  <li>Shortens any URL</li>
  <li>Redirect with the generated short link </li>
  <li>Can customize URL with any alphanumeric charcaters of your choosing</li>
</ul>

<h2>TECH STACK</h2>
<ul>
  <li><b>BACKEND:</b>Express, node.js</li>
  <li><b>FRONTEND:</b>EJs</li>
</ul>

<h2>GETTING STARTED</h2> 
</h4>To run locally:</h4>
<b>npm run start</b>
<p>Open  http://localhost:3000 for the API app.</p>

<h2>API ENDPOINTS</h2>

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>POST</code></td>
      <td>router.post('/', async(req, res)</td>
      <td>This is the bridging route, it handles form data submission from the frontend and sends the data back to ejs template layout</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td>'/:id', async(req,res)</td>
      <td> This handles the redirect logic when shortened link is visited.</td>
    </tr>
        <tr>
      <td><code>PUT</code></td>
      <td>router.put('/:id', async(req, res)</td>
      <td>Here we update an existing short code's original long URL</td>
    </tr>
        <tr>
      <td><code>DELETE</code></td>
      <td>/router.delete('/:id', async(req, res)</td>
      <td>This permanently deletes the short link from the system</td>
    </tr>
  </tbody>
</table>

<h2>MEMBERS & CONTRIBUTIONS</h2>
<li>Kenechukwu Emmanuel --> URL_shortener,Routes, bonus</li>
<li>James Ogundele -->File storage & Validation</li>
<li>Kadarallah Jayeola -->Routes, readme, gitignore</li>
<li>Kashimawo Samuel -->File storage & Validation</li>
<li>Itseuwa Dominion -->File storage and validation</li>
<li>Lawrence Uwanaobong -->File storage and validation</li>
<li>Israel Geofrey -->Set up Github repository, routes</li>
<li>Israel Ademu -->routes, bonus, File Storage</li>


<h5>ISSUES AND LIMITATIONS</h5>
<p>No issues or limitations</p>
