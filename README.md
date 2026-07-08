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
      <td>Generates a short URL from a long URL</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td>'/:id', async(req,res)</td>
      <td>Redirects the user to the original destination</td>
    </tr>
        <tr>
      <td><code>PUT</code></td>
      <td>/:shortCode</td>
      <td>Redirects the user to the original destination</td>
    </tr>
        <tr>
      <td><code>DELETE</code></td>
      <td>/:shortCode</td>
      <td>Redirects the user to the original destination</td>
    </tr>
  </tbody>
</table>

<h2>MEMBERS & CONTRIBUTIONS</h2>
<li>Kenechukwu Emmanuel --> Routes, bonus</li>
<li>James Ogundele -->File storage & Validation</li>
<li>Israel Geofrey --></li>
<li>Kadarallah Jayeola -->Routes, readme, gitignore</li>
<li>Kashimawo Samuel -->File storage & Validation</li>
<li>Itseuwa Dominion --></li>
<li>Lawrence Uwanaobong -->File storage and validation</li>
<li></li>File storage -->
<li>Israel Ademu --></li>


<h5>ISSUES AND LIMITATIONS</h5>
<p>No issues or limitations</p>
