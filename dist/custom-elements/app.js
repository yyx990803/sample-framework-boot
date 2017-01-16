/*!
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global customElements */

'use strict';

customElements.define('comments-app', class extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    if (typeof window.__comments === 'undefined') {
      console.warn('Unable to find comment data. Bailing.');
      return;
    }

    const comments = document.createElement('post-comments');
    comments._data = window.__comments;

    this.innerHTML = `<section class="post">
      <h1 class="post__title">A post about priorities and scheduling</h1>
      <a href="#" class="post__link">http://example.com/post</a>
      <div class="post__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci mauris, euismod quis imperdiet eu, lacinia in leo. Mauris in orci sit amet eros finibus molestie. Vivamus laoreet, nibh eget ultrices consequat, leo mauris suscipit libero, eget feugiat enim turpis ac neque. Nam venenatis dolor ac posuere rhoncus.</p>
        <p>In eget finibus sapien, sit amet tempus augue. Pellentesque eu interdum nulla, sit amet dictum turpis. Sed ut lorem quis purus aliquet egestas. Nulla id risus ex. Morbi et lacinia risus. Integer eget ornare arcu. Donec purus est, dignissim a ante a, lacinia placerat massa. Donec quis lacinia lorem.</p>
      </div>
    </section>`;

    this.querySelector('.post').appendChild(comments);
  }
})

customElements.define('post-comments', class extends HTMLElement {
  constructor () {
    super();
    this._data = null;
  }

  set data (_data) {
    this._data = _data;
  }

  connectedCallback () {
    this.classList.add('post__comments');

    if (this.querySelector('.post__comment')) {
      return;
    }

    if (!this._data) {
      console.warn('No data to populate the comments');
      return;
    }

    const header = document.createElement('h1');
    header.textContent = 'Comments';
    this.appendChild(header);

    this._data.forEach(comment => {
      const postComment = document.createElement('post-comment');
      postComment.innerHTML = `
        <h2 class="post__comment-author">${comment.username} wrote</h2>
        <p class="post__comment-text">
          ${comment.text}
        </p>

        <vote-buttons score="${comment.score}" class="post__vote-buttons">
        </vote-buttons>
      `;
      this.appendChild(postComment);
    });
  }
});

customElements.define('post-comment', class extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.classList.add('post__comment');
  }
});

customElements.define('vote-buttons', class extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.classList.add('post__vote-buttons');

    if (this.querySelector('.post__vote-score')) {
      this._init();
      return;
    }

    this._createMarkup();
    this._init();
  }

  _createMarkup () {
    const score = this.getAttribute('score') || 0;
    this.innerHTML = `
      <button class="post__vote-down">-</button>
      <span class="post__vote-score">${this._formatScore(score)}</span>
      <button class="post__vote-up">+</button>
    `;
  }

  _init () {
    this._scoreElement = this.querySelector('.post__vote-score');
    this._score = parseInt(this._scoreElement.textContent, 10) || 0;
    this._upvoteButton = this.querySelector('.post__vote-up');
    this._downvoteButton = this.querySelector('.post__vote-down');

    this._upvoteButton.addEventListener('click', _ => this._incrementScore());
    this._downvoteButton.addEventListener('click', _ => this._decrementScore());
  }

  _formatScore (_score) {
    return _score <= 0 ? _score : `+${_score}`;
  }

  set score (_score) {
    this._score = _score;
    this._scoreElement.textContent = this._formatScore(_score);
  }

  get score () {
    return this._score;
  }

  _incrementScore () {
    this.score++;
  }

  _decrementScore () {
    this.score--;
  }
});
