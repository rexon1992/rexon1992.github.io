---
permalink: /contact/
title: "Contact"
layout: single
date: 2018-08-20T03:02:20+00:00
---
<head>
<link rel="stylesheet" href="/assets/css/resume.css">

<style>
.container {
    border-radius: 5px;
    border-style: solid;
    border-color: #D6D6D6;
    background-color: #ffffff;
    border-width: 1.4px;
    padding: 10px;
    padding-bottom: 20px;
}

input {
  border-radius: 5px;
  border-style: solid;
  border-color: #D6D6D6;
  border-width: 1.4px;
}
input:hover{
  border-color: #0C72C6;
}
form{
  background-color: #ffffff;
}
textarea {
  border-radius: 5px;
  border-style: solid;
  border-color: #D6D6D6;
  border-width: 1.4px;
}
textarea:hover{
  border-color: #0C72C6;
}

</style>
</head>

<h2> Using the contact information </h2>
Email: <carvalho.rexon@gmail.com>

<h2 align = "center"> OR </h2>

<h2> By filling the contact form</h2>

<div class="container">
<form method="POST" action="https://formspree.io/rexon1992@gmail.com">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Your name.." required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Your email.." required>
  <label for="message">Message</label>
  <textarea id="message" name="message" placeholder="Your message.." style="height:150px"></textarea>
  <div class="alignright"><button class="btn" type="submit">Send</button></div>
</form>
</div>
