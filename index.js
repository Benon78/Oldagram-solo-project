import { posts} from './data.js'
const mainContentEl = document.getElementById('main-content');

// Call the function to generate HTML
function getHtml(){
    let mainContent = '';
       posts.forEach(function(post){

            if(post.isLiked){
                var likeIconclass = 'liked';
            }
       
            mainContent += `
            <section class="post-content">
                        <div class="user-info">
                            <div class="user-avatar">
                                <img src="${post.avatar}" alt="image of avatar-vangogh">
                            </div>
                            <div class="user-discription">
                                <p class="user-full-name">${post.name}</p>
                                <p class="user-location">${post.location}</p>
                            </div>
                        </div>
                        <div class="post-image">
                            <img src="${post.post}" alt="image of post drawing vangogh">
                        </div>
                        <div class="post-footer">
                            <div class="post-likes">
                                <img src="images/icon-heart.png" class="${likeIconclass}" alt="icon of heart" id="like-count" data-like="${post.uuid}">
                                <img src="images/icon-comment.png" alt="icon of comment">
                                <img src="images/icon-dm.png" alt="icon of dm">
                            </div>
                            <div class="like-count">
                                <p>${post.likes} likes</p>
                            </div>
                            <div class="user-caption">
                                <p>${post.username} <span>${post.comment}</span></p>
                            </div>
                        </div>

            </section> 
            `
            
        })
        return mainContent;
    }

    // Call the function to render HTML on the webpage
    function renderHtml(){
        mainContentEl.innerHTML = getHtml();
    }

    renderHtml();

    // Add event listener for scrolling the page and adding header class when scrolling
  document.addEventListener('scroll', () =>{
         const headerEl = document.querySelector('header');
                if(window.scrollY > 0){
                    headerEl.classList.add('scrolled');
                }else{
                    headerEl.classList.remove('scrolled');
            }
     })
        
     // Add event listener for clicking the like button to increment the like count and update the HTML
document.addEventListener('click',function(e){
    if(e.target.dataset.like){
        const likeCountObj = posts.filter(function(post){
            return post.uuid === e.target.dataset.like;
        })[0]

        if(likeCountObj.isLiked) {
        likeCountObj.likes--;
        }
        else {
        likeCountObj.likes++;
        }
        likeCountObj.isLiked =!likeCountObj.isLiked;
        renderHtml()
    }

})

























                    



































