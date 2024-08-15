const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContentEl = document.getElementById('main-content');
const likeEl = document.getElementById('like-count');
let mainContent = '';
const len = posts.length;
        for(let i = 0; i < len; i++ ){
            let count = posts[i].likes;
            

            mainContent += `
            <section class="post-content">
                        <div class="user-info">
                            <div class="user-avatar">
                                <img src="${posts[i].avatar}" alt="image of avatar-vangogh">
                            </div>
                            <div class="user-discription">
                                <p class="user-full-name">${posts[i].name}</p>
                                <p class="user-location">${posts[i].location}</p>
                            </div>
                        </div>
                        <div class="post-image">
                            <img src="${posts[i].post}" alt="image of post drawing vangogh">
                        </div>
                        <div class="post-footer">
                            <div class="post-likes">
                                <img src="images/icon-heart.png" alt="icon of heart" id="like-count">
                                <img src="images/icon-comment.png" alt="icon of comment">
                                <img src="images/icon-dm.png" alt="icon of dm">
                            </div>
                            <div class="like-count">
                                <p>${count} likes</p>
                            </div>
                            <div class="user-caption">
                                <p>${posts[i].username} <span>${posts[i].comment}</span></p>
                            </div>
                        </div>

            </section> 
            `
            
        }
mainContentEl.innerHTML = mainContent;

             
                    // likeEl.addEventListener('dblclick', ()=>{
                            
                    //             for(let i = 0; i < len; i++ ){
                    //                 posts[i].likes= 1;
                    //             }
                            
                    // })
                


























                    



































