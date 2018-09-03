---
permalink: /contact/
title: "Contact"
layout: single
date: 2018-08-20T03:02:20+00:00
---
<h2> Using the contact information </h2>
Email: <carvalho.rexon@gmail.com><br>
Phone: (585) 532 8039

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
</head>

<h2 align = "center"> OR </h2>

<h2> By filling the contact form</h2>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Email address..">

    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Type your message here.." style="height:200px"></textarea>

    <input type="submit" value="Send">
  </form>
</div>
