// 影视数据
const mediaData = {
    movies: [
        {
            id: 1,
            title: "肖申克的救赎",
            year: 1994,
            rating: 9.7,
            poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NzE0LTg5OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGc@._V1_.jpg",
            status: "completed",
            genre: "剧情"
        },
        {
            id: 2,
            title: "阿甘正传",
            year: 1994,
            rating: 9.5,
            poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGc@._V1_.jpg",
            status: "completed",
            genre: "剧情/爱情"
        },
        {
            id: 3,
            title: "星际穿越",
            year: 2014,
            rating: 9.3,
            poster: "https://m.media-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_.jpg",
            status: "completed",
            genre: "科幻/冒险"
        },
        {
            id: 4,
            title: "怦然心动",
            year: 2010,
            rating: 9.1,
            poster: "https://m.media-amazon.com/images/M/MV5BMzE4MDcxNzE5NV5BMl5BanBnXkFtZTgwMjE1NDY3MTE@._V1_.jpg",
            status: "completed",
            genre: "剧情/爱情"
        },
        {
            id: 5,
            title: "寻梦环游记",
            year: 2017,
            rating: 9.2,
            poster: "https://m.media-amazon.com/images/M/MV5BYzYxZjM5NjctZWNhMi00YmYyLTg3YzItYjQzODJkZjQ4OGQ0XkEyXkFqcGc@._V1_.jpg",
            status: "watching",
            genre: "动画/冒险"
        }
    ],
    tvSeries: [
        {
            id: 1,
            title: "权力的游戏",
            year: "2011-2019",
            rating: 9.3,
            poster: "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NzE1MV5BMl5BanBnXkFtZTgwOTg3MDQ5MjI@._V1_.jpg",
            status: "completed",
            seasons: 8
        },
        {
            id: 2,
            title: "绝命毒师",
            year: "2008-2013",
            rating: 9.5,
            poster: "https://m.media-amazon.com/images/M/MV5BMjA5NTY0NjE0OV5BMl5BanBnXkFtZTgwMTk3NDg3MjE@._V1_.jpg",
            status: "completed",
            seasons: 5
        },
        {
            id: 3,
            title: "怪奇物语",
            year: "2016-至今",
            rating: 8.7,
            poster: "https://m.media-amazon.com/images/M/MV5BMjU1M2QzMDctYjYxMi00ZjViLWJmNWQtNjE3YzJjZjI4ZjY0XkEyXkFqcGc@._V1_.jpg",
            status: "watching",
            seasons: 4
        },
        {
            id: 4,
            title: "请回答1988",
            year: 2015,
            rating: 9.7,
            poster: "https://m.media-amazon.com/images/M/MV5BMjAzMzAyMDc3MF5BMl5BanBnXkFtZTgwNTMyMTIzMjE@._V1_.jpg",
            status: "completed",
            seasons: 1
        },
        {
            id: 5,
            title: "白夜追凶",
            year: 2017,
            rating: 8.9,
            poster: "https://m.media-amazon.com/images/M/MV5BMjM4NTMwMzU5NV5BMl5BanBnXkFtZTgwNTYzNDgzMzI@._V1_.jpg",
            status: "planned",
            seasons: 1
        }
    ]
};

// 渲染星级评分
function renderStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const totalStars = 5;
    let stars = '';

    for (let i = 0; i < totalStars; i++) {
        if (i < fullStars) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// 获取观看状态样式
function getStatusClass(status) {
    switch(status) {
        case 'completed': return 'status-completed';
        case 'watching': return 'status-watching';
        case 'planned': return 'status-planned';
        default: return '';
    }
}

// 获取观看状态文本
function getStatusText(status) {
    switch(status) {
        case 'completed': return '已看完';
        case 'watching': return '观看中';
        case 'planned': return '计划看';
        default: return '';
    }
}

// 渲染电影卡片
function renderMovieCard(movie) {
    const statusClass = getStatusClass(movie.status);
    const statusText = getStatusText(movie.status);
    const stars = renderStars(movie.rating);

    return `
        <div class="media-card" onclick="showMovieDetails(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title}" class="media-poster" onerror="this.src='https://via.placeholder.com/250x350?text=No+Image'">
            <div class="media-info">
                <h3 class="media-title">${movie.title}</h3>
                <div class="media-meta">
                    <span>${movie.year} · ${movie.genre}</span>
                </div>
                <div class="media-meta">
                    <div class="media-rating">
                        <span class="star">${stars}</span>
                        <span>${movie.rating}</span>
                    </div>
                    <span class="viewing-status ${statusClass}">${statusText}</span>
                </div>
            </div>
        </div>
    `;
}

// 渲染电视剧卡片
function renderTVCard(tv) {
    const statusClass = getStatusClass(tv.status);
    const statusText = getStatusText(tv.status);
    const stars = renderStars(tv.rating);

    return `
        <div class="media-card" onclick="showTVDetails(${tv.id})">
            <img src="${tv.poster}" alt="${tv.title}" class="media-poster" onerror="this.src='https://via.placeholder.com/250x350?text=No+Image'">
            <div class="media-info">
                <h3 class="media-title">${tv.title}</h3>
                <div class="media-meta">
                    <span>${tv.year} · 共${tv.seasons}季</span>
                </div>
                <div class="media-meta">
                    <div class="media-rating">
                        <span class="star">${stars}</span>
                        <span>${tv.rating}</span>
                    </div>
                    <span class="viewing-status ${statusClass}">${statusText}</span>
                </div>
            </div>
        </div>
    `;
}

// 显示电影详情
function showMovieDetails(id) {
    const movie = mediaData.movies.find(m => m.id === id);
    if (movie) {
        alert(`🎬 ${movie.title}
年份：${movie.year}
评分：${movie.rating}/10
类型：${movie.genre}
状态：${getStatusText(movie.status)}
----------
一部值得反复品味的经典佳作！`);
    }
}

// 显示电视剧详情
function showTVDetails(id) {
    const tv = mediaData.tvSeries.find(t => t.id === id);
    if (tv) {
        alert(`📺 ${tv.title}
播出：${tv.year}
评分：${tv.rating}/10
季数：${tv.seasons}季
状态：${getStatusText(tv.status)}
----------
值得追的精彩剧集！`);
    }
}

// 渲染所有电影
function renderMovies() {
    const moviesGrid = document.getElementById('movies-grid');
    moviesGrid.innerHTML = mediaData.movies.map(movie => renderMovieCard(movie)).join('');
}

// 渲染所有电视剧
function renderTVSeries() {
    const tvGrid = document.getElementById('tv-grid');
    tvGrid.innerHTML = mediaData.tvSeries.map(tv => renderTVCard(tv)).join('');
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
    renderTVSeries();
});