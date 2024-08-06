const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, curr) => acc + curr.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length == 0) {
    return null;
  }
  let fav = blogs[0];
  for (b of blogs) {
    if (b.likes > fav.likes) {
      fav = b;
    }
  }

  return fav;
};

const mostBlogs = (blogs) => {
  if (blogs.length == 0) {
    return null;
  }
  let totals = {};

  for (b of blogs) {
    if (totals.hasOwnProperty(b.author)) {
      totals[b.author].blogs += 1;
    } else {
      totals[b.author] = {
        author: b.author,
        blogs: 1,
      };
    }
  }

  let most = { blogs: 0 };
  for (t in totals) {
    if (totals[t].blogs > most.blogs) {
      most = totals[t];
    }
  }

  return most;
};

const mostLikes = (blogs) => {
  if (blogs.length == 0) {
    return null;
  }
  totals = {};

  for (b of blogs) {
    if (totals.hasOwnProperty(b.author)) {
      totals[b.author].likes += b.likes;
    } else {
      totals[b.author] = {
        author: b.author,
        likes: b.likes,
      };
    }
  }

  let most = { likes: 0 };
  for (t in totals) {
    if (totals[t].likes > most.likes) {
      most = totals[t];
    }
  }

  return most;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
