let default_color = "#ffa31a";
let mark_color_1 = "#ff7676";
let mark_color_2 = "#6094ea";
let mark_color_3 = "#736efe";
let mark_color_4 = "#28c76f";
let mark_color_5 = "#5976ba";
let mark_color_6 = "#8a1874";

var words_filler_all;
var mark_words_1 = [];
var mark_words_2 = [];
var mark_words_3 = [];
var mark_words_4 = [];
var mark_words_5 = [];
var mark_words_6 = [];

function getArrEqual(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j].innerText === arr2[i]) {
        newArr.push(arr1[j]);
      }
    }
  }
  return newArr;
}

function get_words_filler_all() {
  var explain_head = document.getElementById("explain-head");
  words_filler_all = explain_head.querySelectorAll(".word-filler");
}
function mark_color(arr, color) {
  for (i = 0; i < arr.length; i++) {
    document.getElementById(arr[i].id).style.color = color;
    document.getElementById(arr[i].id + "-exp").style.color = color;
  }
}
document.getElementById("mark-level").addEventListener("change", () => {
  var user_selected_degree = document.getElementById("mark-level").value;
  if (user_selected_degree == "mark-0") {
    console.log("还原默认");
    get_words_filler_all();
    mark_color(words_filler_all, default_color);
  } else if (user_selected_degree == "mark-1") {
    get_words_filler_all();
    mark_words_1 = getArrEqual(words_filler_all, mark_1);
    if (mark_words_1.length) mark_color(mark_words_1, mark_color_1);
  } else if (user_selected_degree == "mark-2") {
    get_words_filler_all();
    mark_words_2 = getArrEqual(words_filler_all, mark_2);
    if (mark_words_2.length) mark_color(mark_words_2, mark_color_2);
  } else if (user_selected_degree == "mark-3") {
    get_words_filler_all();
    mark_words_3 = getArrEqual(words_filler_all, mark_3);
    if (mark_words_3.length) mark_color(mark_words_3, mark_color_3);
  } else if (user_selected_degree == "mark-4") {
    get_words_filler_all();
    mark_words_4 = getArrEqual(words_filler_all, mark_4);
    if (mark_words_4.length) mark_color(mark_words_4, mark_color_4);
  } else if (user_selected_degree == "mark-5") {
    get_words_filler_all();
    mark_words_5 = getArrEqual(words_filler_all, mark_5);
    if (mark_words_5.length) mark_color(mark_words_5, mark_color_5);
  } else if (user_selected_degree == "mark-6") {
    get_words_filler_all();
    mark_words_6 = getArrEqual(words_filler_all, mark_6);
    if (mark_words_6.length) mark_color(mark_words_6, mark_color_6);
  }
});
