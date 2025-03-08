'use strict';

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTask = document.getElementById('add-task');

// Create function btnAdd
const btnAdd = function () {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    // menambahkan elemen baru ke dalam daftar berdasarkan input pengguna.
    let li = document.createElement('li');
    // Mendeteksi input field yang dimaksukan
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
};

// Checked and Unchecked btn
const btnChecked = function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
};

// Function save Content
const saveData = function () {
  localStorage.setItem('data', listContainer.innerHTML);
};
// Function showTask
const showTask = function () {
  listContainer.innerHTML = localStorage.getItem('data');
};

// Call function when the btn is clicked
addTask.addEventListener('click', btnAdd);
// Call function checked
listContainer.addEventListener('click', btnChecked, false);
showTask();
