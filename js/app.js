/*
  Please add all Javascript code to this file.
  GA JS-SF-8 Alex Zakupowsky
  Feedr code use News API for TechCrunch, ReCode, Hacker News, BusinessInsider 

var headline;
var url = 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=b761cf595c53455abfd175e2fadbab5f';
function setup(){ 

/*function gotData(data){
//  println(data);
headline = data;
}
function draw(){
  if (headliine) {
(headline.id.name);}}}


function setup(){
  noCanvas();
  loadJSON(url, gotData);
}
function gotData(data) {
  var docs = data.response.articles;

  for (var i=0; i < articles.length; i++){
    createElement('h1', docs[i].articles.title);
    createElement('h1', docs[i].articles.title);
    createP(docs[i].description);
  }

  println(data.response.articles[0].title);
}}
*/

var result;
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "766f776be5de46868c4ae0391f1c1f9f",
  'q': "CEO",
  'fq': "silicon valley"
});
$(document).ready(function (){
$.ajax({
  url: url,
  method: 'GET',
  dataType: 'json',
  success: function (data){
    $.each(JSON.parse(data), 
      $('body').append($('<div>',{
        text:element.name
      })));
    }
}).done(function(result) {
  console.log(result);
//  document.getElementById('main').innerHTML=result.response.docs["0"].headline.main;
var name = document.getElementsByTagName('h3').innerHTML=result.response.docs["0"].snippet;
  document.querySelectorAll('#main').innerHTML=result.response.docs["0"].snippet;
}).fail(function(err) {
  throw err;
});
})
var url = "https://api.nytimes.com/svc/topstories/v2/technology.json";
url += '?' + $.param({
  'api-key': "766f776be5de46868c4ae0391f1c1f9f"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
console.log(result);
results.articles.title.forEach(function(result){
  $("h1").append('<li>'+result.content.title+'</li>')
  $('#popUp').append('<h1>'+results["0"].title)
 var ny = jQuery.parseJSON(result.results[1].title);
 alert(ny.main);
  document.getElementById("headline").innerHTML = results["0"].title;
});
console.log(result);

var url = "https://api.nytimes.com/svc/topstories/v2/technology.json"
function setup() {
  noCanvas();
  loadJSON(url, gotData);
}
var println;
var data;
function gotData(data){
  println(data);
  var articles = data.response.docs;
  for (var i = 0; i < articles.length; i++){
    createElement('h3', articles[i].headline.main);
    createP(articles[i].snippet);
  }};
 println(data.response.docs[0].headline.main);

var gotArticles = document.getElementById("popUp");
var text = "<h3>"
var getArticles = document.getElementsByClassName("articleContent");
var text = "<h3>#headline</h3>";
//for (i=0; i < queryAll.length; ++i){
  queryAll[i].innerHTML = text;


//getArticle = data.response.docs[0].title.main;
//document.querySelector('h3').textContent = getArticle;

function setup(){
    loadJSON('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b761cf595c53455abfd175e2fadbab5f', gotData, 'jsonP');
}
function gotData(data) {
  println(data);
}

var text = "CEO";
myText = "New York Times";
hits = [];
for(i=0; i<text.length;i++){
  if(text[i]==="N"){
  //  for(var j=i; j<myText.length+, j++){

    }

function createNode(element)
{
  return document.createElement(element);
}
function append(parent,el)
{
  return parent.appendChild(el);
}
const ul = document.getElementById("popUp");
const url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=b761cf595c53455abfd175e2fadbab5f';

fetch(url)
.then((resp) => resp.json())
.then(function(data){
  let pages = data.results;
  return pages(function(popUp){
    let li = createNode('li');
  })})}

  $.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b761cf595c53455abfd175e2fadbab5f", function(results) {
    
      console.log(results);
    
      results.articles.title.forEach(function(result){
        $("#popUp").append('<li>'+result.content.title+'</li>')
      });
    
    })})